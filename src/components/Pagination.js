import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Pagination(){
  return (
    <div className="flex">
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md cursor-not-allowed dark:text-gray-400"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Previous
      </a>

      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        1
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        2
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        3
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        ...
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        9
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        10
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 border border-gray-400 dark:border-gray-800 rounded-md dark:text-gray-400 hover:scale-105"
      >
        Next
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

