"use client"
import React, { useRef } from "react";
import Lottie from "lottie-react";
import lottie from "@/assets/auth.json";

function AuthLottie() {
  const lottieRef = useRef();
  return (
    <>
      <Lottie animationData={lottie} lottieRef={lottieRef} autoPlay={true}/>
    </>
  );
}

export default AuthLottie;
