import React from "react";
import Image from "../../assets/nature.jpg";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { category, title, description, points } = service;
  const navigate = useNavigate();

  return (
    <section className="w-[85%] mx-auto shadow-sm bg-gradient-to-r from-[#f0f1f6] to-[#ffffff] rounded-full">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-2 py-8">
        <div className="mt-24 mb-8 w-[90%] mx-auto lg:w-[50%] lg:my-auto">
          <img
            className="w-full h-[24rem] md:h-[30rem] md:mx-auto lg:h-[24rem] lg:ml-auto border-[1rem] border-white rounded-[6rem] aspect-square object-cover"
            src={Image}
            alt="service image"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-9">
          <h1 className="w-80% text-4xl text-[#333333] font-medium">{title}</h1>
          <div className="w-[90%] mx-auto flex flex-col gap-9">
            <p className="leading-8">{description}</p>
            <ul className="list-inside text-[#2072c3] font-bold leading-7">
              {points.slice(0, points.length - 1).map((point) => {
                return <li className="list-disc">{point}</li>;
              })}
              <li className="list-disc">
                <span className="text-purple-800">
                  {points[points.length - 1]}
                </span>
              </li>
            </ul>
            <button
              className="rounded-full w-fit px-8 py-6 tracking-widest text-white text-sm bg-blue-700"
              onClick={() => {
                navigate(`/online-therapy-consultation/${category}`);
              }}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServicesCard };
