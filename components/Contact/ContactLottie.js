'use client'
import Lottie from "lottie-react";
import contactAnimation from "@/assets/contactus.json"

const ContactLottie = () => {
    return (
        <div>
            <Lottie
                animationData={contactAnimation}

                loop={true} />

        </div>
    );
};

export default ContactLottie;