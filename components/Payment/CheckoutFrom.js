"use client"
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutFrom.css'
import { toast } from 'react-toastify'
import { ImSpinner9 } from 'react-icons/im'
import useAuth from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
import { createPaymentIntent, saveInfo, updateJobUser, updateProfessionalsUser, updateStudentsUser,  } from '@/lib/BuilderAPI'

const CheckoutForm = ({ price, closeModal, }) => {
  // const axiosSecure = useAxiosSecure();
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  

  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false);
//   const navigate = useNavigate();

//   Create Payment Intent
    useEffect(() =>{
        
        if(price > 0){
          createPaymentIntent({price: price})
          .then(data =>{
            console.log(data.clientSecret);
            setClientSecret(data.clientSecret)
          })
        }
    },[price])

    const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    // card data lookup (Asynchronous network call )
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)

    if (paymentIntent?.status === 'succeeded') {
      // save payment information to the server
      
      const paymentInfo = {
        email: user.email,
        price,
        transactionId: paymentIntent.id,
        date: new Date(),
      }
      try{
        // save payment info to the server
        await saveInfo(paymentInfo)
        if(paymentIntent.amount == 1200){
          await updateStudentsUser(paymentInfo.email)
        }
        if(paymentIntent.amount == 4000){
          await updateJobUser(paymentInfo.email)
        }
        if(paymentIntent.amount == 8000){
          await updateProfessionalsUser(paymentInfo.email)
        }
        // await updateUser(paymentInfo.email)
        const text = `Payment Successful! ${paymentIntent.id} `
        
        // navigate('/')
        toast.success(text);
        toast.success("Your payment succesfully")
        // refetch()
      }catch (err){
        console.log(err);
        toast.error(err.message)
      }finally{
        setProcessing(false)
      }

      setProcessing(false)
    }
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-[#FEE2E2] px-4 py-2 text-sm font-medium text-[#7f1d1d] hover:bg-[#fecaca] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            // disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-[#bbf7d0] px-4 py-2 text-sm font-medium text-[#14532d] hover:bg-[#86efac] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-[#dc2626] ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm
