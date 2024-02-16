"use client"
import { IoCaretBack } from "react-icons/io5";

import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { cvFromGetbyEmail, resumeFromGetByEmail } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const TemplatesNav = () => {
    const { user } = useAuth()
    const pathname = usePathname()
    const router = useRouter();
    console.log(router)

    // console.log(pathname?.split("/")?.some((el) => el === "resume"));
    const [objectId, setObjectId] = useState("");
    
    useEffect(() => {
        if (pathname == '/dashboard/resume/preview') {
            resumeFromGetByEmail(user.email).then((res) => setObjectId(res._id))
                .catch((err) => console.log(err))
        }
        if (pathname == '/dashboard/cv/preview') {
            cvFromGetbyEmail(user.email).then((res) => setObjectId(res._id))
                .catch((err) => console.log(err))
        }

    }, [user.email, pathname])

    console.log(objectId);

    return (
        <div>
            <div className="navbar bg-base-100 px-4 border-b-2 border-b-sub_color shadow-xl">
                <div className="flex-1">
                    <button onClick={()=>router.back()} className="flex flex-row gap-2 items-center">
                        <span className="text-sub_color"><IoCaretBack /></span><span className="text-sm md:text-lg text-sub_color">Back</span>
                    </button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-vertical px-1">
                        <li>
                            {pathname !== "/dashboard/cover_letter/preview" && (
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
                                            {
                                                pathname == '/dashboard/resume/preview' ? (
                                                    <li>
                                                        <Link href={`/r/${objectId}`}>
                                                            Copy Link</Link></li>
                                                ) : (
                                                    <li>
                                                        <Link href={`/c/${objectId}`}>
                                                            Copy Link</Link></li>
                                                )
                                            }

                                            <li className="btn btn-sm md:btn-md lg:btn-lg w-3/4 mx-auto bg-sub_color py-4 mt-4 "><span className="text-highlight_color"></span>Download PDF</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TemplatesNav;