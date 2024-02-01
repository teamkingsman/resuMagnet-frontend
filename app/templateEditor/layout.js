import PrivateRoute from "@/Providers/PrivateRoute";


const TemplateEditor = ({ children }) => {
    return (
        // <PrivateRoute>
            <div>
                {/* navbar goes here */}
                <div className="grid grid-cols-12 gap-4 w-full ">
                    <div className="col-span-3 ">
                        {/* side bar goes here */}
                        <h1>Sidebar</h1>
                    </div>
                    <div>
                        <div className=" col-span-9 xl:px-10 md:pr-5 sm:px-2 px-2 pt-14">{children}</div>
                    </div>


                </div>
            </div>
        // </PrivateRoute>
    );
};

export default TemplateEditor;