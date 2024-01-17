'use client'
import Lottie from "lottie-react";
import banner from "@/assets/banner.json";
const BannerLottie = () => {
  return (
    <>
 <Lottie animationData={banner} loop={true} />
    </>
  )
}

export default BannerLottie