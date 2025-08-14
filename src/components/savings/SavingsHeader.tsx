import React from "react";
import { getImageSrc } from "../../utils/imageUtils";
import Options from "./Options";

const SavingsHeader = () => {
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

      <div className="relative max-w-7xl mx-auto px-4">
        {/* intro */}
        <div className="text-center">
          <h1 className="text-font font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-1%]">
            Choose Your <span className="text-primary">Savings Plan</span> 
          </h1>
          <p className="text-second text-sm md:text-base leading-[22px]">
            Start building wealth with our cooperative savings plans. The more
            you save together, the better returns everyone earns.
          </p>
        </div>

        {/* savings options */}
        <Options />
      </div>
    </header>
  );
};

export default SavingsHeader;
