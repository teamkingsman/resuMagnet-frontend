"use client"
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { cvFromGet, resumeFromGet } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import jsPDF from 'jspdf';




const TemplatesNav = ({ selectedTemplate, resume }) => {
    const { user } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    const [objectId, setObjectId] = useState("");

    useEffect(() => {
        if (pathname == '/dashboard/resume/preview') {
            resumeFromGet(user.email).then((res) => setObjectId(res._id))
                .catch((err) => console.log(err))
        }
        if (pathname == '/dashboard/cv/preview') {
            cvFromGet(user.email).then((res) => setObjectId(res._id))
                .catch((err) => console.log(err))
        }

    }, [user.email, pathname])

   
    const [templateContent, setTemplateContent] = useState("");

    useEffect(() => {
        // Fetch template content based on the selected template
        // This can be an asynchronous call to your backend API
        const fetchTemplateContent = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const template = urlParams.get('template');
                let content = "";

                // Perform logic to fetch content based on the selected template
                switch (template) {
                    case 'template1':
                        content = 'PDF content for template 1';
                        break;
                    case 'template2':
                        content = 'PDF content for template 2';
                        break;
                    // Add cases for other templates...
                    default:
                        content = 'Default PDF content';
                }

                setTemplateContent(content);
            } catch (error) {
                console.error("Error fetching template content:", error);
            }
        };

        fetchTemplateContent();
    }, [pathname]);

    const handleDownloadPDF = () => {
        // Generate PDF
        const pdf = new jsPDF();
        pdf.text(templateContent, 10, 10);

        // Download PDF
        pdf.save('filename.pdf'); 
    };

    

    return (
        <div>
            <div className="navbar bg-base-100 px-4 border-b-2 border-b-sub_color shadow-xl">
                <div className="flex-1">
                    <button onClick={() => router.back()} className="flex flex-row gap-2 items-center">
                        <span className="text-sub_color"><IoCaretBack /></span><span className="text-sm md:text-lg text-sub_color">Back</span>
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
                                        <li>
                                            {
                                                pathname === '/dashboard/resume/preview' ? (
                                                    <li>
                                                        <Link href={`/r/${objectId}`}>
                                                            Copy Link/Download
                                                        </Link>
                                                    </li>
                                                ) : (
                                                    <li>
                                                        <Link href={`/c/${objectId}`}>
                                                            Copy Link/Download
                                                        </Link>
                                                    </li>
                                                )
                                            }

                                        </li>
                                        {/* <li className="btn btn-sm md:btn-md lg:btn-lg w-3/4 mx-auto bg-sub_color py-4 mt-4" onClick={handleDownloadPDF}>
                                            Download PDF
                                        </li> */}
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
