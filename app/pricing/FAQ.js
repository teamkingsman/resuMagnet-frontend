import React from "react";

const FAQ = () => {
  return (
   <div className="">
    <h2 className="text-2xl md:text-5xl text-center px-6 font-bold pt-4 pb-6">Frequently Asked Questions</h2>
     <div className="space-y-2 pb-5">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Is ResuMagnet really free?
        </div>
        <div className="collapse-content ">
          <p className="w-5/6">Yes indeed! Your first resume and cover letter are completely on the house. If you are looking for more bells and whistles, we have Basic, Advance, Most Popular  plans ready to roll.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Will my plan automatically renew?
        </div>
        <div className="collapse-content">
          <p className="w-5/6">Yes, your plan will renew automatically to keep things smooth. But remember, you have got the power to turn this off whenever you like. 😎</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
         Can I change my plan?
        </div>
        <div className="collapse-content">
          <p className="w-5/6">Yes, you can upgrade, downgrade or cancel your plan at any time. Do it yourself in your account or contact us, we are here to help.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do I get full access with the trial?
        </div>
        <div className="collapse-content">
          <p className="w-5/6">Yes, the trial has all the premium features, with unlimited usage. 100% Full Access.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What payment options are available?
        </div>
        <div className="collapse-content">
          <p className="w-5/6">We are pretty flexible here. You can pay using Visa, Mastercard, American Express, Discover (debit), UnionPay in Stripe.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Who is behind ResumMagnet?
        </div>
        <div className="collapse-content">
          <p className="w-5/6">Behind the scenes at ResumMagnet is a duo of indie developers – a developer and a designer. We are not a big company, just a couple of folks passionate about simplifying the job application process. ResumMagnet is our solution for easy, beautiful, and stress-free resume and application creation. 💪😎</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default FAQ;
