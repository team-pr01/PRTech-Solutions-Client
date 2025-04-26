"use client";
import React, { useState } from "react";
import { accordingData } from "./ServicesData";
import { ICONS } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceAccordion = () => {
  // Initialize state with 0 to open the first card by default
  const [isPlusAccording, setIsPlusAccording] = useState<number | null>(0);

  const handleBorderClick = (index: number) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index)); // Toggle between index and null

  // Animation variants for sliding up
  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 }, // Start slightly lower
    visible: { y: 0, opacity: 1 },
  };

  return (
      // No animation needed on the direct parent div usually
      <div className="flex gap-3 flex-col w-full">
        {accordingData?.map((according, index) => (
          // Wrap article with motion.article
          <motion.article
            key={index}
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger animation based on index
            className={`group relative overflow-hidden
              ${
                isPlusAccording === index // Check if current index matches the open state
                  ? "bg-primary-20/90 border-0 mb-2 rounded-2xl md:rounded-3xl p-4 md:p-6 3xl:p-8"
                  : "border-b border-white/40 p-2 md:p-4 3xl:p-6 last:border-0"
              }
            `}
          >
            {/* Inner border animation bar */}
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-primary-20 transition-all duration-700 group-hover:w-full"></span>
            <div
              className="flex gap-[6px] 3xl:gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleBorderClick(index)} // Call handler on click
            >
              <h2
                className={`font-Rethink text-xl md:text-[28px] 2xl:text-[35px] font-bold leading-5 2xl:leading-12 ${
                  isPlusAccording === index ? "text-white " : "text-white"
                }`}
              >
                {according.title}
              </h2>

              <div
                className={`flex rounded-full justify-center items-center transition-colors duration-300 ${ // Added transition for bg color
                  isPlusAccording === index
                    ? "bg-white 3xl:size-14 size-10 md:size-12"
                    : "bg-transparent 2xl:size-14 size-10 md:size-12" 
                }`}
              >
                <svg
                  className={`${
                    isPlusAccording === index ? "fill-primary-20" : "fill-white"
                  } shrink-0 transition-colors duration-300`}
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    y="17"
                    width="36"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-400 ease-out ${
                      isPlusAccording === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                  <rect
                    x="0"
                    y="17"
                    width="36"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-400 ease-out ${
                      isPlusAccording === index ? "rotate-180" : "rotate-90"
                    }`}
                  />
                </svg>
              </div>
            </div>
            <div
              className={`grid transition-all duration-500 overflow-hidden ease-in-out ${
                isPlusAccording === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden text-white font-Inter text-ms md:text-lg 3xl:text-3xl leading-[1.4] flex flex-col gap-1 md:gap-2 2xl:gap-4">
                {according.description.map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className={`flex items-start gap-2 md:gap-3 3xl:gap-4`}>
                    <Image
                      src={ICONS.starPointer}
                      alt={"PRTech Solutions"}
                      className="size-2 md:size-4 3xl:size-6 mt-1 md:mt-1.5"
                    />{" "}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article> // Close motion.article
        ))}
      </div>
  );
};

export default ServiceAccordion;