import {SiHandshake} from "react-icons/si"

export default function Benefits(){
    return (
        <div className="px-36 py-8 bg-[#2a363f]">
            {/* <div className="text-center">
                <h4 className="text-white">Benefits of Using Us</h4>
            </div> */}

            <div className="flex space-x-7 justify-center">
                <div className="flex flex-col items-center p-5">
                    {/* <SiHandshake size={40} color="gray"/> */}
                    <h4 className="text-gray-200 mt-3">24/7 Support</h4>
                </div>

                <div className="flex flex-col items-center p-5">
                    {/* <SiHandshake size={40} color="white"/> */}
                    <h4 className="text-white mt-3">Secure Applications</h4>
                </div>

                <div className="flex flex-col items-center p-5">
                    {/* <SiHandshake size={40} color="white"/> */}
                    <h4 className="text-white mt-3">Professionalism</h4>
                </div>

                <div className="flex flex-col items-center p-5">
                    {/* <SiHandshake size={40} color="white"/> */}
                    <h4 className="text-white mt-3">99% Uptime</h4>
                </div>

                {/* <div className="flex flex-col items-center p-5">
                    <SiHandshake size={40} color="white"/>
                    <h4 className="text-white mt-3">24/7 Support</h4>
                </div> */}
            </div>
        </div>
    )
}