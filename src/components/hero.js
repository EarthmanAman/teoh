import Link from "next/link";
import Image from "next/image";
import Web from "../../public/hero/development.png"

import {SiFacebook, SiInstagram, SiTwitter, SiLinkedin} from "react-icons/si";

const imageLoader = require("../loader");

export default function Hero(){
    return (
        <div className="bg-world bg-cover">
            <div className="flex space-x-16 bg-black  bg-opacity-10 px-36 min-h-[600px]">
                {/* SOCIAL MEDIA */}
                <div className="flex flex-col space-y-4 justify-center">
                    <SiFacebook color="#4267B2" size={30}/>
                    <SiInstagram color="orangered" size={30}/>
                    <SiTwitter color="#1DA1F2" size={30}/>
                    <SiLinkedin color="#0077b5" size={30}/>
                </div>

                <div className="flex justify-between w-full items-center">
                    {/* CONTENT */}
                    <div className="flex-[1.5] pl-10 pr-24">
                        <h1>Let us build a <span className="text-orange-700">Magnificient Website </span>for you</h1>
                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>
                            <Link href={""}><button className="border-[1px] border-medium-green-color text-white bg-medium-green-color px-5 py-3">Request a Quote</button></Link>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="flex-1">
                        <div className="circle rounded-full"></div>
                        <div className="absolute top-36">
                            <Image loader={imageLoader} src={Web} className="w-[70%] h-auto" alt="web" />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}