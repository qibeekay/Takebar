import React from "react";
import Badge from "../shared/Badge";
import { getImageSrc } from "../../utils/imageUtils";

const items = [
  {
    img: "mission.png",
    title: "Our Mission",
    desc: "To democratize wealth building by creating a cooperative financial platform where members save together, support each other, and achieve better financial outcomes than they could alone.",
  },

  {
    img: "vision.png",
    title: "Our Vision",
    desc: "A world where cooperative finance is the norm, not the exception. Where communities control their financial destiny through mutual support, transparency, and shared prosperity.",
  },
];

const Focus = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-[7rem]">
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* badge */}
          <div className="w-fit">
            <Badge border="border-primary-light" bg="bg-[#E0F4FA]">
              Our Focus
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]">
          {/* grid item */}
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] p-6 bg-white/60 backdrop-blur-md flex flex-col"
            >
              {/* icons */}
              <div className="">
                <div
                  className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-gradient-to-tr from-primary-light to-primary`}
                >
                  <img src={getImageSrc(item.img)} alt="" />
                </div>
              </div>

              {/* h1 */}
              <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5">
                {item.title}
              </h1>

              {/* p */}
              <p className="text-sm md:text-base text-second pt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;
