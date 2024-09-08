import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { card } from "../constants/card";
import { RiStarSFill } from "react-icons/ri";

const CustomerReview = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="space-y-8 p-6 sm:p-8 md:p-12">
            <div className="text-center space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Customer Love Us</h1>
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium">We love hearing from happy customers</h1>
            </div>
            {/* card section */}

            <Slider {...settings}>{
                card.map((item) => (
                    <div key={item.id} className="sm:!w-[18rem] md:!w-[20rem] lg:!w-96 text-white h-auto lg:h-[32rem] p-6 sm:p-8 md:p-10 shadow-xl rounded-2xl space-y-4 sm:space-y-6 md:space-y-8 bg-card-background border-solid border-black">
                        <div className="flex gap-4 items-center">
                            <img src={item.image} className="rounded-full w-12 h-12 sm:w-16 sm:h-16" />
                            <span className="text-lg sm:text-xl">{item.name}</span>
                        </div>
                        <div className="flex">
                            <RiStarSFill className="text-yellow-400" />
                            <RiStarSFill className="text-yellow-400" />
                            <RiStarSFill className="text-yellow-400" />
                            <RiStarSFill className="text-yellow-400" />
                            <RiStarSFill className="text-yellow-400" />
                        </div>

                        <p className="text-sm sm:text-base md:text-lg">
                            {item.comment}
                        </p>
                    </div>
                ))
            }
            </Slider>

        </div>
    );
}

export default CustomerReview