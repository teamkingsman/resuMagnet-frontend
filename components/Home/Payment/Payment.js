import React from 'react';
import PaymentCard from './PaymentCard';

const Payment = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-2'>
            <PaymentCard  price={'12'} title={'Students'} subtitle={'Basic'}></PaymentCard>
            <PaymentCard price={'40'} title={'Job Skeers'} subtitle={'Advance'}></PaymentCard>
            <PaymentCard price={'80'} title={'Professionals'} subtitle={'Most Popular'}></PaymentCard>
            </div>
        </div>
    );
};

export default Payment;