import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"
import {MdMenu} from "react-icons/md"

const imageLoader = require("../loader");

export default function NavBar(){
    return (
        <div className="flex justify-between items-center px-8 py-3 md:px-16 lg:px-36">
            <div className="w-16 md:w-24">
                <Image loader={imageLoader} src={Logo} className="w-[100%] h-auto" alt="about" />
            </div>
            <div className="hidden md:flex space-x-10 items-center">
                <div className="">
                    <ul className="flex md:space-x-4 lg:space-x-8 uppercase">
                        <li className="text-medium-blue-color"><Link href={""}>Home</Link></li>
                        <li><Link href={""}>About Us</Link></li>
                        <li><Link href={""}>Services</Link></li>
                        <li><Link href={""}>Projects</Link></li>
                        <li><Link href={""}>Team</Link></li>
                    </ul>
                </div>

                <div>
                    <Link href={""}>
                        <button className="px-3 py-2 mb:px-5 md:py-3 text-medium-blue-color border-2 border-medium-blue-color text-sm md:text-lg uppercase">Contact Us</button>
                    </Link>
                </div>
            </div>
            

            <div className="block md:hidden cursor-pointer">
                <MdMenu size={40} color="black"/>
            </div>

        </div>
    )
}