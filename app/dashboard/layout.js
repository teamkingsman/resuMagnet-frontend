import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";
export const metadata = {
  title: "Dashboard",
  description: "This is a dashboard In page",
};
const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 w-full ">
      <div className="col-span-2 ">
        <Sidebar></Sidebar>
      </div>
      <div className=" col-span-10 xl:px-10 md:pr-5 sm:px-2 px-2 pt-14">{children}</div>
    </div>
  );
};

export default layout;
