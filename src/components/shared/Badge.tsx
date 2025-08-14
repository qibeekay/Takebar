import React, { Children } from "react";

const Badge = ({ children, bg, border, dot = "bg-font" }: any) => {
  return (
    <div
      className={`flex items-center gap-2 py-2 px-4 ${bg} rounded-full border ${border}`}
    >
      {/* dot */}
      <div className={`${dot} w-1 aspect-square rounded-full`}></div>
      <p className="text-font text-sm font-medium">{children}</p>
    </div>
  );
};

export default Badge;
