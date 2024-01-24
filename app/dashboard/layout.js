'use client'

import Sidebar from "@/components/Dashboard/Sidebar";
import Logo from "@/components/LogoAnimation/Logo";
import useAuth from "@/hooks/useAuth";
import {redirect} from "next/navigation";

const DashboardLayout =  ({ children }) => {
  const {user, loading,} = useAuth()
  console.log(!user?.email)
  if (loading) return <>
  <div className="h-screen w-full flex items-center justify-center justify-items-center mx-auto ">
      <Logo className="w-full  md:w-1/2 lg:w-1/3"/>
    </div></>;

  if (!user?.email) {
    redirect("/signin", );
}
  return (
    <div className="grid grid-cols-12 gap-4 w-full ">
      <div className="lg:col-span-2 ">
        <Sidebar></Sidebar>
      </div>
      <div className=" lg:col-span-10 xl:px-10 md:pr-5 sm:px-2 px-2 pt-14">{children}</div>
    </div>
  );
};

export default DashboardLayout;
