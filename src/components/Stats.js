import React from "react";
import { UserGroupIcon } from "@heroicons/react/20/solid";

export default function Stats() {
  return (
    <div className="container py-12 px-10 md:px-0 mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between">
      <div className="w-full lg:w-1/2">
        <div className="mx-auto max-w-4xl">
          <div className="p-2 bg-indigo-600 rounded-md inline-block">
            <span>
              <UserGroupIcon className="h-6 w-6 text-white" />
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            Loved by over 5 new customers every minute
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg::mt-0">
        <div className="flex flex-col space-x-4">
          <div className="space-y-8">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>

              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  100% Open Source
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium, nobis
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>

              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  100+ Components and Elements
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Loved by 5000+ Developers
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


