import React from 'react';
import PaymentCard from './PaymentCard';

const Payment = () => {
    return (
        <div className='bg-[#FDFEFE]'>
            <h1 className='text-2xl md:text-4xl text-center px-6 font-bold pt-16'>Trusted Tool For Everybody</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-2'>
            <PaymentCard  price={'12'} title={'Students'} subtitle={'Basic'} feature1={'Unlimited resumes & cover letters'} feature2={'Image Croping'} feature3={'Interviews Practice Questions'}></PaymentCard>
            <PaymentCard price={'40'} title={'Job Hunters'} subtitle={'Advance'} feature2={'All premium templates & colors'} feature1={'Unlimited PDF downloads'} feature3={'Job Searching'}></PaymentCard>
            <PaymentCard price={'80'} title={'Professionals'} subtitle={'Most Popular'} feature1={'ATS Verification'} feature2={'All premium templates & colors'} feature3={'Unlimited resumes , cover letters & CV'}></PaymentCard>
            </div>
        </div>
    );
};

export default Payment;