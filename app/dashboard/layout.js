"use client"
import PrivateRoute from "@/Providers/PrivateRoute";
import Sidebar from "@/components/Dashboard/Sidebar";
import { usePathname } from "next/navigation";


const DashboardLayout =  ({ children }) => {
  const pathname = usePathname()
    const doNotShowNav = [ "/dashboard/resume/preview","/dashboard/cover-letter/preview","/dashboard/cv/preview" ]
  return (
    <PrivateRoute>
    <div className="grid grid-cols-12 gap-4 w-full ">
      {
        doNotShowNav.includes(pathname) ? <div></div> : (<div className="lg:col-span-2 ">
        <Sidebar></Sidebar>
      </div>)
      }
      <div className={doNotShowNav.includes(pathname) ? "col-span-12":"col-span-10"}  >{children}</div>
    </div>
    </PrivateRoute>
  );
};

export default DashboardLayout;
