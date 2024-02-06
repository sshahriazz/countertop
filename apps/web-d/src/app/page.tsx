"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../../assets/styles/swiper-react.css";
import porcelainBg from "../../public/assets/images/porcelain-bg.png";
import quartzBg from "../../public/assets/images/quartz.png";
import sinteredBg from "../../public/assets/images/sinteredStone.png";
import BackgroundImageWithTitle from "../components/home/bgImageWithTitle/page";
import { Button } from "@nextui-org/react";
import BackgroundImageWithTitle1 from "../components/home1/bgImageWithTitle1/page";

export default function Home() {
  const sectionInfo = [
    {
      title: "The Finest Countertop Makers",
      description: "With a rich legacy spanning two decades",
      video: "countertopvideo.mp4",
      btn1: "Order& Buy",
      btn2: "AI Assistant",
    },
    {
      title: "Porcelain",
      description: "Embrace The Luxury of Porcelain ",
      img: porcelainBg,
      btn1: "Order& Buy",
      btn2: "AI Assistant",
    },
    {
      title: "Sintered Stone",
      description: "Unmatched Strengths and Beauty",
      img: sinteredBg,
      btn1: "Order& Buy",
      btn2: "AI Assistant",
    },
    {
      title: "Quartz Countertops",
      description: "Perfect for Modern & Classic Interiors",
      img: quartzBg,
      btn1: "Order& Buy",
      btn2: "AI Assistant",
    },
    {
      title: "Experience Integrations ",
      img: quartzBg,
      btn1: "More",
      btn2: "AI Assistant",
    },
  ];
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const handleSlideChange = (swiper:any) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <main>
      {/* <div className="snap-y h-screen overflow-y-scroll  snap-mandatory">
        {sectionInfo.map((item, index) => (
          <BackgroundImageWithTitle key={index} item={item} />
        ))}
      </div> */}

<Swiper
      onSlideChange={handleSlideChange}
      modules={[Autoplay, Navigation]}
      slidesPerView={1.12}
      spaceBetween={8}
      centeredSlides={true}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      breakpoints={{
        500: {
          slidesPerView: 2.2,
          spaceBetween: 12,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 12,
          centeredSlides: false,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 12,
          centeredSlides: false,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 12,
          centeredSlides: false,
        },
      }}
    >
        {sectionInfo.map((item, index) => (
          <BackgroundImageWithTitle1 key={index} item={item} />
        ))}
    </Swiper>

    </main>
  );
}
