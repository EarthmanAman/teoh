import {SiHandshake} from "react-icons/si"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Benefits(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };

    return (
        <div className="md:px-16 lg:px-36 py-8 bg-[#2a363f] w-[100%]">
            {/* <div className="text-center">
                <h4 className="text-white">Benefits of Using Us</h4>
            </div> */}

            <Slider {...settings} className="mx-7 px-2">
                <div className="items-center">
                    <h4 className="text-gray-200 mt-3">24/7 Support</h4>
                </div>

                <div className="items-center">
                    <h4 className="text-white mt-3">Secure Applications</h4>
                </div>

                <div className="items-center">
                    <h4 className="text-white mt-3 mr-3">Professional</h4>
                </div>

                <div className="items-center">
                    <h4 className="text-white mt-3">99% Uptime</h4>
                </div>

                {/* <div className="flex flex-col items-center p-5">
                    <SiHandshake size={40} color="white"/>
                    <h4 className="text-white mt-3">24/7 Support</h4>
                </div> */}
            </Slider>
        </div>
    )
}