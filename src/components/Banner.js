export default function Banner (){
    return (
        <div className="bg-banner bg-cover bg-fixed overflow-x-hidden">
            <div className="flex flex-wrap"> 
                <div className="flex-[2] pl-8 md:pl-36 py-24">
                    <h6 className="text-2xl mb-5 text-medium-blue-color">Our Unique Proposition</h6>
                    <p className="text-4xl md:text-6xl uppercase text-white w-[100%] md:w-[80%] pr-5 md:pr-0">Your one stop shop for all Programming needs</p>
                </div>
                
                <div className="flex-1  hidden lg:block">
                    
                    <div className="bg-black h-full -skew-x-20 w-[120%]">
                        <p> </p>
                    </div>
                </div>
                
            </div>
        
            
        </div>
    )
}