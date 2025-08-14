import React from "react";
import Badge from "../shared/Badge";
import { getImageSrc } from "../../utils/imageUtils";
import { div } from "motion/react-client";

const items = [
  {
    title: "Starter Circle",
    desc: "6.5%",
    color: "[#FFB347]",
    bg: "bg-[#FFB347]",
    border: "border-[#FFB347]",
    gradColor: "from-[#FFB347] to-[#E89A2D]",
    list: [
      "Monthly contributions starting at ₦50,000",
      "Quarterly interest payments",
      "Access to community forums",
      "Basic financial planning tools",
    ],
  },
  {
    title: "Growth Collective",
    desc: "7.5%",
    color: "[#4CAF50]",
    bg: "bg-[#4CAF50]",
    border: "border-[#4CAF50]",
    gradColor: "from-[#4CAF50] to-[#388E3C]",
    list: [
      "Monthly contributions starting at ₦100,000",
      "Monthly interest payments",
      "Priority loan eligibility",
      "Advanced analytics dashboard",
    ],
  },
  {
    title: "Wealth Alliance",
    desc: "8.5%",
    color: "primary",
    bg: "bg-primary",
    border: "border-primary",
    gradColor: "from-primary-light to-primary",
    list: [
      "Monthly contributions starting at ₦150,000",
      "Bi-weekly interest payments",
      "Guaranteed loan pre-approval",
      "Premium financial advisory",
      "Exclusive investment opportunities",
      "Tax optimization guidance",
    ],
  },
];

const Options = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-[7rem]">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-primary-light" bg="bg-[#E0F4FA]">
            Find Your Fit
          </Badge>
        </div>

        {/* header */}
        <h1 className="header">Savings Plan Options</h1>
        <p className="text">
          Explore the plan that fits your financial goals and start earning
          higher returns
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[2rem] relative">
        {/* grid item */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-[24px] p-6 bg-white/60 backdrop-blur-md border ${item.border}`}
          >
            <div className="w-full flex flex-col items-center justify-center text-center">
              {/* icons */}
              <div className="">
                <div
                  className={`flex items-center justify-center w-[44px] aspect-square rounded-full bg-gradient-to-t ${item.gradColor}`}
                >
                  <img src={getImageSrc("box.png")} alt="" />
                </div>
              </div>

              {/* h1 */}
              <h1 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] tracking-[0%] md:tracking-[-0.5%] pt-5">
                {item.title}
              </h1>

              {/* p */}
              <p
                className={`text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-1%] font-bold text-${item.color} pt-2`}
              >
                {item.desc}
              </p>
            </div>

            <ul className="w-full flex flex-col gap-y-[10px] mt-5">
              {item.list.map((list, index) => (
                <li
                  key={index}
                  className="w-full flex items-center gap-[10px] text-sm text-second"
                >
                  <div>
                    <div
                      className={`w-[20px] aspect-square overflow-hidden rounded-full ${item.bg} grid place-items-center`}
                    >
                      <img src={getImageSrc("check.png")} alt="" />
                    </div>
                  </div>
                  <span className="w-full text-xs md:text-sm">{list}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Options;
