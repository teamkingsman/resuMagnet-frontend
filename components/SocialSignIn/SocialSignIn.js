

import { FaFacebookSquare, FaGoogle } from "react-icons/fa";


function SocialSignIn() {
  return (
    <div className="flex flex-col items-center  space-y-4 px-8">
      <p className="text-2xl font-medium">Or, Login With</p>
      <div className="w-full flex flex-col space-y-4">
        <button className="btn btn-outline outline-main font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"><FaGoogle></FaGoogle>Google</button>
        <button className="btn btn-outline outline-main font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"><FaFacebookSquare></FaFacebookSquare> Facebook</button>
      </div>
    </div>
  );
}

export default SocialSignIn;
