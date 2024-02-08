"use client"
import PrivateRoute from "@/Providers/PrivateRoute";
import Sidebar from "@/components/Dashboard/Sidebar";
import { usePathname } from "next/navigation";


const DashboardLayout =  ({ children }) => {
  const pathname = usePathname()
  const lastpath = pathname.split("/").pop() // Get the last part of the pathname (e.g., "dashboard" or "signin")
    const doNotShowNav = [ "preview" ]
  return (
    <PrivateRoute>
    <div className="grid grid-cols-12 gap-4 w-full ">
      {
        doNotShowNav.includes(lastpath) ? <div></div> : (<div className="lg:col-span-2 ">
        <Sidebar></Sidebar>
      </div>)
      }
      <div className={doNotShowNav.includes(lastpath) ? "col-span-12":"col-span-10"}  >{children}</div>
    </div>
    </PrivateRoute>
  );
};

export default DashboardLayout;
