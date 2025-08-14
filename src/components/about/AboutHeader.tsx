import React from "react";
import { getImageSrc } from "../../utils/imageUtils";
import Badge from "../shared/Badge";
import { color } from "motion";
import Focus from "./Focus";

const items = [
  {
    number: "10,000+",
    detail: "Active Members",
    color: "text-[#388E3C]",
  },
  {
    number: "₦50M+",
    detail: "Total Savings",
    color: "text-[#4CAF50]",
  },
  {
    number: "₦15M+",
    detail: "Loans Funded",
    color: "text-[#FFB347]",
  },
  {
    number: "8.5%",
    detail: "Avg Returns",
    color: "text-[#0077A2]",
  },
];

const AboutHeader = () => {
  return (
    <header className="relative min-h-screen pt-[9rem]  [mask-image:linear-gradient(to_bottom,transparent,black_0%,#F5F7FA_95%,transparent)]">
      {/* desktop background */}
      <div className="hidden md:block absolute inset-0 left-0 right-0">
        <img
          className="w-full h-full object-cover"
          src={getImageSrc("desktopBG.png")}
          alt=""
        />
      </div>

      {/* mobile background */}
      <div className="md:hidden absolute inset-0 left-0 right-0">
        <img
          className="w-full h-full object-cover"
          src={getImageSrc("mobileBG.png")}
          alt=""
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* intro */}
        <div className="text-center">
          <h1 className="text-font font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-1%]">
            Building Financial <span className="text-primary">Community</span>{" "}
             Together
          </h1>
          <p className="text-second text-sm md:text-base leading-[22px]">
            Founded in 2025, TakeBar emerged from a simple belief: when people
            come together to save and support each other, everyone wins. We're
            reimagining cooperative finance for the digital age.
          </p>
        </div>

        {/* our story */}
        <div className="flex flex-col md:flex-row items-center gap-x-[96px] gap-y-[2rem] relative mt-[7rem]">
          {/* text */}
          <div className="w-full">
            <div>
              {/* badge */}
              <div className="w-fit">
                <Badge border="border-[#FFC47A]" bg="bg-[#FFF8F1]">
                  The Journey So Far
                </Badge>
              </div>

              {/* h1 */}
              <h1 className="text-font font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-1%] mt-6">
                Our Story
              </h1>

              {/* desc */}
              <p className="text-second text-sm md:text-base leading-[22px]">
                Traditional banks weren't serving everyday people fairly. High
                fees, low returns, and complex lending practices left millions
                underserved. We saw an opportunity to bring the cooperative
                model into the 21st century. Starting with just 100 founding
                members, we've grown to over 10,000 active savers who have
                collectively saved over $50 million and accessed affordable
                loans worth $15 million.
              </p>
              <p className="text-second text-sm md:text-base leading-[22px]">
                Our platform combines the best of cooperative banking with
                modern technology, creating a financial ecosystem where members
                truly own their financial future.
              </p>
            </div>
          </div>

          {/* grid items */}
          <div className="w-full">
            <div className="w-full grid grid-cols-2 gap-[10px]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className=" bg-white/60 backdrop-blur-md p-6 rounded-3xl flex flex-col"
                >
                  <h1
                    className={`text-[20px] md:text-[24px] font-semibold leading-[24px] md:leading-[32px] tracking-[-0.5%] ${item.color}`}
                  >
                    {item.number}
                  </h1>

                  <p className="text-second leading-[24px] text-sm md:text-base">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* focus */}
      <Focus />
    </header>
  );
};

export default AboutHeader;
