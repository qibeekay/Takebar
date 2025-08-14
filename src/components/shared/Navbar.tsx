import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { RiCloseFill } from "@remixicon/react";
import { getImageSrc } from "../../utils/imageUtils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Active link styles
  const activeStyles = "text-primary border-b-2 border-primary";

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] m-2">
      <div className="text-neutral-500 bg-white max-w-7xl px-4 py-3 mx-auto flex justify-between items-center rounded-3xl relative">
        {/* left logo */}
        <a href="/">
          <img src={getImageSrc("logo.png")} alt="logo" />
        </a>

        {/* center links */}
        <div className="hidden lg:flex space-x-3 items-center relative">
          <a
            href="/"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/") ? activeStyles : ""
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/about") ? activeStyles : ""
            }`}
          >
            About
          </a>

          <a
            href="/savings-plans"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/savings-plans") ? activeStyles : ""
            }`}
          >
            Savings Plans
          </a>

          <a
            href="/contact"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/contact") ? activeStyles : ""
            }`}
          >
            Contact
          </a>
        </div>

        {/* right buttons */}
        <div className="hidden lg:flex space-x-2 items-center">
          <div className="w-fit">
            <Button stroke border="border-[#E0E0E0] color='text-second' ">
              Login
            </Button>
          </div>
          <div className="w-fit">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <RiCloseFill />
            ) : (
              <div className="">
                <img
                  className="w-[32px] aspect-square"
                  src={getImageSrc("menu.png")}
                  alt=""
                />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden bg-white/60 backdrop-blur-md rounded-xl mt-2 min-h-[413px] p-[24px] w-full fixed right-0 transition-all duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4 overflow-y-auto items-center justify-between text-center h-full">
          <a
            href="/"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/") ? activeStyles : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/about") ? activeStyles : ""
            }`}
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/savings-plans"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/savings-plans") ? activeStyles : ""
            }`}
            onClick={toggleMenu}
          >
            Savings Plans
          </a>
          <a
            href="/contact"
            className={`text-base font-medium text-[#4F4F4F] hover:text-primary hover:border-b-2 rounded-[2px] border-primary py-3 px-6 ${
              isActive("/contact") ? activeStyles : ""
            }`}
            onClick={toggleMenu}
          >
            Contact
          </a>
          <div className="w-fit mt-4">
            <Button stroke border="border-[#E0E0E0] color='text-second' ">
              Login
            </Button>
          </div>

          <div className="w-fit mt-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
