import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"

const imageLoader = require("../loader");

export default function NavBar(){
    return (
        <div className="flex justify-between items-center px-36">
            <div className="w-24">
                <Image loader={imageLoader} src={Logo} className="w-[100%] h-auto" alt="about" />
            </div>
            <div>
                <ul className="flex space-x-8 uppercase">
                    <li className="text-medium-blue-color"><Link href={""}>Home</Link></li>
                    <li><Link href={""}>About Us</Link></li>
                    <li><Link href={""}>Services</Link></li>
                    <li><Link href={""}>Projects</Link></li>
                    <li><Link href={""}>Team</Link></li>
                </ul>
            </div>

            <div>
                <Link href={""}>
                    <button className="px-5 py-3 text-medium-blue-color border-2 border-medium-blue-color uppercase">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}