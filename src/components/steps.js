import Image from "next/image";
import Forward from "../../public/steps/forward.svg"
import Step1 from "../../public/steps/step1.svg"
import Step2 from "../../public/steps/step2.svg"
import Step3 from "../../public/steps/step3.svg"
import Step4 from "../../public/steps/step4.svg"
import Step5 from "../../public/steps/step5.svg"

const imageLoader = require("../loader");


export default function Steps(){
    return (
        <div id="steps" className="px-8 md:px-16 lg:px-36 py-8 lg:py-16 bg-[#2a363f] bg-opacity-40">
            {/* TITLE */}
            <div className="text-center mb-14 lg:mb-0 px-10 lg:px-72">
                <h4>How we do your work</h4>
                <p className="text-white">We chat to understand your unique needs and goals, forming a clear picture of your objectives.</p>
            </div>

            <div className="flex flex-col lg:flex-row space-x-3 items-center px-6 md:px-24 lg:px-0">
                {/* STEP */}
                <div className="flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-blue-100 mb-3">Step 1</h5>
                    <h4 className="leading-8 mb-5">Understanding Your Needs</h4>
                    <div>
                        <Image loader={imageLoader} src={Step1} />
                    </div>
                    <p className="text-white md:px-16 lg:px-0">We talk to understand your needs and goals, forming a clear picture of your objectives.</p>
                </div>

                <div className="flex-[0.3] hidden lg:flex justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>

               {/* STEP */}
               <div className="mt-10 lg:mt-56 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-blue-100 mb-3">Step 2</h5>
                    <h4 className="leading-8 mb-5">Planning Your Solution</h4>
                    <div>
                        <Image loader={imageLoader} src={Step2} />
                    </div>
                    <p className="text-white md:px-16 lg:px-0">We gather your needs and create a detailed project plan with visual prototypes for your digital solution.</p>
                </div>

                <div className="flex-[0.3] hidden lg:flex  justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>

                {/* STEP */}
                <div className="mt-10 lg:mt-0 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-blue-100 mb-3">Step 3</h5>
                    <h4 className="leading-8 mb-5">Building Your Solution</h4>
                    <div>
                        <Image loader={imageLoader} src={Step3} />
                    </div>
                    <p className="text-white md:px-16 lg:px-0">We get to work building your digital solution, using the plan and prototypes to turn your vision into reality.</p>
                </div>

                <div className="flex-[0.3] hidden lg:flex justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>


                {/* STEP */}
                <div className="mt-10 lg:mt-56 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-blue-100 mb-3">Step 4</h5>
                    <h4 className="leading-8 mb-5">Making Sure It Works Together</h4>
                    <div>
                        <Image loader={imageLoader} src={Step4} />
                    </div>
                    <p className="text-white md:px-16 lg:px-0">We integrate solution components like puzzle pieces and thoroughly test for issues before it's ready for your use.</p>
                </div>

                <div className="flex-[0.3] hidden lg:flex justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>

                {/* STEP */}
                <div className="mt-10 : lg:mt-0 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-blue-100 mb-3">Step 5</h5>
                    <h4 className="leading-8 mb-5">Putting It into Action   </h4>
                    <div>
                        <Image loader={imageLoader} src={Step5} />
                    </div>
                    <p className="text-white md:px-16 lg:px-0">We launch your new system or website, ready for you and your users to use, like revealing a new product.</p>
                </div>

            </div>
        </div>
    )
}