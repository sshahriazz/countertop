import Image from "next/image";
import { Button } from "@nextui-org/button";

const HeroSection = ({ item }: any) => {
  const footerItems = [
    "AbsoluteGM @ 2024",
    "Privacy & Legal",
    "Integrations",
    "About",
    "Contact",
  ];
  return (
    <section className="relative">
      {item.img ? (
        <div>
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
        <div>
          {item.footer ? (
            <div className="bg-black h-full w-full bg-opacity-50 absolute"></div>
          ) : (
            ""
          )}
          <video
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover snap-start"
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="absolute inset-0 items-center flex flex-col justify-between top-12 bottom-[86px]">
        <div className="text-center items-center">
          <p className="text-[28px] leading-[34px] lg:text-h1-bold sm:mb-5 text-[#F5F5F7] dark:text-[#F5F5F7]">
            {item.title}
          </p>
          <p className="font-normal text-center text-[15px] md:text-h4-regular text-[#F5F5F7] ">
            {item.description}
          </p>
        </div>
        <div>
          <div className="flex gap-x-6 justify-center relative ">
            <Button className="p-3 md:w-[272px] font-semibold bg-[#618BB6] text-[#fff] rounded-[4px]">
              {item.btn1}
            </Button>
            <Button className="p-3 md:w-[272px] font-semibold bg-[#E5E5E5] rounded-[4px]">
              {item.btn2}
            </Button>
          </div>
          <div className="items-center flex">
            {item.footer ? (
              <div className="text-xs-regular text-white flex justify-start gap-x-4">
                {footerItems.map((element, index) => (
                  <p key={element + index} className="md:px-4 md:py-3">{element}</p>
                ))}
              </div>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
