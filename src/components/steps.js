import Image from "next/image";
import Forward from "../../public/steps/forward.svg"
import Step1 from "../../public/steps/step1.svg"

const imageLoader = require("../loader");


export default function Steps(){
    return (
        <div className="px-8 md:px-36 py-8 md:py-16 bg-[#2a363f] bg-opacity-40">
            {/* TITLE */}
            <div className="text-center mb-14 md:mb-0 px-10 md:px-72">
                <h4>How we do your work</h4>
                <p className="text-white">Lorem geudjd afgeia guerso juisd muister kuioto kipto geudjd afgeia guerso juisd muister kuioto kipto geudjd afgeia guerso juisd muister kuioto kipto.</p>
            </div>

            <div className="flex flex-wrap space-x-3 items-center px-6 md:px-0">
                {/* STEP */}
                <div className="flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-medium-blue-color mb-3">Step1</h5>
                    <h4 className="leading-8 mb-5">Requirements Gathering</h4>
                    <div>
                        <Image loader={imageLoader} src={Step1} />
                    </div>
                    <p className="text-white">Lorem geudjd afgeia guerso juisd muister kuioto kipto.</p>
                </div>

                <div className="flex-[0.5] hidden md:flex justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>

               {/* STEP */}
               <div className="mt-10 md:mt-56 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-medium-blue-color mb-3">Step1</h5>
                    <h4 className="leading-8 mb-5">Requirements Gathering</h4>
                    <div>
                        <Image loader={imageLoader} src={Step1} />
                    </div>
                    <p className="text-white">Lorem geudjd afgeia guerso juisd muister kuioto kipto.</p>
                </div>

                <div className="flex-[0.5] hidden md:flex  justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>

                {/* STEP */}
                <div className="mt-10 md:mt-0 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-medium-blue-color mb-3">Step1</h5>
                    <h4 className="leading-8 mb-5">Requirements Gathering</h4>
                    <div>
                        <Image loader={imageLoader} src={Step1} />
                    </div>
                    <p className="text-white">Lorem geudjd afgeia guerso juisd muister kuioto kipto.</p>
                </div>

                <div className="flex-[0.5] hidden md:flex justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>


                {/* STEP */}
                <div className="mt-10 md:mt-56 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-medium-blue-color mb-3">Step1</h5>
                    <h4 className="leading-8 mb-5">Requirements Gathering</h4>
                    <div>
                        <Image loader={imageLoader} src={Step1} />
                    </div>
                    <p className="text-white">Lorem geudjd afgeia guerso juisd muister kuioto kipto.</p>
                </div>

                <div className="flex-[0.5] hidden md:flex justify-center">
                    <div>
                        <Image loader={imageLoader} src={Forward} />
                    </div>
                </div>

                {/* STEP */}
                <div className="mt-10 : md:mt-0 flex-1 flex flex-col items-center text-center rounded-full shadow-lg p-10 bg-[#2a363f] bg-opacity-20">
                    <h5 className="text-medium-blue-color mb-3">Step1</h5>
                    <h4 className="leading-8 mb-5">Requirements Gathering</h4>
                    <div>
                        <Image loader={imageLoader} src={Step1} />
                    </div>
                    <p className="text-white">Lorem geudjd afgeia guerso juisd muister kuioto kipto.</p>
                </div>

            </div>
        </div>
    )
}