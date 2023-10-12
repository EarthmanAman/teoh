import Image from "next/image";
import {GiTeacher} from "react-icons/gi"

import Consulting from "../../public/services/consulting.jpg"
import WebDesign from "../../public/services/web_design.jpg"
import UI_UX from "../../public/services/ui.jpg"

const imageLoader = require("../loader");

export default function Services(){
    return (
        <div className=" px-8 md:px-16 lg:px-36 py-16 md:py-28 bg-[#eee]">
            {/* TITLE */}
            <div className="text-center px-[10%] md:px-[20%]">
                <h4>Our services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* SERVICES */}
            <div className="flex flex-wrap space-y-3 md:space-x-8 lg:space-x-10 mt-10 md:mt-16">
                {/* SERVICE */}
                <div className="flex-1 shadow-lg px-10 py-10 rounded-lg bg-white">
                    <div className="max-h-[250px] rounded-lg overflow-hidden">
                        <Image loader={imageLoader} src={Consulting} alt="service 1" className=" rounded-lg shadow-lg"/>
                    </div>

                    <div className="mt-5">
                        <h5>IT Consultancy</h5>
                        <p className="">We offer IT consulting services to help you develop and implement a technology strategy that meets your business needs.</p>
                    </div>
                </div>

                {/* SERVICE */}
                <div className="flex-1 shadow-lg px-10 py-10 rounded-lg bg-white">
                    <div className="max-h-[250px] rounded-lg overflow-hidden">
                        <Image loader={imageLoader} src={WebDesign} alt="service 1" className="rounded-lg shadow-lg"/>
                    </div>

                    <div className="mt-5">
                        <h5>UI/UX design</h5>
                        <p className="">Crafting exceptional user experiences is at the core of what we do. We design with your users in mind, ensuring that every click and swipe delights and adds value.</p>
                    </div>
                </div>

                {/* SERVICE */}
                <div className="flex-1 shadow-lg px-10 py-10 rounded-lg bg-white">
                    <div className="max-h-[250px] rounded-lg overflow-hidden">
                        <Image loader={imageLoader} src={UI_UX} alt="service 1" className="rounded-lg shadow-lg"/>
                    </div>

                    <div className="mt-5">
                        <h5>Web & Mobile App Development</h5>
                        <p className="">Crafting custom, intuitive applications for both mobile and web, we elevate user experiences and deliver unparalleled value. From conception to ongoing support, we ensure your platforms are user-centric, secure, and ever-evolving.</p>
                    </div>
                </div>
            </div>

            
            {/* <div className="flex">
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