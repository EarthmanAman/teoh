import {GiTeacher} from "react-icons/gi"

export default function Services(){
    return (
        <div className="px-36 py-28 bg-[#eee]">
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
            </div>
        </div>
    )
}