import React from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const { pathname } = useLocation();
  const data =
    pathname === "/online-therapy-consultation/couple"
      ? {
          title:
            "Best Online Relationship Couple Marriage Counselling Therapy India",
          subTitle: "Book Appointment with Top Psychologist and Counsellor",
          points: [
            "☑ Couples with Certified Therapist",
            "☑ Free online Marital Counselling *",
            "☑ Certified Mental Health Therapists",
            "☑ Top Online Therapy & Counselling Consultation India",
            "☑ Therapy for Couples",
            "☑ Sessions via Video Calls only.",
          ],
          buttonName: "Book Couple/Relationship Therapy",
        }
      : pathname === "/online-therapy-consultation/individual"
      ? {
          title: "Best Online Personal Therapy and Counselling India",
          subTitle: "Book Appointment with Top Psychologist and Counsellor",
          points: [
            "☑ One-on-One Online Therapy Sessions",
            "☑ Free online therapy and Counselling *",
            "☑ Certified Mental Health Therapists",
            "☑ Top Online Therapy & Counselling Consultation India",
            "☑ Therapy for Individuals",
            "☑ Chat/Audio Call and Video Calls Same.",
          ],
          buttonName: "Book Individual Therapy Sessions",
        }
      : {
          title: "Best Online Child Psychologist India | Online Family Therapy",
          subTitle:
            "Book Appointment with Top Psychologist and Counsellor. Get free therapy sessions*",
          points: [
            "☑ Child Psychologist, Teenager Therapy",
            "☑ Best Family Therapy and Counselling",
            "☑ Parenting Therapy Consultation",
            "☑ Free online family therapy sessions *",
            "☑ Certified Mental Health Therapists",
            "☑ Top Online Therapy & Counselling Consultation India",
            "☑ Therapy for Children, Teenagers, Parents",
            "☑ Sessions via Video Calls only.",
          ],
          buttonName: "Book Child Psychologist/Family Therapist",
        };

  const { title, subTitle, points, buttonName } = data;

  return (
    <section className="relative bg-image bg-center bg-cover bg-no-repeat h-screen ">
      <div className="w-4/6 flex flex-col gap-4 absolute top-40 left-44">
        <h1 className="text-5xl">{title}</h1>
        <h3 className="text-xl text-blue-700">{subTitle}</h3>
        <div className="mt-4">
          {points.map((point) => (
            <p key={point} className="text-xl">
              {point}
            </p>
          ))}
        </div>
        <button className="text-white bg-red-600 p-5 w-fit">
          {buttonName}
        </button>
      </div>
    </section>
  );
};

export { Hero };
