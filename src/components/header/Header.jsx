import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ServicesModal } from "./services-modal/ServicesModal";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-white z-10 shadow-header sticky top-0">
      <div className="flex justify-between w-[85%] mx-auto pt-6 px-2">
        <h1 className="ml-2">LOGO</h1>
        <div className="flex gap-8 text-[#858585]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sm text-blue-400" : "text-sm"
            }
          >
            Home
          </NavLink>
          <p
            className={`text-sm cursor-pointer flex gap-1 items-center relative pb-6 ${
              pathname.split("/")[1] === "online-therapy-consultation"
                ? "text-blue-400"
                : ""
            }`}
            onMouseEnter={() => {
              setIsModal(true);
            }}
            onMouseLeave={() => {
              setIsModal(false);
            }}
          >
            Services <MdKeyboardArrowDown className="text-lg" />
            {isModal && <ServicesModal setIsModal={setIsModal} />}
          </p>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "text-sm text-blue-400" : "text-sm"
            }
          >
            FAQs
          </NavLink>
          <p className="text-sm cursor-pointer">Contact Us</p>
        </div>
      </div>
    </header>
  );
};

export { Header };
