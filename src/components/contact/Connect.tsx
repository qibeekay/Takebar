import React from "react";
import { getImageSrc } from "../../utils/imageUtils";
import Badge from "../shared/Badge";

const items = [
  {
    title: "Email Support",
    desc: "Send us your questions",
    img: "email.png",
    bg: "bg-primary",
    detail: "support@coopsave.com",
  },
  {
    title: "Call Us",
    desc: "Speak with a representative",
    img: "call.png",
    bg: "bg-[#4CAF50]",
    detail: "1-800-COOPSAVE",
  },
  {
    title: "Visit Us",
    desc: "Our headquarters",
    img: "map.png",
    bg: "bg-[#FFB347]",
    detail: "102 Epe-Lekki Road, Epe, Lagos",
  },
];

const Connect = () => {
  return (
    <section className="pt-[7rem]">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-[#FFC47A]" bg="bg-[#FFF8F1]">
            Quick Ways to Connect
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[2rem] relative">
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
            <p className="text-base md:text-lg text-primary pt-2">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Connect;
