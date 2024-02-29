import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"
import {MdMenu, MdClose} from "react-icons/md"
import { useState } from "react";

const imageLoader = require("../loader");

export default function NavBar(){
    const [navbar, setNavbar] = useState(false)
    return (
        <div className={`${navbar ? 'fixed z-50 bg-gray-100 w-full' : null} flex justify-between items-center px-8 py-3 md:px-16 lg:px-36`}>
            <div className="w-16 md:w-32">
                <Image loader={imageLoader} src={Logo} className="w-[100%] h-auto" alt="about" />
            </div>

            <div className="hidden md:flex space-x-10 items-center">
                <div className="">
                    <ul className="flex md:space-x-4 lg:space-x-8 uppercase">
                        <li className="text-medium-blue-color"><Link href={""}>Home</Link></li>
                        <li><Link href={"#about"}>About Us</Link></li>
                        <li><Link href={"#services"}>Services</Link></li>
                        <li><Link href={"#steps"}>How We Work</Link></li>
                        {/* <li><Link href={""}>Team</Link></li> */}
                    </ul>
                </div>

                <div>
                    <Link href={"#footer"}>
                        <button className="px-3 py-2 mb:px-5 md:py-3 text-medium-blue-color border-2 border-medium-blue-color text-sm md:text-lg uppercase">Contact Us</button>
                    </Link>
                </div>
            </div>

            {/* MOBILE  */}
            {navbar ? 
            <div className="fixed md:hidden inset-0  z-50 w-full h-full py-10 text-center left-0 top-20 bg-gray-300 border-t-2">
                <div className="mb-16">
                    <ul className="flex flex-col space-y-7 uppercase">
                        <li className="text-medium-blue-color pb-3 mx-36 border-b-2 border-b-medium-blue-color"><Link href={""} onClick={() => setNavbar(!navbar)}>Home</Link></li>
                        <li className="text-gray-400 "><Link href={"#about"} onClick={() => setNavbar(!navbar)}>About Us</Link></li>
                        <li className="text-gray-400 "><Link href={"#services"} onClick={() => setNavbar(!navbar)}>Services</Link></li>
                        <li className="text-gray-400"><Link href={"#steps"} onClick={() => setNavbar(!navbar)}>How We Work</Link></li>
                        {/* <li className="text-gray-400 "><Link href={""} onClick={() => setNavbar(!navbar)}>Team</Link></li> */}
                    </ul>
                </div>

                <div>
                    <Link href={"#footer"} onClick={() => setNavbar(!navbar)}>
                        <button className="px-16 md:px-3 py-2 mb:px-5 md:py-3 text-medium-blue-color border-2 border-medium-blue-color text-sm md:text-lg uppercase">Contact Us</button>
                    </Link>
                </div>
            </div>
            :
            null
            }
            

            <div className="block md:hidden cursor-pointer" onClick={() => setNavbar(!navbar)}>
                {navbar ? 
                <MdClose size={40} color="black"/>
                :
                <MdMenu size={40} color="black"/>
}
            </div>

        </div>
    )
}