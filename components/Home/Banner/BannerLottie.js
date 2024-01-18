'use client'
import Lottie from "lottie-react";
import banner from "@/assets/banner.json";
import { useRef } from "react";
const BannerLottie = () => {
  const lottieRef = useRef();

  return (
    <>
      <Lottie
        animationData={banner}
        lottieRef={lottieRef}
        loop={false} />
    </>
  )
}

export default BannerLottie