import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentCard from "./paymentCard";
import FAQ from "./FAQ";

const Pricing = () => {
  return (
    <div className="my-4 pt-10">
      <div className="bg-[#f9f9f9e6] max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2">
      <div>
        <h1 className="text-2xl md:text-4xl text-center px-6 font-bold pt-16">
          Trusted Tool For Everybody
        </h1>
        <p className="text-xl md:text-2xl font-medium pt-2 ">
          Simple tools. Simple prices. ResumMagnet is the ultimate career
          companion. Simply subscript for your Premium Membership. Utilize
          ResumMagnet to effortlessly craft polished resumes, striking
          applications, cover letters, and Cv!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-2">
          <PaymentCard
            price={"12"}
            title={"Students"}
            subtitle={"Basic"}
            feature1={"Unlimited resumes & cover letters"}
            feature2={"Image Croping"}
            feature3={"Interviews Practice Questions"}
          ></PaymentCard>
          <PaymentCard
            price={"40"}
            title={"Job Hunters"}
            subtitle={"Advance"}
            feature2={"All premium templates & colors"}
            feature1={"Unlimited PDF downloads"}
            feature3={"Job Searching"}
          ></PaymentCard>
          <PaymentCard
            price={"80"}
            title={"Professionals"}
            subtitle={"Most Popular"}
            feature1={"ATS Verification"}
            feature2={"All premium templates & colors"}
            feature3={"Unlimited resumes , cover letters & CV"}
          ></PaymentCard>
        </div>
      </div>
      <FAQ></FAQ>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Pricing;
