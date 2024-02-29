import Image from "next/image";
import {SiFacebook, SiInstagram, SiTwitter, SiLinkedin} from "react-icons/si";

import Logo from "../../public/logo.png"


const imageLoader = require("../loader");
export default function Footer(){
    return (
        <div id="footer" className="bg-[#2a363f] px-8 md:px-16 lg:px-72">
            {/* TOP */}
           
            <div className="bg-gray-200  py-3 lg:-skew-x-20 relative lg:-left-[700px] -top-5 shadow-lg shadow-gray-950 rounded-lg px-5 lg:px-16">
                <div className="lg:skew-x-20 text-right">
                    <h5>Need Help?</h5>
                    <h3 className="text-medium-green-color leading-4">(+254) 701-467872</h3>
                    <h4 className="text-medium-blue-color leading-4">contact@teoh.co.ke</h4>
                </div>
            </div>


            {/* BOTTOM */}
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between text-center lg:text-left items-center lg:items-start py-10 lg:py-20">
                <div>
                    <h5 className="text-white">Application Development</h5>
                    <ul>
                        <li className="text-green-100 font-normal">Web design</li>
                        <li className="text-green-100 font-normal">Mobile design</li>
                        <li className="text-green-100 font-normal">Desktop design</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white">Consultancy</h5>
                    <ul>
                        <li className="text-green-100 font-normal">Web design</li>
                        <li className="text-green-100 font-normal">Mobile design</li>
                        <li className="text-green-100 font-normal">Desktop design</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white mb-3">Follow Us</h5>
                    {/* SOCIAL MEDIA */}
                    <div className="flex  space-x-4 lg:justify-center">
                        <a href="https://www.facebook.com/teohkenya" target="_blank"><SiFacebook color="#4267B2" size={30}/></a>
                        <a href="https://www.instagram.com/teohkenya/" target="_blank"><SiInstagram color="orangered" size={30}/></a>
                        <a href="https://x.com/kenya_teoh?t=xDRzK-uFHtZMGUrpOYq1FQ&s=09" target="_blank"><SiTwitter color="#1DA1F2" size={30}/></a>
                        {/* <a href=""><SiLinkedin color="#0077b5" size={30}/></a> */}
                    </div>
                </div>

                <div>
                    <div className="w-24 md:w-40">
                        <Image loader={imageLoader} src={Logo} className="w-[100%] h-auto" alt="about" />
                    </div>
                    <div>
                        {/* <p className="text-white text-sm text-center lg:text-right">Canopy, Zimmerman</p> */}
                        <p className="text-white text-sm text-center lg:text-left">Nairobi, Kenya</p>
                        <p className="text-white text-sm text-center lg:text-left"><span>(254)</span> 70146 7872</p>
                    </div>
                </div>
            </div>
        </div>
    )
}