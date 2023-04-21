import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = ({ setIsModal, isModal }) => {
  const { pathname } = useLocation();

  return (
    <section className="absolute text-xl border border-black text-center right-2 top-12 bg-white w-72 flex flex-col sm:hidden text-[#858585]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 py-4 border-b border-black"
            : "py-4 border-b border-black"
        }
      >
        Home
      </NavLink>
      <p
        className={`cursor-pointer py-4 border-b border-black relative ${
          pathname.split("/")[1] === "online-therapy-consultation"
            ? "text-blue-400"
            : ""
        }`}
        onClick={() => {
          setIsModal(!isModal);
        }}
      >
        Services
      </p>
      {isModal && (
        <div className="flex flex-col gap-2 m-2 border-2 border-slate-500">
          <NavLink
            to="/online-therapy-consultation/individual"
            onClick={() => {
              setIsModal(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b py-4 border-slate-500"
                : "py-4 text-black border-b border-slate-500"
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
              isActive
                ? "text-blue-400 py-4 border-b border-slate-500"
                : "py-4 text-black border-b border-slate-500"
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
              isActive ? "text-blue-400 py-4" : "text-black py-4"
            }
          >
            Child and Family Therapy
          </NavLink>
        </div>
      )}
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 py-4 border-b border-black"
            : "py-4 border-b border-black"
        }
      >
        FAQs
      </NavLink>
      <p className="cursor-pointer py-4">Contact Us</p>
    </section>
  );
};

export { Menu };
