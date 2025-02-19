"use client";
import React, { FC, useState } from "react";

const FAQItem: FC<{
  id: number;
  question: string;
  answer: string;
}> = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="pb-6 last:pb-0">
      <div
        className="
				group
				flex flex-nowrap justify-between items-center
				transition-color duration-200"
        onClick={toggleOpen}
      >
        <div
          className={`p-3
					flex-grow
					rounded-ss-xl rounded-es-xl
					border-2 border-oblue-900 dark:border-oaccent-700 
					font-sans font-bold text-oblue-900
					group-hover:cursor-pointer group-hover:bg-oblue-100 group-hover:text-oblue-900 group-hover:dark:bg-oaccent-400 group-hover:dark:text-black
					${
            isOpen
              ? "bg-oblue-100 dark:bg-oaccent-400 dark:text-black !rounded-es-none"
              : "dark:text-white"
          }`}
        >
          {id + ". " + question}
        </div>
        <div
          className={`flex items-center self-stretch
					ml-[-2px] p-3 pb-2
					rounded-se-xl rounded-ee-xl
					border-2 border-oblue-900 dark:border-oaccent-700
					group-hover:cursor-pointer group-hover:bg-oaccent-700 group-hover:dark:bg-oaccent-700 
					${
            isOpen
              ? "bg-oaccent-900 !rounded-ee-none"
              : "bg-oblue-300 dark:bg-oaccent-700"
          }`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-white group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 stroke-oblue-900 group-hover:stroke-oblue-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`mt-[-2px]
				overflow-hidden
				rounded-es-xl rounded-ee-xl
				border-2 border-t-0 border-black
				text-oblue-900 dark:text-white
				transition-[max-height] duration-200 ease-in-out
				${
          isOpen
            ? "max-h-[500px] dark:border-oaccent-700"
            : "max-h-0 hidden dark:border-white"
        }`}
      >
        <div className="p-3 font-sans">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
