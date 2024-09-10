import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import sixth from "../assets/sixth.jpg";
import seventh from "../assets/seventh.jpg";
import eigth from "../assets/eight.jpg";
import ninth from "../assets/ninth.jpg";
import tenth from "../assets/tenth.jpg";

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5, 
  slidesToScroll: 5, 
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};

const SliderSection: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="bg-black p-4 sm:p-8 lg:mx-[120px] mb-8">
      <h2 className="text-white text-2xl mb-8 font-bold">Trending Now</h2>
      <div className="relative">
        <Slider
          {...sliderSettings}
          ref={sliderRef}
          className="w-full"
        >
          <SliderItem title="Enjoy on your TV" icon={first} num={1} />
          <SliderItem title="Download your shows to watch offline" icon={second} num={2} />
          <SliderItem title="Watch everywhere" icon={third} num={3} />
          <SliderItem title="Create profiles for kids" icon={fourth} num={4} />
          <SliderItem title="Create profiles for kids" icon={fifth} num={5} />
          <SliderItem title="Create profiles for kids" icon={sixth} num={6} />
          <SliderItem title="Create profiles for kids" icon={seventh} num={7} />
          <SliderItem title="Create profiles for kids" icon={eigth} num={8} />
          <SliderItem title="Create profiles for kids" icon={ninth} num={9} />
          <SliderItem title="Create profiles for kids" icon={tenth} num={10} />
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
