import React from "react";

const Form = () => {
  return (
    <section className="bg-[#f0f1f6] py-36">
      <form
        className="flex flex-col my-auto gap-2 border-2 border-slate-600 rounded px-8 py-6 w-72 sm:w-96 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-wrap gap-2 justify-between">
          <label htmlFor="name">Name:</label>
          <input
            className="border-2 border-slate-500 py-1 px-2"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-between">
          <label htmlFor="description">Description:</label>
          <input
            className="border-2 border-slate-500 py-1 px-2"
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-between">
          <label htmlFor="amount">Amount:</label>
          <input
            className="border-2 border-slate-500 py-1 px-2"
            type="number"
            id="amount"
            name="amount"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-between">
          <label htmlFor="email">Email:</label>
          <input
            className="border-2 border-slate-500 py-1 px-2"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <button className="px-4 py-2 mt-4 w-fit rounded mx-auto bg-green-600 text-white">
          Submit
        </button>
      </form>
    </section>
  );
};

export { Form };
