import { IoCaretBack } from "react-icons/io5";

import Link from "next/link";
const TemplatesNav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-4 border-b-2 border-b-sub_color shadow-xl">
                <div className="flex-1">
                    <button className="">
                        <Link href="/" className="flex flex-row gap-2 items-center"><span className="text-sub_color"><IoCaretBack /></span><span className="text-sm md:text-lg text-sub_color">Back To Home</span></Link>
                    </button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-vertical px-1">
                        <li>
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" 
                                    className="drawer-button btn rounded-full btn-sm shadow-lg 
                                     hover:shadow-xl bg-sub_color text-neutral-50
                                     hover:bg-highlight_color hover:text-main  font-semibold ">Share</label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-72 md:w-80 min-h-full bg-base-200 text-base-content">
                                        {/* Sidebar content here */}
                                        <li><a>Copy Link</a></li>
                                        <li className="btn btn-sm md:btn-md lg:btn-lg w-3/4 mx-auto bg-sub_color py-4 mt-4 "><span className="text-highlight_color"></span>Download PDF</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TemplatesNav;