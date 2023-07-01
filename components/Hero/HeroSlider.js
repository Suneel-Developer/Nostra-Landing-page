import React from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import slider1 from "../../assets/silder1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/silder3.webp";
import slider4 from "../../assets/silder4.webp";

const HeroSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" relative rounded-xl " id="heroslider">
      <Slider {...settings}>
        <div className="w-[100%] mt-4 object-cover rounded-xl ">
          <div
            className=" sliderImage  bg-slate-600 rounded-xl h-[300px] sm:h-[500px]   "
            style={{
              backgroundImage: `url(${slider1.src})`,
            }}
          >
            <h1 className=" text-white text-[30px] sm:text-[70px] font-semibold ">
              Level Up your style with our summer collection
            </h1>
            <button className="flex items-center gap-3 bg-white rounded p-3 text-sm mt-3 hover:bg-slate-300 font-semibold">
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="w-[100%] mt-4 object-cover rounded-xl ">
          <div
            className=" sliderImage  bg-slate-600 rounded-xl h-[300px] sm:h-[500px]  flex justify-center items-center flex-col "
            style={{
              backgroundImage: `url(${slider2.src})`,
            }}
          >
            <h1 className=" text-white text-[30px] sm:text-[70px] font-semibold ">
              Level Up your style with our summer collection
            </h1>

            <button className="flex items-center gap-3 bg-white rounded p-3 text-sm mt-3 hover:bg-slate-300 font-semibold">
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="w-[100%] mt-4 object-cover rounded-xl ">
          <div
            className=" sliderImage  bg-slate-600 rounded-xl h-[300px] sm:h-[500px]  flex justify-center items-center flex-col "
            style={{
              backgroundImage: `url(${slider3.src})`,
            }}
          >
            <h1 className=" text-white text-[30px] sm:text-[70px] font-semibold ">
              Level Up your style with our summer collection
            </h1>

            <button className="flex items-center gap-3 bg-white rounded p-3 text-sm mt-3 hover:bg-slate-300 font-semibold">
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="w-[100%] mt-4 object-cover rounded-xl ">
          <div
            className=" sliderImage  bg-slate-600 rounded-xl h-[300px] sm:h-[500px]  flex justify-center items-center flex-col "
            style={{
              backgroundImage: `url(${slider4.src})`,
            }}
          >
            <h1 className=" text-white text-[30px] sm:text-[70px] font-semibold ">
              Level Up your style with our summer collection
            </h1>

            <button className="flex items-center gap-3 bg-white rounded p-3 text-sm mt-3 hover:bg-slate-300 font-semibold">
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
