import Image from "next/image";

import Team from "../../public/team.jpg"

const imageLoader = require("../loader");

export default function MiniBlog(){
    return (
        <div id="about" className="px-10 md:px-16 lg:px-32 py-12 md:py-24">
            <div className="flex flex-col-reverse lg:flex-row items-center">
                {/* MAIN */}
                <div className="flex-1 md:pr-10">
                    {/* TITLE */}
                    <div className="my-3 md:my-0">
                        <h5 className="text-medium-blue-color">About us</h5>
                        <h4>Who are <span className="text-orange-700">we?</span></h4>
                    </div>
                    
                    <div >
                        <p className="text-xl md:text-2xl">At TeOH, we unite as a dedicated team of software developers with diverse skills and a shared passion for innovation, technology, and problem-solving. We offer cutting-edge UI/UX Design, advanced web and mobile application development, API management solutions, and expert IT Consultancy services, all meticulously tailored to meet the unique needs of varied industries. We are driven by the aspiration to leverage technology for solving real-world problems and fostering sustainable, tech-driven community development. At TeOH, we are more than developers; we are your innovative problem solvers and partners in progress, committed to helping your business navigate and thrive in this continuously evolving technological world.</p>
                    </div>
                </div>

                {/* SUB */}
                <div className="md:flex-1 flex flex-col shadow-md rounded-lg ">
                    {/* TOP */}
                    <Image loader={imageLoader} src={Team} className="w-[100%] h-auto rounded-lg opacity-70"/>
                </div>
            </div>

            {/* <div className="flex flex-col lg:flex-row lg:space-x-8 mt-10">
                <div className="flex-1 border-[1px] border-black px-6 md:px-10 py-5 md:py-8 mb-5">
                    <div>
                        <h6 className="text-medium-blue-color">Our Mission</h6>
                        <h5>Difference between Static and Dynamic Website</h5>
                    </div>
                </div>

                <div className="flex-1 border-[1px] border-black px-6 md:px-10 py-5 md:py-8 mb-5">
                    <div>
                        <h6 className="text-medium-blue-color">Our Vision</h6>
                        <h5>Difference between Static and Dynamic Website</h5>
                    </div>
                </div>
            </div> */}
        </div>
    )
}