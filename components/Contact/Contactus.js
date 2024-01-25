'use client'
import { useForm, ValidationError } from '@formspree/react';
import { RiMailSendFill } from "react-icons/ri";
const Contactus = () => {
  const [state, handleSubmit] = useForm("mleqglwg");
  if (state.succeeded) {
    return <div>
        <marquee behavior="" direction="right">
        <RiMailSendFill className='text-6xl md:text-7xl px-3 text-center text-sub_color'/>
        </marquee>
       
      <p className='text-2xl md:text-3xl lg:text-4xl font-extrabold px-3 text-center text-main'>Message Send Succesfully</p>
    </div>;
  }

  return (
    <form onSubmit={handleSubmit} className="card-body px-4">
      <p className="text-3xl font-bold text-main">Contact Us</p>
      <div className="form-control">
        <label className="label">
          <span className="flex items-center gap-2 label-text font-semibold text-main">
            Email
          </span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your email"
          className="input bg-base-200"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="flex items-center gap-2 label-text font-semibold text-main">
            Your message for us
          </span>
        </label>
        <input
          id="message"
          name="message"
          placeholder="message"
          className="input bg-base-200 py-3"
          required
        />
      </div>
      <div className="form-control mt-6 ">
        <button
          type="submit"
          disabled={state.submitting}
          className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
        >
          Send
        </button>
      </div>

    </form>
  );
};

export default Contactus;