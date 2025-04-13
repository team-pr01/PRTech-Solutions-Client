"use client";
import React, { useState } from "react";
import { accordingData } from "./ServicesData";
import { ICONS } from "@/assets";
import Image from "next/image";

const ServiceAccordion = () => {
  const [isPlusAccording, setIsPlusAccording] = useState(0);

  const handleBorderClick = (index: number) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? 0 : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article
          key={index}
          className={` ${
            isPlusAccording === index
              ? "bg-primary-20 border-0 mb-2 rounded-3xl p-4 md:p-6 3xl:p-8 "
              : "border-b-2 border-black dark:border-white p-2 md:p-4 3xl:p-6  last:border-0 "
          }`}
        >
          <div
            className="flex gap-[6px] 3xl:gap-2 cursor-pointer items-center justify-between w-full  "
            onClick={() => handleBorderClick(index)}
          >
            <h2
              className={`font-rethink-sans text-xl md:text-[28px] 3xl:text-[35px] font-bold leading-[1] ${
                isPlusAccording === index
                  ? "text-white "
                  : "text-black dark:text-white"
              }`}
            >
              {according.title}
            </h2>

            <div
              className={`flex rounded-full justify-center items-center ${
                isPlusAccording === index ? "bg-white 3xl:size-14" : "3xl:size-14"
              }`}
            >
              <svg
                className={`${
                  isPlusAccording === index
                    ? "fill-primary-20"
                    : "fill-black dark:fill-white"
                } shrink-0 `}
                width="36"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="17"
                  width="36"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-400 ease-out bg-white ${
                    isPlusAccording === index && "!rotate-180"
                  }`}
                />
                <rect
                  y="17"
                  width="36"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-400 ease-out  ${
                    isPlusAccording === index && "!rotate-180"
                  }`}
                />
              </svg>
            </div>
          </div>
          <div
            className={`grid transition-all duration-350 overflow-hidden ease-in-out ${
              isPlusAccording === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden text-white font-inter text-ms md:text-lg 3xl:text-3xl font-medium leading-[1.4] flex flex-col gap-1 md:gap-2 3xl:gap-4">
              {according.description.map((item: string, idx: number) => (
                <span key={idx} className="flex items-center gap-2 md:gap-3 3xl:gap-4">
                  <Image src={ICONS.starPointer} alt={"PRTech Solutions"} className="size-2 md:size-4 3xl:size-6" />{" "}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ServiceAccordion;
