import Image from "next/image";

import Team from "../../public/team.jpg"

const imageLoader = require("../loader");

export default function MiniBlog(){
    return (
        <div className="px-10 md:px-16 lg:px-32 py-12 md:py-24">
            <div className="flex flex-col-reverse lg:flex-row items-center">
                {/* MAIN */}
                <div className="flex-1 md:pr-10">
                    {/* TITLE */}
                    <div className="my-3 md:my-0">
                        <h5 className="text-medium-blue-color">About us</h5>
                        <h4>Who are <span className="text-orange-700">we?</span></h4>
                    </div>
                    
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus. Integer eget ante nec arcu ultrices interdum. Fusce tincidunt ligula eget quam bibendum, sed ultrices ipsum tempor. Duis eleifend libero ac libero tincidunt, eu dictum ex posuere. Quisque vitae vestibulum lorem. Aenean ut odio eu tellus interdum dictum. Nulla facilisi. Sed venenatis, nunc eget maximus posuere, tortor ipsum dictum justo, in tristique ipsum justo non est. Sed ut mi sit amet velit ullamcorper condimentum. Suspendisse potenti. Vivamus euismod erat at lectus auctor, non varius velit aliquam. Suspendisse potenti. Cras vestibulum lacinia justo, non consequat quam tincidunt eu. Sed non arcu vel enim eleifend tempus.</p>
                    </div>
                </div>

                {/* SUB */}
                <div className="md:flex-1 flex flex-col shadow-md rounded-lg ">
                    {/* TOP */}
                    <Image loader={imageLoader} src={Team} className="w-[100%] h-auto rounded-lg opacity-70"/>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-8 mt-10">
                <div className="flex-1 border-[1px] border-black px-6 md:px-10 py-5 md:py-8 mb-5">
                    <div>
                        <h6 className="text-medium-blue-color">Our Mission</h6>
                        <h5>Difference between Static and Dynamic Website</h5>
                    </div>
                    {/* <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus... <span className="text-blue-600">Read More</span></p>
                    
                    </div> */}
                </div>

                {/* BOTTOM */}
                <div className="flex-1 border-[1px] border-black px-6 md:px-10 py-5 md:py-8 mb-5">
                    <div>
                        <h6 className="text-medium-blue-color">Our Vision</h6>
                        <h5>Difference between Static and Dynamic Website</h5>
                    </div>
                    {/* <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus... <span className="text-blue-600">Read More</span></p>
                    
                    </div> */}
                </div>
            </div>
        </div>
    )
}