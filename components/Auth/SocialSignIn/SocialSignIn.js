'use client'
import { useEffect } from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";
import { saveUser } from "@/lib/auth";
// import usePreviousRoute from "@/hooks/usePreviousRoute";


function SocialSignIn() {
  const { googleSignIn, user } = useAuth();
  const router = useRouter();
  // const previousRoute = usePreviousRoute();
  const handleGoogleSignIn = async () => {
    const toastId = toast.loading('Loading...');

    googleSignIn()
      .then( async(result) => {
        console.log(result.user);
        const currentUser = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };
        await saveUser(currentUser)
        toast.success('Sign In successful', (toastId));
        // router.back()
        // if (previousRoute) {
        //   router.replace(previousRoute);
        // } else {
        //   router.push('/'); // Default redirect if no previous route
        // }
      })
      .catch(error => {
        console.error('Sign-in failed:', error);
        toast.error(`Sign-in failed: ${error}`, (toastId));
      })
  }

  // useEffect(() => {
  //   // Optionally, you can automatically redirect if the user is already signed in
  //   if (user) {
  //     router.replace('/');
  //   }
  // }, [user, router]);

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
