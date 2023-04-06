import React from "react";
import { ServicesCard } from "../../../components";

const Category = () => {
  const data = [
    {
      key: "1",
      category: "individual",
      title:
        "Best Online Psychologist - Individual Personal - Online Therapy & Counselling",
      description:
        "Book Appointment now for personal & Individual Therapy Counselling Sessions. You will be connected to your therapist within 24 hours. Consult the best online psychologist, psychiatrist, mental health expert.",
      points: [
        "Book For Yourself or Your Friend/Family Member",
        "One-On-One Session with Certified Therapist",
        "Chat, Phone Call, Video Call Psychologist.",
        "Starting at Rs. 999*",
        "Free online Therapy Sessions with selected packages. Get free online counselling minutes.",
      ],
    },
    {
      key: "2",
      category: "couple",
      title: "Couple/Marriage - Online Therapy & Counselling",
      description:
        "Book Appointment now for Couple/Marriage/Marital/Relationship Counselling Therapy Sessions. You will be connected to your therapist within 24 hours. Consult top online marriage counsellor and online relationship counsellor in India, Get free marriage counselling sessions.",
      points: [
        "Couple/Marriage Counselling Sessions.",
        "2 People with Certified Couple Counsellor.",
        "Video Call Only for Couple Counselling.",
        "SStarting at Rs. 999*",
        "Session Duration - 60 Mins",
        "Free Therapy Sessions with selected packages.",
      ],
    },
    {
      key: "3",
      category: "child",
      title: "Online Child Psychologist and Family Therapy",
      description:
        "Book Appointment now. Get online therapy and counselling from Child Psychologist, Teenager Therapist, Family therapist. Therapy for parenting and children and teenagers. You will be connected to your therapist within 24 hours.",
      points: [
        "Book Family Therapy Session, Child Therapy Session.",
        "One-on-One or family members with psychologist.",
        "Only Video Call Mode available.",
        "Starting at Rs. 999*",
        "Session Duration - 60 mins",
        "Free Therapy Sessions with selected packages.",
      ],
    },
  ];

  return (
    <section className="my-6">
      <h2 className="text-4xl font-medium text-center text-blue-800">
        Talk To Therapist
      </h2>
      <h4 className="text-xl mt-2 mb-4 font-medium text-center text-blue-800">
        <span className="text-blue-400">
          Best Online Therapy & Counselling Platform
        </span>{" "}
        - Online Psychologists & Experts
      </h4>
      <div className="flex flex-col gap-6 bg-[#f0f2f7] py-12">
        {data.map((service) => (
          <ServicesCard service={service} key={service.key} />
        ))}
      </div>
    </section>
  );
};

export { Category };
