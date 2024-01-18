'use client'

import Link from "next/link";

const Navbar = () => {
    // links of the navbar
    const navlinks = <>
        <li><Link href="/" className='text-main font-bold hover:text-highlight_color'>Home</Link></li>
        <li><Link href="/" className='text-main font-bold hover:text-highlight_color'>About Us</Link></li>
        <li><Link href="/" className='text-main font-bold hover:text-highlight_color'>Contact</Link></li>
    </>
    return (
        <div className=" bg-[#FFFFFF]">
            <div className="navbar max-w-[2520px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    {/* logo */}
                    <h1 className='text-xl md:text-2xl'></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-full btn-sm md:btn-md shadow-lg  hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;