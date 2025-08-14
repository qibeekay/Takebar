import React from "react";
import { getImageSrc } from "../../utils/imageUtils";
import Badge from "../shared/Badge";

const items = [
  {
    title: "Sarah Chen",
    role: "CEO & Co-Founder",
    desc: "Former Goldman Sachs VP with 15 years in cooperative finance",
    img: "female.png",
  },
  {
    title: "Marcus Johnson",
    role: "CTO & Co-Founder",
    desc: "Ex-Stripe engineer, fintech security specialist",
    img: "img1.png",
  },
  {
    title: "Elena Rodriguez",
    role: "Head of Community",
    desc: "Community banking expert with 20+ years experience",
    img: "img2.png",
  },
];

const Team = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-[7rem]">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-primary-light" bg="bg-[#E0F4FA]">
            The People Behind Us
          </Badge>
        </div>

        {/* header */}
        <h1 className="header">Leadership Team</h1>
        <p className="text">
          Experienced leaders committed to transforming cooperative finance
        </p>
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
                className={`flex items-center justify-center aspect-square rounded-full overflow-hidden w-[56px] border-2 border-white`}
              >
                <img src={getImageSrc(item.img)} alt="" />
              </div>
            </div>

            {/* h1 */}
            <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5">
              {item.title}
            </h1>

            {/* role */}
            <p className="text-primary md:text-lg font-semibold leading-[24px] md:leading-[26px] py-2">
              {item.role}
            </p>

            {/* p */}
            <p className="text-sm md:text-base text-second">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
