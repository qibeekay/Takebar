// Button.tsx
import React from "react";
import type { ButtonProps } from "../../utils/types";

const Button: React.FC<ButtonProps> = ({
  children,
  stroke = false,
  border = "[#4F4F4F]",
  color = "",
  ...rest // collect anything else (onClick, disabled, type, etc.)
}) => {
  return (
    <button
      className={`py-[12px] px-[24px] cursor-pointer w-full font-nunito font-semibold text-sm md:text-base rounded-lg ${
        stroke
          ? `border ${color} ${border}`
          : "bg-gradient-to-r from-primary-light to-primary hover:from-primary transition-colors duration-300 ease-in-out hover:to-primary text-white"
      }`}
      {...rest} // ← forward onClick and other props
    >
      {children}
    </button>
  );
};

export default Button;
