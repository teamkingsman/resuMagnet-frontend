'use client'
import { usePathname } from 'next/navigation'

import Link from "next/link";
import Logo from "../LogoAnimation/Logo";


const Navbar = () => {
    const pathname = usePathname()
    const doNotShowNav = ["/signin", "/signup"]
    if (doNotShowNav.includes(pathname)) {
     return null;
    }
    const navlinks = <>
        <li><Link href="/" className='text-main font-bold hover:text-highlight_color'>Home</Link></li>
        <li><Link href="/" className='text-main font-bold hover:text-highlight_color'>About Us</Link></li>
        <li><Link href="/" className='text-main font-bold hover:text-highlight_color'>Contact</Link></li>
    </>
    return (

        <div className=" bg-whitecolor">
            <div className="navbar max-w-[2520px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-sub_color lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-whitecolor rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    {/* logo */}
                    <h1 className='text-xl'><Logo></Logo></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/signin">
                    <button className="btn rounded-full btn-sm md:btn-md shadow-lg  hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold">Sing In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;