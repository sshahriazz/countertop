import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <video autoPlay loop muted className="w-full h-screen object-cover">
          <source src="countertopvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 items-center flex flex-col justify-between top-12 bottom-[86px]">
          <div className="text-center items-center">
            <p className="text-[28px] leading-[34px] lg:text-7xl font-semibold sm:mb-5 text-[#F5F5F7]">The Finest Countertop Makers</p>
            <p className="font-normal text-center text-[15px] md:text-4xl text-[#F5F5F7]">With a rich legacy spanning two decades</p>
          </div>

          <div className="flex gap-x-6 justify-center relative ">
            <Button className="p-3 md:w-[272px] font-semibold bg-[#618BB6] text-[#fff] rounded-[4px]">Order & Buy</Button>
            <Button className="p-3 md:w-[272px] font-semibold bg-[#E5E5E5] rounded-[4px]">AI Assistant</Button>
          </div>
        </div>
      </section>

      <section className="relative">
        <video autoPlay loop muted className="w-full h-screen object-cover">
          <source src="countertopvideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 items-center flex flex-col justify-between top-12 bottom-[86px]">
          <div className="text-center items-center">
            <p className="text-[28px] leading-[34px] lg:text-7xl font-semibold sm:mb-5 text-[#F5F5F7]">Porcelain</p>
            <p className="font-normal text-center text-[15px] md:text-4xl text-[#F5F5F7]">Embrace The Luxury of Porcelain</p>
          </div>

          <div className="flex gap-x-6 justify-center relative ">
            <Button className="p-3 md:w-[272px] font-semibold bg-[#618BB6] text-[#fff] rounded-[4px]">Order & Buy</Button>
            <Button className="p-3 md:w-[272px] font-semibold bg-[#E5E5E5] rounded-[4px]">AI Assistance</Button>
          </div>
        </div>
      </section>

      <section className="relative">
        <video autoPlay loop muted className="w-full h-screen object-cover">
          <source src="countertopvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 items-center flex flex-col justify-between top-12 bottom-[86px]">
          <div className="text-center items-center">
            <p className="text-[28px] leading-[34px] lg:text-7xl font-semibold sm:mb-5 text-[#F5F5F7]">Sintered Stone</p>
            <p className="font-normal text-center text-[15px] md:text-4xl text-[#F5F5F7]">Unmatched Strengths and Beauty</p>
          </div>

          <div className="flex gap-x-6 justify-center relative ">
            <Button className="p-3 md:w-[272px] font-semibold bg-[#618BB6] text-[#fff] rounded-[4px]">Order & Buy</Button>
            <Button className="p-3 md:w-[272px] font-semibold bg-[#E5E5E5] rounded-[4px]">AI Assistance</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
