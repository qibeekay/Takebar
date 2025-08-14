import React from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white pt-[64px] pb-[24px]">
      <div className="max-w-[1313px] mx-auto px-4">
        {/* website details */}
        <div className="flex gap-x-6 gap-y-[60px] justify-between flex-wrap">
          {/* details */}
          <div className="w-[455px]">
            {/* logo */}
            <div>
              <div>
                <img src={getImageSrc("footerLogo.png")} alt="" />
              </div>
            </div>

            {/* p */}
            <p className="text-sm md:text-base text-[#a3a3a3] mt-6">
              Empowering communities to achieve financial freedom through
              cooperative savings. Join thousands building wealth together with
              higher returns and stronger financial habits.
            </p>

            {/* socials */}
            <div className="flex gap-6 flex-wrap mt-6">
              {/* insta */}
              <div className="">
                <Link
                  to={""}
                  className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-[#262626]`}
                >
                  <img
                    className="w-[24px] h-[24px]"
                    src={getImageSrc("insta.png")}
                    alt=""
                  />
                </Link>
              </div>

              {/* link */}
              <div className="">
                <Link
                  to={""}
                  className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-[#262626]`}
                >
                  <img
                    className="w-[24px] h-[24px]"
                    src={getImageSrc("link.png")}
                    alt=""
                  />
                </Link>
              </div>

              {/* twitter */}
              <div className="">
                <Link
                  to={""}
                  className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-[#262626]`}
                >
                  <img
                    className="w-[24px] h-[24px]"
                    src={getImageSrc("twitter.png")}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="w-[102px] ">
            <h1 className="text-base md:text-lg pb-6 font-semibold">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={"/savings-plans"}
                >
                  Savings Plans
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* updated */}
          <div className="w-full md:w-[516px]">
            <h1 className="text-base md:text-lg pb-4 font-semibold">
              Stay Updated
            </h1>
            <p className="font-medium text-sm md:text-base text-[#A3A3A3]">
              Get the latest tips on saving, investing, and growing your wealth.
            </p>

            <div className="w-full flex flex-col xs:flex-row items-center gap-4 mt-6">
              <div className="w-full">
                <input
                  className="outline-none w-full bg-white/[25%] rounded-[8px] py-3 px-6 text-[#FAFAFA] placeholder:text-[#FAFAFA] text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
                  placeholder="Enter your email address"
                  type="text"
                />
              </div>
              <div className="w-[111px] sm:w-[149px]">
                <button className="w-full py-3 px-6 text-sm md:text-base rounded-[8px] bg-gradient-to-tr from-primary-light to-primary text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-y-6 border-y border-[#262626] mt-6 py-6">
          <p className="font-medium text-sm md:text-base text-[#A3A3A3]">
            &copy; 2025 TakeBar. All rights reserved.
          </p>

          <div className=" ">
            <ul className="flex flex-wrap gap-x-6">
              {/* privacy */}
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={""}
                >
                  Privacy Policy
                </Link>
              </li>

              {/* service */}
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={""}
                >
                  Terms of Service
                </Link>
              </li>

              {/* cookie */}
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={""}
                >
                  Cookie Policy
                </Link>
              </li>

              {/* fdic */}
              <li>
                <Link
                  className="font-medium text-sm md:text-base text-[#A3A3A3]"
                  to={""}
                >
                  FDIC Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* warning */}
        <p className="text-[11px] md:text-xs mt-6 tracking-[1%] text-[#A3A3A3]">
          SaveCircle is a financial technology company, not a bank. Banking
          services provided by partner institutions. Investment products are not
          FDIC insured, may lose value, and are not bank guaranteed. Member
          FDIC. All investments involve risk, including potential loss of
          principal. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
