import React from "react";
import Badge from "../shared/Badge";
import { getImageSrc } from "../../utils/imageUtils";

const items = [
  {
    img: "rocket.png",
    title: "Instant Access",
    desc: "Start earning immediately",
  },
  {
    img: "banknote.png",
    title: "Higher Returns",
    desc: "2-3x more than traditional savings",
  },
  {
    img: "community.png",
    title: "Community Support",
    desc: "Save with like-minded people",
  },
];
const Future = () => {
  return (
    <section className="bg-gradient-to-tr from-[#004A63] to-[#0077A2] py-[48px]">
      <div className="max-w-[960px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* badge */}
          <div className="w-fit">
            <Badge
              border="border-[#E0E0E0] bg-white/[25%] backdrop-blur-md"
              bg="bg-[#E0F4FA]"
              dot="bg-white"
            >
              <p className="text-white">
                Start this week & earn
                <span className="text-[#FFB347]"> 3.5% APY</span>
              </p>
            </Badge>
          </div>

          {/* header */}
          <h1 className="header text-white">
            Your Financial Future Starts Today
          </h1>
          <p className="text text-[#FAFAFA]">
            Join TakeBar now and start earning the returns your money deserves.
            With our community-powered platform, higher earnings are just a
            signup away.
          </p>
        </div>

        {/* email */}
        <div className="border border-[#E0E0E0] bg-white/[25%] backdrop-blur-md p-6 flex items-center flex-col md:flex-row gap-6 rounded-3xl mt-6">
          {/* form */}
          <div className="w-full flex flex-col items-center text-center">
            <div>
              <div className="w-[80px] md:w-[120px] aspect-auto">
                <img
                  className="w-full h-full "
                  src={getImageSrc("piggy.png")}
                  alt=""
                />
              </div>
            </div>

            <p className="text-sm md:text-base text-white pb-2 pt-4">
              Start Saving in Under 2 Minutes
            </p>
            <div className="w-full flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full">
                <input
                  className="outline-none w-full bg-white/[25%] rounded-[8px] py-2 px-4 text-[#FAFAFA] placeholder:text-[#FAFAFA] text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
                  placeholder="Enter your email address"
                  type="text"
                />
              </div>
              <div className="w-fit">
                <button className="w-full sm:w-[149px] py-2 px-4 text-sm md:text-base rounded-[8px] bg-gradient-to-tr from-[#E89A2D] to-[#FFB347] text-white">
                  Join TakeBack
                </button>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="w-full flex flex-col gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] p-6 bg-white/[25%] backdrop-blur-md flex border gap-6 border-[#e0e0e0]"
              >
                {/* icons */}
                <div className="">
                  <div
                    className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-gradient-to-t from-[#E89A2D] to-[#FFB347] text-white`}
                  >
                    <img src={getImageSrc(item.img)} alt="" />
                  </div>
                </div>

                <div>
                  {/* h1 */}
                  <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] text-white">
                    {item.title}
                  </h1>

                  {/* p */}
                  <p className="text-sm md:text-base text-[#FAFAFA] pt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-wrap gap-6 mt-6">
          {/* apple store */}
          <div className="rounded-[24px] p-4 md:p-6 bg-black backdrop-blur-md flex border items-center gap-4 md:gap-6 border-white">
            {/* icons */}
            <div className="">
              <div
                className={`flex items-center justify-center w-[26.38px] md:w-[38.74px] h-[32px] md:h-[47px]`}
              >
                <img
                  className="w-full h-full"
                  src={getImageSrc("apple.png")}
                  alt=""
                />
              </div>
            </div>

            <div>
              {/* p */}
              <p className="font-medium text-sm md:text-base text-[#FAFAFA]">
                Download on the
              </p>

              {/* h1 */}
              <h1 className="text-[20px] md:text-[24px] font-medium leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] text-white">
                App Store
              </h1>
            </div>
          </div>

          {/* play store */}
          <div className="rounded-[24px] p-4 md:p-6 bg-black backdrop-blur-md flex border items-center gap-4 md:gap-6 border-white">
            {/* icons */}
            <div className="">
              <div
                className={`flex items-center justify-center w-[26.38px] md:w-[38.74px] h-[32px] md:h-[47px]`}
              >
                <img
                  className="w-full h-full"
                  src={getImageSrc("store.png")}
                  alt=""
                />
              </div>
            </div>

            <div>
              {/* p */}
              <p className="font-medium text-sm md:text-base text-[#FAFAFA]">
                Download on the
              </p>

              {/* h1 */}
              <h1 className="text-[20px] md:text-[24px] font-medium leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] text-white">
                Play Store
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
