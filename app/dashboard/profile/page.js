"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex justify-center items-center h-screen mb-8">
        <div className="bg-white shadow-lg rounded-2xl w-9/12 lg:w-4/6">
          <Image
            alt="profile"
            src="https://wallpapercave.com/wp/wp10784415.jpg"
            className="w-full h-4/5 mb-4 rounded-t-lg "
            width={200}
            height={200}
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <Image
                alt="profile"
                src={user.photoURL}
                width={100}
                height={100}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-sub_color "
              />
            </a>

            <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
              {/* {role && role.toUpperCase()} */}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: {user.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {user.displayName}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user.email}</span>
                </p>
                <p className="flex flex-col">
                  Payment Id:
                  <span className="font-bold text-black ">
                    {user.paymentId ? { paymentId } : "null"}
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
