import Link from "next/link";
import Image from "next/image";
import Web from "../../public/hero/development.png"

import {SiFacebook, SiInstagram, SiTwitter, SiLinkedin} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";


const imageLoader = require("../loader");

export default function Hero(){
    return (
        <div id="home" className="bg-world bg-cover">

        <Swiper
            spaceBetween={30}
            effect={"flip"}
            loop={true}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            // className="mySwiper"
        >
            <SwiperSlide>
  
                <div className="flex space-x-10 md:space-x-16 bg-black  bg-opacity-10 px-8 md:px-16 lg:px-36 md:min-h-[600px]">
                    {/* SOCIAL MEDIA */}
                    <div className="flex flex-col space-y-4 justify-center">
                        <SiFacebook color="#4267B2" size={25}/>
                        <SiInstagram color="orangered" size={25}/>
                        <SiTwitter color="#1DA1F2" size={25}/>
                        <SiLinkedin color="#0077b5" size={25}/>
                    </div>

                    <div className="flex flex-wrap justify-between items-center py-16 lg:py-2">
                        {/* CONTENT */}
                        <div className="flex-1 md:flex-[1.5] lg:pl-10 lg:pr-24">
                            <h1>Transforming your <span className="text-orange-700">company's challenges</span> into opportunities</h1>
                            {/* <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                            <div>
                                <Link href={""}><button className="border-[1px] border-medium-green-color text-white bg-medium-green-color px-3 md:px-5 py-2 md:py-3">Request a Quote</button></Link>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="hidden md:block flex-1 relative -top-32 lg:-top-10">
                            <div className="w-[650px] h-[550px] bg-gradient-to-b from-blue-500 to-green-500 filter blur-[100px] opacity-40 rounded-full"></div>
                            <div className="absolute top-36">
                                <Image loader={imageLoader} src={Web} className="w-[60%] md:w-[70%] h-auto" alt="web" />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex space-x-10 md:space-x-16 bg-black  bg-opacity-10 px-8 md:px-16 lg:px-36 md:min-h-[600px]">
                    {/* SOCIAL MEDIA */}
                    <div className="flex flex-col space-y-4 justify-center">
                        <SiFacebook color="#4267B2" size={25}/>
                        <SiInstagram color="orangered" size={25}/>
                        <SiTwitter color="#1DA1F2" size={25}/>
                        <SiLinkedin color="#0077b5" size={25}/>
                    </div>

                    <div className="flex flex-wrap justify-between items-center py-16 lg:py-2">
                        {/* CONTENT */}
                        <div className="flex-1 md:flex-[1.5] lg:pl-10 lg:pr-24">
                            <h1>Solving Real-World <span className="text-orange-700">Challenges at TEOH</span> into opportunities</h1>
                            {/* <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                            <div>
                                <Link href={""}><button className="border-[1px] border-medium-green-color text-white bg-medium-green-color px-3 md:px-5 py-2 md:py-3">Request a Quote</button></Link>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="hidden md:block flex-1 relative -top-32 lg:-top-10">
                            <div className="w-[650px] h-[550px] bg-gradient-to-b from-blue-500 to-green-500 filter blur-[100px] opacity-40 rounded-full"></div>
                            <div className="absolute top-36">
                                <Image loader={imageLoader} src={Web} className="w-[60%] md:w-[70%] h-auto" alt="web" />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
            

            <SwiperSlide>
                <div className="flex space-x-10 md:space-x-16 bg-black  bg-opacity-10 px-8 md:px-16 lg:px-36 md:min-h-[600px]">
                    {/* SOCIAL MEDIA */}
                    <div className="flex flex-col space-y-4 justify-center">
                        <SiFacebook color="#4267B2" size={25}/>
                        <SiInstagram color="orangered" size={25}/>
                        <SiTwitter color="#1DA1F2" size={25}/>
                        <SiLinkedin color="#0077b5" size={25}/>
                    </div>

                    <div className="flex flex-wrap justify-between items-center py-16 lg:py-2">
                        {/* CONTENT */}
                        <div className="flex-1 md:flex-[1.5] lg:pl-10 lg:pr-24">
                            <h1>LET US BUILD <span className="text-orange-700">Bespoke Solutions</span> FOR YOU</h1>
                            {/* <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                            <div>
                                <Link href={""}><button className="border-[1px] border-medium-green-color text-white bg-medium-green-color px-3 md:px-5 py-2 md:py-3">Request a Quote</button></Link>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="hidden md:block flex-1 relative -top-32 lg:-top-10">
                            <div className="w-[650px] h-[550px] bg-gradient-to-b from-blue-500 to-green-500 filter blur-[100px] opacity-40 rounded-full"></div>
                            <div className="absolute top-36">
                                <Image loader={imageLoader} src={Web} className="w-[60%] md:w-[70%] h-auto" alt="web" />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex space-x-10 md:space-x-16 bg-black  bg-opacity-10 px-8 md:px-16 lg:px-36 md:min-h-[600px]">
                    {/* SOCIAL MEDIA */}
                    <div className="flex flex-col space-y-4 justify-center">
                        <SiFacebook color="#4267B2" size={25}/>
                        <SiInstagram color="orangered" size={25}/>
                        <SiTwitter color="#1DA1F2" size={25}/>
                        <SiLinkedin color="#0077b5" size={25}/>
                    </div>

                    <div className="flex flex-wrap justify-between items-center py-16 lg:py-2">
                        {/* CONTENT */}
                        <div className="flex-1 md:flex-[1.5] lg:pl-10 lg:pr-24">
                            <h1>TEOH: Your One-Stop <span className="text-orange-700">Shop for Cutting-Edge</span> Technology Solutions</h1>
                            {/* <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                            <div>
                                <Link href={""}><button className="border-[1px] border- medium-green-color text-white bg-medium-green-color px-3 md:px-5 py-2 md:py-3">Request a Quote</button></Link>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="hidden md:block flex-1 relative -top-32 lg:-top-10">
                            <div className="w-[650px] h-[550px] bg-gradient-to-b from-blue-500 to-green-500 filter blur-[100px] opacity-40 rounded-full"></div>
                            <div className="absolute top-36">
                                <Image loader={imageLoader} src={Web} className="w-[60%] md:w-[70%] h-auto" alt="web" />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
        </Swiper>
            
            
        </div>
        
    )
}