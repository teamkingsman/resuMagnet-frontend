'use client'
import Lottie from "lottie-react";
import Link from "next/link";
import NotFoundAnimation from "@/assets/NOTFOUND.json"

const NotFoundPage = () => {
    return (
        <div>
            <div className=" w-full md:w-2/4 mx-auto text-center mb-6">
                <Lottie
                    className="w-3/4 mx-auto"
                    animationData={NotFoundAnimation}
                />
                <p className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-3">Could not find requested resource</p>
                <Link href="/"><button className="text-base md:text-xl border px-4 hover:px-5 md:px-8  md:hover:px-9 py-3 md:py-4 rounded-full shadow-highlight_color shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold ">Return Home</button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;