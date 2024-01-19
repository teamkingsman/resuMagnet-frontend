'use client'

import Lottie from "lottie-react";
import logo from '@/assets/Logo.json'
const Logo = () => {
    return (
        <div className="w-full  md:w-1/2 lg:w-1/3 ">
            <Lottie className="text-xl" animationData={logo} loop={false} />
        </div>
    );
};

export default Logo;