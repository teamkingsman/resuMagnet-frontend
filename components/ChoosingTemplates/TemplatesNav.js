import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
const TemplatesNav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-4">
                <div className="flex-1">
                    <button className="">
                        <Link href="/" className="flex flex-row gap-2"><span className="text-sub_color"><IoCaretBack /></span> Back To Home</Link>
                    </button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-vertical px-1">
                        <li>
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" className="drawer-button btn rounded-full btn-sm shadow-lg  hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold ">Share</label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                        {/* Sidebar content here */}
                                        <li className="btn">Download PDF</li>
                                        <li><a>Sidebar Item 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <li>
                            <details>
                                <summary>
                                More
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className="block md:hidden">Download PDF</li>
                                    <li>Share Link</li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TemplatesNav;