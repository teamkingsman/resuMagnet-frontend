import SocialSignIn from "@/components/SocialSignIn/SocialSignIn";
import AuthLottie from "@/components/AuthLottie";
import Link from "next/link";
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import Logo from "@/components/LogoAnimation/Logo";
function signin() {

  return (
    <div className="bg-main md:p-24 ">
      <div className="bg-neutral-50 hero-content flex-col lg:flex-row-reverse min-h-screen rounded-3xl mx-auto">
        <div className="hidden md:flex flex-col card shrink-0 w-full px-8 max-w-sm space-y-4">
          <div className=" px-8 space-y-4">
            <p className="text-center text-4xl font-bold text-main">Welcome</p>
            <p className="text-center text-sm font-semibold text-main">
              Sign in to get started and explore all the amazing features our
              platform has to offer.
            </p>
          </div>
        <AuthLottie></AuthLottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <form className="card-body">
            <Logo></Logo>
            <p className="text-3xl font-bold text-main">Sign In</p>
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
            <Link href="/signup" className="hover:underline hover:font-bold ">
              Sign Up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signin;
