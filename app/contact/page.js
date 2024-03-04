import ContactLottie from "@/components/Contact/ContactLottie";
import Contactus from "@/components/Contact/Contactus";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "This is a Contact Us page",
};

const Contact = () => {
  return (
    <div className="my-4 pt-10">
      <div className="bg-main md:p-24 min-h-screen py-6">
        <div className="bg-neutral-50 hero-content flex-col lg:flex-row-reverse mx-4  rounded-3xl  md:mx-auto">
          <div className="hidden md:flex flex-col card shrink-0 w-full px-4 pt-2 max-w-sm space-y-4">
            <div className=" px-8 space-y-4">
              <p className="text-center text-4xl font-bold text-main">
                Welcome
              </p>
              <p className="text-center text-sm font-semibold text-main">
                Feel free to reach out with any inquiries, suggestions , or just
                to say hello. We are looking forward to hearing from you.
              </p>
            </div>
            <ContactLottie></ContactLottie>
          </div>
          <div className="card md:shrink-0 w-full max-w-sm  ">
            <Contactus></Contactus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
