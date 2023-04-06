import React from "react";
import { SessionCard } from "../../../components";

const SessionDetails = () => {
  const data = [
    {
      key: "1",
      cardStyle: "basic",
      title: "1 Session - Rs. 999",
      subTitle: "Know Package - 60 Mins",
      tag: "Start Your Therapy Journey.",
      buttonName: "Book 1 Session",
      points: [
        {
          title: "Total 60 Mins",
          description:
            "Via Application of your choice. Whatsapp, Skype, Zoom, Botim etc.",
        },
        {
          title: "Video/Audio/Chat",
          description: "You can choose any one of your comfortable medium.",
        },
        {
          title: "Validity - 30 Days",
          description: "Use your 60 mins in 30 days.",
        },
        {
          title: "Who can Opt ?",
          description: "Individuals, Couples, Child Therapy, Family therapy.",
        },
        {
          title: "Convenient Timings",
          description:
            "You can mutually fix the session time with your assigned therapist. Convenient Booking Schedule.",
        },
        {
          title: "Same Therapist",
          description:
            "If you opt for more sessions, the same therapist will be assigned to you.",
        },
      ],
    },
    {
      key: "2",
      cardStyle: "recommended",
      title: "4 Sessions - Rs. 3799",
      subTitle: "Balance Package - 240 Mins",
      tag: "Recommended for Starters.",
      buttonName: "Book 4 Sessions",
      points: [
        {
          title: "Total 240 Mins",
          description:
            "Via Application of your choice. Whatsapp, Skype, Zoom, Botim etc.",
        },
        {
          title: "Video/Audio/Chat",
          description: "You can choose any one of your comfortable medium.",
        },
        {
          title: "Validity - 120 Days",
          description: "Use your 240 mins in 120 days.",
        },
        {
          title: "Who can Opt ?",
          description: "Individuals, Couples, Child Therapy, Family therapy.",
        },
        {
          title: "Convenient Timings",
          description:
            "You can mutually fix the session time with your assigned therapist. Convenient Booking Schedule.",
        },
        {
          title: "Same Therapist",
          description:
            "If you opt for more sessions, the same therapist will be assigned to you.",
        },
      ],
    },
    {
      key: "3",
      cardStyle: "advance",
      title: "7+1 Sessions - Rs.6299",
      subTitle: "Evolve Package - 480 Mins",
      tag: "Recommended By Psychologists for Highest Healing. 1 Extra Free Session.",
      buttonName: "Book 8 Sessions",
      points: [
        {
          title: "Total 480 Mins",
          description:
            "Total 7+1 Session Free Via Application of your choice. Whatsapp, Skype, Zoom, Botim etc.",
        },
        {
          title: "Video/Audio/Chat",
          description: "You can choose any one of your comfortable medium.",
        },
        {
          title: "Validity - 240 Days",
          description: "Use your 480 mins in 240 days.",
        },
        {
          title: "Who can Opt ?",
          description: "Individuals, Couples, Child Therapy, Family therapy.",
        },
        {
          title: "Convenient Timings",
          description:
            "You can mutually fix the session time with your assigned therapist. Convenient Booking Schedule.",
        },
        {
          title: "Same Therapist",
          description:
            "If you opt for more sessions, the same therapist will be assigned to you.",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#f5fcfc] py-12">
      <div className="w-[85%] mx-auto flex gap-4 justify-evenly flex-wrap">
        {data.map((session) => (
          <SessionCard key={session.key} session={session} />
        ))}
      </div>
    </section>
  );
};

export { SessionDetails };
