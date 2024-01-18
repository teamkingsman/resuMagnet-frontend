
import SocialSignIn from "@/components/SocialSignIn/SocialSignIn";
import Link from "next/link";
import {
  MdOutlineLock,
  MdOutlineMail,
} from "react-icons/md";

function page() {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="h-80 w-80">{/* imagehere */}</div>
      <div className="card shrink-0 w-full max-w-sm ">
        <div className="text-center px-8 space-y-2"> 
          <p className="text-5xl text-main">Welcome</p>
          <p className="text-sm text-main">
           Sign in to get started and
            explore all the amazing features our platform has to offer.
          </p>
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="flex items-center gap-2 label-text font-semibold text-main">
                <MdOutlineMail></MdOutlineMail> Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input bg-base-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="flex items-center gap-2 label-text font-semibold text-main">
                <MdOutlineLock></MdOutlineLock> Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input bg-base-200"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt hover:underline hover:font-semibold text-main"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 ">
            <button
              type="submit"
              className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
            >
              Sign In
            </button>
          </div>
        </form>
        <SocialSignIn></SocialSignIn>
        <p className="text-center font-semibold py-4">
          <small className="text-main">New Here? Please </small>
          <Link href="/signUp" className="hover:underline hover:font-bold ">
            Sign Up.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
