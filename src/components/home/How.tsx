import React from "react";
import Badge from "../shared/Badge";
import { getImageSrc } from "../../utils/imageUtils";

const items = [
  {
    title: "Join the Cooperative",
    desc: "Sign up and become a member of our financial community. Complete your profile and verify your identity.",
  },
  {
    title: "Start Saving Together",
    desc: "Choose a savings plan and begin contributing. Your funds are pooled with other members for maximum growth.",
  },
  {
    title: "Watch Your Money Grow",
    desc: "Earn competitive returns through collective investment strategies and shared financial success.",
  },
  {
    title: "Access Affordable Credit",
    desc: "Apply for low-interest loans funded by the community savings pool when you need financial support.",
  },
];

const How = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-[7rem]">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-[#FFC47A]" bg="bg-[#FFF8F1]">
            Cooperative Benefits
          </Badge>
        </div>

        {/* header */}
        <h1 className="header">How It Works</h1>
        <p className="text">
          Getting started with cooperative savings is simple. Join thousands of
          members already building wealth together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-4 gap-6 mt-[2rem] relative">
        <div className=" absolute w-[10px] md:w-0 llg:w-full h-full md:h-0 llg:h-[10px] bg-[#FFE8D6] -translate-x-1/2 llg:-translate-x-0 left-1/2 llg:left-0 top-0 llg:top-1/2 llg:-translate-y-1/2"></div>
        {/* grid item */}
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-[24px] p-6 bg-white/60 backdrop-blur-md flex flex-col items-center justify-center text-center"
          >
            {/* icons */}
            <div className="">
              <div
                className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-gradient-to-t from-[#E89A2D] to-[#FFB347] text-white`}
              >
                <p className="font-semibold text-[20px] md:text-[24px]">
                  {index + 1}
                </p>
              </div>
            </div>

            {/* h1 */}
            <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5">
              {item.title}
            </h1>

            {/* p */}
            <p className="text-sm md:text-base text-second pt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;
