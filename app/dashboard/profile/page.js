import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-2xl w-9/12 lg:w-4/6">

          <Image
            alt="profile"
            src="https://wallpapercave.com/wp/wp10784415.jpg"
            className="w-full mb-4 rounded-t-lg "
            width="300"
            height="300"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <Image
                alt="profile"
                src=""
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-sub_color "
              />
            </a>

            <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
              {/* {role && role.toUpperCase()} */}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: abc123
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {/* {user.displayName} */}
                    UserName
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">
                    {/* {user.email} */}
                  resume@gmail.com
                  </span>
                </p>
                <p className="flex flex-col">
                  Payment Id:
                  <span className="font-bold text-black ">
                    
                  null
                  </span>
                </p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
