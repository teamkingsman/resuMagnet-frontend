import SocialSignIn from "@/components/Auth/SocialSignIn/SocialSignIn";
import AuthLottie from "@/components/AuthLottie";
import Link from "next/link";
import SignUpForm from "@/components/Auth/SignUpForm";

export const metadata = {
  title: "Sign Up",
  description: "This is a Sign up page",
};

const Signup = () => {
 
  return (
    <div className="bg-main md:p-24">
      <div className="bg-neutral-50 hero-content flex-col lg:flex-row-reverse min-h-screen rounded-3xl mx-auto">
        <div className="hidden md:flex flex-col card shrink-0 w-full px-8 max-w-sm space-y-4 ">
          <div className=" px-8 space-y-4">
            <p className="text-center text-4xl font-bold text-main">Welcome</p>
            <p className="text-center text-sm font-semibold text-main">
              Sign up to get started and explore all the amazing features our
              platform has to offer.
            </p>
          </div>
          <AuthLottie></AuthLottie>
        </div>
        <div className="card shrink-0 w-full max-w-sm ">
         <SignUpForm></SignUpForm>
          <SocialSignIn></SocialSignIn>
          <div className="text-center font-semibold py-4">
            <small className="text-main">
              Already have an account? Please{" "}
              <Link href="/signin" className="hover:underline hover:font-bold ">
                Sign In.
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
