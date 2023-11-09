import Image from "next/image";
import {GiTeacher} from "react-icons/gi"
import React, { useRef, useState } from 'react';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import Consulting from "../../public/services/consulting.jpg"
import WebDesign from "../../public/services/web_design.jpg"
import UI_UX from "../../public/services/ui.jpg"
import Integration from "../../public/services/integration.jpg"
import API from "../../public/services/api.png"

const imageLoader = require("../loader");

export default function Services(){
    return (
        <div id="services" className=" px-8 md:px-16 lg:px-36 py-16 md:py-28 bg-[#eee]">
            {/* TITLE */}
            <div className="text-center px-[10%] md:px-[20%]">
                <h4>Our services</h4>
                <p>Our team of highly skilled and experienced professionals is dedicated to staying at the forefront of technology trends. We specialize in</p>
            </div>

            {/* SERVICES */}
            <div className="mt-10 md:mt-16">

                <Swiper
                    // slidesPerView={3}
                    breakpoints={{
                        576: {
                          // width: 576,
                          slidesPerView: 2,
                        },
                        768: {
                          // width: 768,
                          slidesPerView: 3,
                        },
                      }}
                    spaceBetween={30}
                    // loop={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    // className="mySwiper"
                >
                    {/* SERVICE */}
                    <SwiperSlide className=" shadow-lg px-10 py-10 rounded-lg bg-white lg:min-h-[550px]">
                        <div className="max-h-[250px] rounded-lg overflow-hidden">
                            <Image loader={imageLoader} src={Consulting} alt="service 1" className=" rounded-lg shadow-lg"/>
                        </div>

                        <div className="mt-5">
                            <h5>IT Consultancy</h5>
                            <p className="">We offer IT consulting services to help you develop and implement a technology strategy that meets your business needs.</p>
                        </div>
                    </SwiperSlide>

                    {/* SERVICE */}
                    <SwiperSlide className="shadow-lg px-10 py-10 rounded-lg bg-white lg:min-h-[550px]">
                        <div className="max-h-[250px] rounded-lg overflow-hidden">
                            <Image loader={imageLoader} src={UI_UX} alt="service 1" className="rounded-lg shadow-lg"/>
                        </div>

                        <div className="mt-5">
                            <h5>UI/UX design</h5>
                            <p className="">Crafting exceptional user experiences is at the core of what we do. We design with your users in mind, ensuring that every click and swipe delights and adds value.</p>
                        </div>
                    </SwiperSlide>

                    {/* SERVICE */}
                    <SwiperSlide className="shadow-lg px-10 py-10 rounded-lg bg-white lg:min-h-[550px]">
                        <div className="max-h-[250px] rounded-lg overflow-hidden">
                            <Image loader={imageLoader} src={WebDesign} alt="service 1" className="rounded-lg shadow-lg"/>
                        </div>

                        <div className="mt-5">
                            <h5>Web & Mobile App Development</h5>
                            <p className="">Crafting custom, intuitive applications for both mobile and web, we elevate user experiences and deliver unparalleled value. From conception to ongoing support, we ensure your platforms are user-centric, secure, and ever-evolving.</p>
                        </div>
                    </SwiperSlide>

                    {/* SERVICE */}
                    <SwiperSlide className="shadow-lg px-10 py-10 rounded-lg bg-white lg:min-h-[550px]">
                        <div className="max-h-[250px] rounded-lg overflow-hidden">
                            <Image loader={imageLoader} src={Integration} alt="service 1" className="rounded-lg shadow-lg"/>
                        </div>

                        <div className="mt-5">
                            <h5>Systems Integrations</h5>
                            <p className="">Seamlessly integrating your systems is crucial for efficient operations. We can help connect and optimize your technology ecosystem, ensuring that your systems work harmoniously, unlocking new possibilities for your business</p>
                        </div>
                    </SwiperSlide>

                    {/* SERVICE */}
                    <SwiperSlide className="shadow-lg px-10 py-10 rounded-lg bg-white lg:min-h-[550px]">
                        <div className="max-h-[250px] rounded-lg overflow-hidden">
                            <Image loader={imageLoader} src={API} alt="service 1" className="rounded-lg shadow-lg"/>
                        </div>

                        <div className="mt-5">
                            <h5>API Management Solution</h5>
                            <p className="">In the realm of seamless connectivity and integration, we excel in delivering sophisticated API management solutions. Leveraging industry-leading platforms like WSO2 and Apigee.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
                
                

                
                
            </div>

            
            {/* 
            <div className="flex">
                <div className="flex-1 flex flex-col justify-end mb-10 pr-16">
                    <h4>What we are offering</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex-1 bg-[#e7e8ea] flex flex-col items-center text-center p-8">
                    <h5>Service 1</h5>
                    <h4 className="text-white">Consultant</h4>
                    <GiTeacher size={100} />
                    <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl</p>
                
                </div>

                <div className="flex-1 bg-green-200 flex flex-col items-center text-center p-8">
                    <h5>Service 1</h5>
                    <h4 className="text-white">Consultant</h4>
                    <GiTeacher size={100} />
                    <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl</p>
                
                </div>
            </div>
            <div className="flex">
                <div className="flex-1 bg-[#e7e8ea] flex flex-col items-center text-center p-8">
                    <h5>Service 1</h5>
                    <h4 className="text-white">Consultant</h4>
                    <GiTeacher size={100} />
                    <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl</p>
                
                </div>
                <div className="flex-1 bg-green-200 flex flex-col items-center text-center p-8">
                    <h5>Service 1</h5>
                    <h4 className="text-white">Consultant</h4>
                    <GiTeacher size={100} />
                    <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl</p>
                
                </div>

                <div className="flex-1 bg-blue-200 flex flex-col items-center text-center p-8">
                    <h5>Service 1</h5>
                    <h4 className="text-white">Consultant</h4>
                    <GiTeacher size={100} />
                    <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl</p>
                
                </div>
            </div> */}
        </div>
    )
}