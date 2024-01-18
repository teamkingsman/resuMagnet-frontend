'use client'
import Lottie from 'lottie-react';
const FeatureLottieIcon = ({icon}) => {
    return (
        <>
             <Lottie animationData={icon} className='w-24 h-16  mx-auto'/>
        </>
    );
};

export default FeatureLottieIcon;