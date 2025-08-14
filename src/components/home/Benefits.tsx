import { color } from "motion";
import Badge from "../shared/Badge";
import { div } from "motion/react-client";
import { getImageSrc } from "../../utils/imageUtils";

const items = [
  {
    img: "c1.png",
    title: "Higher Returns",
    desc: "Earn up to 8.5% annual returns through cooperative savings pools",
    color: "bg-[#4CAF50]",
  },
  {
    img: "c2.png",
    title: "Community Power",
    desc: "Pool resources with like-minded savers for stronger collective growth",
    color: "bg-[#388E3C]",
  },
  {
    img: "c3.png",
    title: "Bank-Level Security",
    desc: "FDIC insured accounts with advanced encryption and fraud protection",
    color: "bg-[#00B1F0]",
  },
  {
    img: "c4.png",
    title: "Affordable Loans",
    desc: "Access low-interest loans funded by the community savings pool",
    color: "bg-[#005F80]",
  },
  {
    img: "c5.png",
    title: "Flexible Terms",
    desc: "Choose from multiple savings plans and loan terms that fit your needs",
    color: "bg-[#FFB347]",
  },
  {
    img: "c6.png",
    title: "Member Rewards",
    desc: "Earn loyalty rewards and bonuses based on your participation level",
    color: "bg-[#E89A2D]",
  },
];

const Benefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        {/* badge */}
        <div className="w-fit">
          <Badge border="border-primary-light" bg="bg-[#E0F4FA]">
            Cooperative Benefits
          </Badge>
        </div>

        {/* header */}
        <h1 className="header">Why Choose Our Cooperative Model</h1>
        <p className="text">
          Experience the power of member ownership. Real people, real savings,
          and real benefits from a financial institution that truly serves its
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[2rem]">
        {/* grid item */}
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-[24px] p-6 bg-white/60 backdrop-blur-md flex flex-col"
          >
            {/* icons */}
            <div className="">
              <div
                className={`flex items-center justify-center w-[44px] aspect-square rounded-full ${item.color}`}
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

export default Benefits;
