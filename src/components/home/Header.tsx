import React from "react";
import Navbar from "../shared/Navbar";
import { getImageSrc } from "../../utils/imageUtils";
import Button from "../shared/Button";
import Badge from "../shared/Badge";

const mentorImages = ["female.png", "img1.png", "img2.png"];

const Header = () => {
  return (
    <header className="relative min-h-screen pt-[9rem] [mask-image:linear-gradient(to_bottom,transparent,black_0%,#F5F7FA_95%,transparent)]">
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

      {/* hero section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-[8px] gap-y-[4rem] relative">
        {/* hero text */}
        <div className="w-full">
          <div>
            {/* badge */}
            <div className="w-fit">
              <Badge border="border-primary-light" bg="bg-[#E0F4FA]">
                Member-owned cooperative
              </Badge>
            </div>

            {/* h1 */}
            <h1 className="text-[48px] lg:text-[72px] font-extrabold tracking-[-2%] leading-[56px] lg:leading-[80px] flex flex-col py-[8px]">
              Grow Together,
              <span>Save Smarter</span>
            </h1>

            {/* p */}
            <p className="text-sm md:text-base font-normal">
              Join Takebar, where members save collectively, earn higher
              returns, and access fair loans through our member-owned
              cooperative platform.
            </p>
          </div>

          {/* button */}
          <div className="flex items-center gap-2 py-[32px]">
            <div className="">
              <Button>Start Saving Today</Button>
            </div>
            <div className="">
              <Button stroke border="border-primary" color="text-primary">
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* profiles */}
          <div className="">
            <div className="flex justify-start items-center">
              {mentorImages.map((image, index) => (
                <>
                  <div
                    key={index}
                    className="w-[56px] border-2 border-white aspect-square rounded-full overflow-hidden"
                    style={{
                      marginLeft: index > 0 ? "-5px" : "0", // Overlap images
                      zIndex: mentorImages.length + index, // Stack order
                    }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={getImageSrc(image)}
                      alt={`Mentor ${index + 1}`}
                    />
                  </div>
                </>
              ))}
              <div className="w-[56px] border-2 border-white aspect-square rounded-full overflow-hidden ml-[-5px] z-10 bg-white grid place-items-center">
                <p className="text-sm md:text-base">+100</p>
              </div>
              <p className="text-sm md:text-base pl-2">Members</p>
            </div>
          </div>

          {/* insure details */}
          <div className="mt-[4rem] lg:mt-[7rem]">
            <div>
              <img src={getImageSrc("insure.png")} alt="" />
            </div>
          </div>
        </div>

        {/* hero image */}
        <div className="w-full mt-[4rem] md:mt-0">
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src={getImageSrc("hero-img.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
