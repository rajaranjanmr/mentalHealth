import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-6 justify-evenly items-center w-[85%] mx-auto py-24">
      <div className="w-[40rem] border-2 border-red-500 p-4 font-semibold">
        <h2 className="text-blue-500 mb-3">Mental Health</h2>
        <small>
          MentalHealth is the best online psychologist, psychiatrist, mental
          health therapist consultation provider in India. Start Your Free
          Online Therapy and Counselling today. Consult Top Psychologist,
          Marriage Counsellor, Child Psychologist, Relationship Expert. Book
          Your Therapy and Psychiatric Consultation now. Best Online Counsellor
          for You.<span className="text-blue-400"> © MentalHealth</span>
        </small>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-blue-700 cursor-pointer hover:bg-gray-200 p-2">
          Contact Us {`>`}
        </p>
        <p className="text-blue-700 cursor-pointer hover:bg-gray-200 p-2">
          Services {`>`}
        </p>
        <p className="text-blue-700 cursor-pointer hover:bg-gray-200 p-2">
          About Us {`>`}
        </p>
      </div>
    </footer>
  );
};

export { Footer };
