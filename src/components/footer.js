import Image from "next/image";
import {SiFacebook, SiInstagram, SiTwitter, SiLinkedin} from "react-icons/si";

import Logo from "../../public/logo.png"


const imageLoader = require("../loader");
export default function Footer(){
    return (
        <div id="footer" className="bg-[#2a363f] px-8 md:px-16 lg:px-72">
            {/* TOP */}
            <div className="flex">
                <div className="bg-gray-200 flex-[3] py-3 lg:py-5 lg:-skew-x-20 relative lg:-left-[400px] -top-5 shadow-lg shadow-gray-950 text-right rounded-lg px-16">
                    <h5>Need Help?</h5>
                    <h3 className="text-medium-green-color leading-6">(+254) 701-467872</h3>
                    <h4 className="text-medium-blue-color leading-6">contact@teoh.co.ke</h4>
                </div>
                <div className="flex-1">

                </div>
            </div>

            {/* BOTTOM */}
            <div className="flex flex-col lg:flex-row space-y-5 justify-between text-center lg:text-left items-center lg:items-start py-10 lg:py-20">
                <div>
                    <h5 className="text-white">Application Development</h5>
                    <ul>
                        <li className="text-medium-green-color font-normal">Web design</li>
                        <li className="text-medium-green-color font-normal">Mobile design</li>
                        <li className="text-medium-green-color font-normal">Desktop design</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white">Consultancy</h5>
                    <ul>
                        <li className="text-medium-green-color font-normal">Web design</li>
                        <li className="text-medium-green-color font-normal">Mobile design</li>
                        <li className="text-medium-green-color font-normal">Desktop design</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white mb-3">Follow Us</h5>
                    {/* SOCIAL MEDIA */}
                    <div className="flex  space-x-4 lg:justify-center">
                        <SiFacebook color="#4267B2" size={30}/>
                        <SiInstagram color="orangered" size={30}/>
                        <SiTwitter color="#1DA1F2" size={30}/>
                        <SiLinkedin color="#0077b5" size={30}/>
                    </div>
                </div>

                <div>
                    <div className="w-24">
                        <Image loader={imageLoader} src={Logo} className="w-[100%] h-auto" alt="about" />
                    </div>
                    <div>
                        <p className="text-white text-sm text-center lg:text-right">Canopy, Zimmerman</p>
                        <p className="text-white text-sm text-center lg:text-right">Nairobi, Kenya</p>
                        <p className="text-white text-sm text-center lg:text-right"><span>(254)</span> 70146 7872</p>
                    </div>
                </div>
            </div>
        </div>
    )
}