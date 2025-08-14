import React from "react";
import Badge from "../shared/Badge";
import { getImageSrc } from "../../utils/imageUtils";

const items = [
  {
    title: "Community First",
    desc: "Every decision we make puts our members and their financial wellbeing at the center.",
    img: "users.png",
  },
  {
    title: "Transparency",
    desc: "Clear fees, honest returns, and open communication about how your money works.",
    img: "scan.png",
  },
  {
    title: "Excellence",
    desc: "Delivering superior financial products and services through innovation and dedication.",
    img: "ribbon.png",
  },
  {
    title: "Trust",
    desc: "Building lasting relationships based on integrity, security, and mutual success.",
    img: "heart.png",
  },
];

const Values = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-[7rem]">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-[#FFC47A]" bg="bg-[#FFF8F1]">
            Guiding Principles
          </Badge>
        </div>

        {/* header */}
        <h1 className="header">Our Values</h1>
        <p className="text">
          These principles guide every decision we make and every product we
          build
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-4 gap-6 mt-[2rem] relative">
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
                <img src={getImageSrc(item.img)} alt="" />
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

export default Values;
