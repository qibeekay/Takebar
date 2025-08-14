import React from "react";
import Badge from "../shared/Badge";
import Button from "../shared/Button";
import { getImageSrc } from "../../utils/imageUtils";

const Form = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-[7rem]">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-primary-light" bg="bg-[#E0F4FA]">
            Help When You Need It
          </Badge>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* form */}
        <form
          action=""
          className="w-full rounded-[24px] p-6 bg-white/60 backdrop-blur-md"
        >
          <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5">
            Send Us a Message
          </h1>
          <p className="text-sm md:text-base text-second pt-2">
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          {/* name / address */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
            {/* name */}
            <div className="w-full">
              <label htmlFor="fullName" className="text-sm text-second">
                Full Name
              </label>
              <div className="w-full mt-2">
                <input
                  type="text"
                  className="w-full bg-white/25 border border-[#e0e0e0] py-2 px-4 rounded-[8px]"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* email */}
            <div className="w-full">
              <label htmlFor="email" className="text-sm text-second">
                Email Address
              </label>
              <div className="w-full mt-2">
                <input
                  type="text"
                  className="w-full bg-white/25 border border-[#e0e0e0] py-2 px-4 rounded-[8px]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          {/* subject */}
          <div className="w-full mt-6">
            <label htmlFor="subject" className="text-sm text-second">
              Subject
            </label>
            <div className="w-full mt-2">
              <input
                type="text"
                className="w-full bg-white/25 border border-[#e0e0e0] py-2 px-4 rounded-[8px]"
                placeholder="What's this about"
              />
            </div>
          </div>

          {/* message */}
          <div className="w-full mt-6">
            <label htmlFor="message" className="text-sm text-second">
              Message
            </label>
            <div className="w-full mt-2">
              <textarea
                className="w-full bg-white/25 border border-[#e0e0e0] py-2 px-4 rounded-[8px] h-[104px]"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
          </div>

          {/* button */}
          <div className="w-full mt-6">
            <Button>Send Message</Button>
          </div>
        </form>

        {/* support hour */}
        <div className="w-full md:w-[600px] flex flex-col gap-6">
          <div className="rounded-[24px] p-6 bg-white/60 backdrop-blur-md flex flex-col justify-center w-full h-full">
            {/* icons */}
            <div className="">
              <div
                className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-[#00B1F0]`}
              >
                <img src={getImageSrc("alarm.png")} alt="" />
              </div>
            </div>

            {/* h1 */}
            <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5">
              Support Hours
            </h1>

            {/* p */}
            <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
              <p className="text-xs md:text-base text-[#828282]">
                Monday - Friday
              </p>

              <p className="text-xs md:text-base text-font">
                8:00 AM - 8:00 PM EST
              </p>
            </div>
            {/* p */}
            <div className="flex items-center justify-between mt-2 gap-2 flex-wrap">
              <p className="text-xs md:text-base text-[#828282]">Saturday</p>

              <p className="text-xs sm:text-sm md:text-base text-font">
                9:00 AM - 5:00 PM EST
              </p>
            </div>
            {/* p */}
            <div className="flex items-center justify-between mt-2 gap-2 flex-wrap">
              <p className="text-xs md:text-base text-[#828282]">Sunday</p>

              <p className="text-xs md:text-base text-font">
                10:00 AM - 4:00 PM EST
              </p>
            </div>
          </div>

          {/* emergency support */}
          <div className="rounded-[24px] p-6 bg-white/60 backdrop-blur-md flex flex-col justify-center w-full h-full">
            {/* icons */}
            <div className="">
              <div
                className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-[#D32F2F]`}
              >
                <img src={getImageSrc("siren.png")} alt="" />
              </div>
            </div>

            {/* h1 */}
            <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5 text-[#D32F2F]">
              Emergency Support
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#828282] pt-2">
              For urgent account security issues or fraud reporting:
            </p>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg pt-2">
              1-800-URGENT-1 (24/7)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
