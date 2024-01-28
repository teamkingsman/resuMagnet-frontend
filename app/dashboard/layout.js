import PrivateRoute from "@/Providers/PrivateRoute";
import Sidebar from "@/components/Dashboard/Sidebar";


const DashboardLayout =  ({ children }) => {

  return (
    <PrivateRoute>
    <div className="grid grid-cols-12 gap-4 w-full ">
      <div className="col-span-2 ">
        <Sidebar></Sidebar>
      </div>
      <div className=" col-span-10 xl:px-10 md:pr-5 sm:px-2 px-2 pt-14">{children}</div>
    </div>
    </PrivateRoute>
  );
};

export default DashboardLayout;
