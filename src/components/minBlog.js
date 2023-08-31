export default function MiniBlog(){
    return (
        <div className="px-36 py-24">
            <div className="flex">
                {/* MAIN */}
                <div className="flex-1 pr-10">
                    {/* TITLE */}
                    <div>
                        <h5 className="text-medium-blue-color">Knowledge</h5>
                        <h4>How we handle your work at <span className="text-orange-700">TeOH</span></h4>
                    </div>
                    
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus. Integer eget ante nec arcu ultrices interdum. Fusce tincidunt ligula eget quam bibendum, sed ultrices ipsum tempor. Duis eleifend libero ac libero tincidunt, eu dictum ex posuere. Quisque vitae vestibulum lorem. Aenean ut odio eu tellus interdum dictum. Nulla facilisi. Sed venenatis, nunc eget maximus posuere, tortor ipsum dictum justo, in tristique ipsum justo non est. Sed ut mi sit amet velit ullamcorper condimentum. Suspendisse potenti. Vivamus euismod erat at lectus auctor, non varius velit aliquam. Suspendisse potenti. Cras vestibulum lacinia justo, non consequat quam tincidunt eu. Sed non arcu vel enim eleifend tempus.</p>
                    </div>
                </div>

                {/* SUB */}
                <div className="flex-1 flex flex-col shadow-md">
                    {/* TOP */}
                    <div className="flex-1 border-[1px] border-black px-10 py-8 mb-5">
                        <div>
                            <h6 className="text-medium-blue-color">Must Know</h6>
                            <h5>Difference between Static and Dynamic Website</h5>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus... <span className="text-blue-600">Read More</span></p>
                        
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex-1 border-[1px] border-black px-10 py-8">
                        <div>
                            <h6 className="text-medium-blue-color">Must Know</h6>
                            <h5>Difference between Static and Dynamic Website</h5>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus... <span className="text-blue-600">Read More</span></p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}