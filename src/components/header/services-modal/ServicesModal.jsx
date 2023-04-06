import React from "react";
import { NavLink } from "react-router-dom";

const ServicesModal = ({ setIsModal }) => {
  return (
    <section
      onMouseEnter={() => {
        setIsModal(true);
      }}
      onMouseLeave={() => {
        setIsModal(false);
      }}
      className="flex gap-4 flex-col shadow-sessions-modal p-4 border-t-4 border-blue-400 bg-white w-56 absolute -bottom-[8rem] -left-14"
    >
      <NavLink
        to="/online-therapy-consultation/individual"
        onClick={() => {
          setIsModal(false);
        }}
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "text-black"
        }
      >
        Personal Therapy
      </NavLink>
      <NavLink
        to="/online-therapy-consultation/couple"
        onClick={() => {
          setIsModal(false);
        }}
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "text-black"
        }
      >
        Couple/Marriage Counselling
      </NavLink>
      <NavLink
        to="/online-therapy-consultation/child"
        onClick={() => {
          setIsModal(false);
        }}
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "text-black"
        }
      >
        Child and Family Therapy
      </NavLink>
    </section>
  );
};

export { ServicesModal };
