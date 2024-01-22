import SocialSignIn from "@/components/SocialSignIn/SocialSignIn";
import AuthLottie from "@/components/AuthLottie";
import Link from "next/link";
import SignInForm from "@/components/Auth/SignInForm";

export const metadata = {
  title: "Sign in",
  description: "This is a Sign In page",
};

const Signin = () => {
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
         <SignInForm></SignInForm>
          <SocialSignIn></SocialSignIn>
          <div className="text-center font-semibold py-4">
            <small className="text-main">
              New Here? Please{" "}
              <Link href="/signup" className="hover:underline hover:font-bold ">
                Sign Up.
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
