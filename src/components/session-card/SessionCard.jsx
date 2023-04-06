import React from "react";
import { BsCheck } from "react-icons/bs";

const SessionCard = ({ session }) => {
  const { cardStyle, buttonName, title, subTitle, tag, points } = session;

  return (
    <section
      className={`w-[18rem] h-fit rounded-2xl ${
        cardStyle === "basic"
          ? "bg-[#ffffff]"
          : cardStyle === "recommended"
          ? "bg-[#d4eaea]"
          : "bg-[#233c71]"
      }`}
    >
      <div className="w-[80%] mx-auto">
        <h1
          className={`text-4xl ${
            cardStyle === "basic"
              ? "text-[#333333]"
              : cardStyle === "recommended"
              ? "text-[#2072c3]"
              : "text-[#ffffff]"
          } font-bold pt-12`}
        >
          {title}
        </h1>
        <h5
          className={`${
            cardStyle === "basic"
              ? "text-[#333333]"
              : cardStyle === "recommended"
              ? "text-[#333333]"
              : "text-[#ffffff]"
          } mt-3 font-bold`}
        >
          {subTitle}
        </h5>
        <p
          className={`${
            cardStyle === "basic"
              ? "text-[#858585]"
              : cardStyle === "recommended"
              ? "text-[#858585]"
              : "text-[#ecf14d]"
          } mt-3`}
        >
          {tag}
        </p>
        <>
          {points.map(({ title, description }) => (
            <div key={title} className="flex gap-4 mt-6">
              <BsCheck
                className={`${
                  cardStyle === "basic"
                    ? "bg-orange-100 text-orange-300 rounded-full"
                    : cardStyle === "recommended"
                    ? "bg-slate-300 text-[#2072c3] rounded-full"
                    : "bg-[#8648EA] text-white rounded-full"
                } text-2xl shrink-0`}
              />
              <div>
                <p
                  className={`${
                    cardStyle === "basic"
                      ? "text-[#333333]"
                      : cardStyle === "recommended"
                      ? "text-[#2072c3]"
                      : "text-[#ffffff]"
                  } font-bold`}
                >
                  {title}
                </p>
                <p
                  className={`${
                    cardStyle === "basic"
                      ? "text-[#858585]"
                      : cardStyle === "recommended"
                      ? "text-[#858585]"
                      : "text-[#ffffff]"
                  } mt-4 text-sm`}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </>
        <button
          className={`border-2 ${
            cardStyle === "advance" ? "text-white border-white" : "border-black"
          } px-6 py-4 font-medium rounded mt-6 mb-12`}
        >
          {buttonName}
        </button>
      </div>
    </section>
  );
};

export { SessionCard };
