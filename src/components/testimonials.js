import Image from "next/image";
// import { Rating } from 'react-simple-star-rating'
import StarRatings from 'react-star-ratings';


import Avatar from "../../public/testimonials/avatar.jpg"

const imageLoader = require("../loader");

export default function Testimonials(){
    return (
        <div className="px-36 py-28">
            <div className="text-center">
                <h4>What our client say</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="flex space-x-16 mt-10">

                {/* FIRST */}
                <div className="flex-1 bg-white shadow-md py-10 px-16">
                    {/* PROFILE */}
                    <div className="flex items-center">

                        {/* AVATAR */}
                        <div className="w-[100px]">
                            <Image loader={imageLoader} src={Avatar} className="w-[100%] h-auto" alt="web" />
                        </div>
                        {/* NAMES */}
                        <div className="ml-3">
                            <h6>Hashim Athman</h6>
                            <p className="text-sm mt-2">Developer</p>
                        </div>
                    </div>

                    {/* WORDS */}
                    <div className="my-5">
                        <p className="text-sm leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus. Integer eget ante nec arcu ultrices interdum. Fusce tincidunt ligula eget quam bibendum, sed ultrices ipsum tempor. Duis eleifend libero ac libero tincidunt, eu dictum ex posuere</p>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <StarRatings rating={3} starRatedColor="orange" numberOfStars={5} name='rating' starDimension="20px" starSpacing="5px"/>
                        </div>
                        <div>
                            <p className="text-sm text-medium-blue-color">24 Aug, 2023</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white shadow-md py-10 px-16">
                    {/* PROFILE */}
                    <div className="flex items-center">

                        {/* AVATAR */}
                        <div className="w-[100px]">
                            <Image loader={imageLoader} src={Avatar} className="w-[100%] h-auto" alt="web" />
                        </div>
                        {/* NAMES */}
                        <div className="ml-3">
                            <h6>Hashim Athman</h6>
                            <p className="text-sm mt-2">Developer</p>
                        </div>
                    </div>

                    {/* WORDS */}
                    <div className="my-5">
                        <p className="text-sm leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget volutpat neque, vel varius nisl. Sed ut dapibus purus. Integer eget ante nec arcu ultrices interdum. Fusce tincidunt ligula eget quam bibendum, sed ultrices ipsum tempor. Duis eleifend libero ac libero tincidunt, eu dictum ex posuere</p>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <StarRatings rating={3} starRatedColor="orange" numberOfStars={5} name='rating' starDimension="20px" starSpacing="5px"/>
                        </div>
                        <div>
                            <p className="text-sm text-medium-blue-color">24 Aug, 2023</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}