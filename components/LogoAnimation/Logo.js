'use client'

import Lottie from "lottie-react";
import logo from '@/assets/Logo.json'
const Logo = ({className}) => {
    return (
        <div className={className}>
            <Lottie className="text-xl" animationData={logo} loop={false} />
        </div>
    );
};

export default Logo;