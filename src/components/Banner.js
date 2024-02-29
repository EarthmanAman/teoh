export default function Banner (){
    return (
        <div className="bg-banner bg-cover bg-fixed overflow-x-hidden">
            <div className="flex flex-wrap"> 
                <div className="flex-[2] pl-8 md:pl-36 py-24">
                    <h6 className="text-2xl mb-5 text-medium-blue-color">Our Unique Proposition</h6>
                    <p className="text-4xl md:text-6xl uppercase text-white w-[100%] md:w-[80%] pr-5 md:pr-0">Let us be your technological partners in progress</p>
                </div>
                
                <div className="flex-1  hidden lg:block">
                    
                    <div className="bg-black h-full -skew-x-20 w-[120%] flex justify-center items-center pr-24">
                    <a href="#footer">
                        <button className="bg-white px-10 py-4 transform skew-x-20 rounded-md uppercase font-bold">Request Quote</button>
                    </a>
                    </div>
                </div>
                
            </div>
        
            
        </div>
    )
}