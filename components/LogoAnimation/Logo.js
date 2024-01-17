'use client'

import Lottie from "lottie-react";
import logo from '@/assets/Logo.json'
const Logo = () => {
    return (
        <div className="border-4">
            <Lottie className="text-2xl" animationData={logo} loop={true} />
        </div>
    );
};

export default Logo;