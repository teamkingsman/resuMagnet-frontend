'use client'
import { AuthContext } from "@/Providers/AuthProvider";
import { useContext } from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation'


function SocialSignIn() {
  const { googleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const handleGoogleSignIn = () => {
    googleSignIn()
        .then(result => {
            console.log(result.user);
            router.push('/')
        })
        .catch(error => {
            console.error(error);
        })
}

  return (
    <div className="flex flex-col items-center  space-y-4 px-8">
      <p className="text-2xl font-medium">Or, Sign In With</p>
      <div className="w-full flex flex-col space-y-4">
        <button onClick={handleGoogleSignIn} className="btn btn-outline outline-main font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"><FaGoogle></FaGoogle>Google</button>
        {/* <button className="btn btn-outline outline-main font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"><FaFacebookSquare></FaFacebookSquare> Facebook</button> */}
      </div>
    </div>
  );
}

export default SocialSignIn;
