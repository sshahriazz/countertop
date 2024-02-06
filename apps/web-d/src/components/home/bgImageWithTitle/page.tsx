"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

function BackgroundImageWithTitle({ item }: any) {
  const [Percect, setPercent] = useState(0);
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => setPercent(e));
  }, []);

  console.log(Percect);

  return (
    <section className="relative">
      {item.img ? (
        <div ref={element}>
          <div className="bg-black h-full w-full bg-opacity-50 absolute"></div>
          <div>
            <Image
              className="w-full snap-start h-screen object-cover"
              src={item.img}
              alt="Picture of the user"
            />
          </div>
        </div>
      ) : (
        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover snap-start"
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 items-center flex flex-col justify-between top-12 bottom-[86px]">
                        <div className="text-center items-center">
                            <p className="text-[28px] leading-[34px] lg:text-h1-bold sm:mb-5 text-[#F5F5F7]">{item.title}</p>
                            <p className="font-normal text-center text-[15px] md:text-h4-regular text-[#F5F5F7] ">{item.description}</p>
                        </div>

                        <div className="flex gap-x-6 justify-center relative ">
                            <Button className="p-3 md:w-[272px] font-semibold bg-[#618BB6] text-[#fff] rounded-[4px]">{item.btn1}</Button>
                            <Button className="p-3 md:w-[272px] font-semibold bg-[#E5E5E5] rounded-[4px]">{item.btn2}</Button>
                        </div>
                    </div>
    </section>
  );
}

export default BackgroundImageWithTitle;
