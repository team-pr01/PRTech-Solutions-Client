"use client";
import React, { useEffect, useState } from "react";
import { accordingData } from "./ServicesData";
import { ICONS } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceAccordion = () => {
  const [iconWidth, setIconWidth] = useState(26);
  const [iconY, setIconY] = useState(12);

  useEffect(() => {
    const updateSize = () => {
      const isMobile = window.innerWidth < 764;

      setIconWidth(isMobile ? 19 : 26);
      setIconY(isMobile ? 8 : 12);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const [isPlusAccording, setIsPlusAccording] = useState<number | null>(0);

  const handleBorderClick = (index: number) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));
  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <motion.article
          key={index}
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`group relative overflow-hidden
              ${
                isPlusAccording === index
                  ? "bg-primary-20/90 border-0 mb-2 rounded-2xl md:rounded-3xl p-4 md:p-6 3xl:p-8"
                  : "border-b border-white/40 p-2 3xl:p-6 last:border-0"
              }
            `}
        >
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-primary-20 transition-all duration-700 group-hover:w-full"></span>
          <div
            className="flex gap-[6px] 3xl:gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleBorderClick(index)}
          >
            <h2
              className={`font-Rethink  font-bold leading-5 2xl:leading-12 ${
                isPlusAccording === index ? "text-white text-xl md:text-[28px] 2xl:text-[35px]"  : "text-white text-lg md:text-[22px] 2xl:text-[30px]"
              }`}
            >
              {according.title}
            </h2>

            <div
              className={`flex rounded-full justify-center items-center transition-colors duration-300 ${
                // Added transition for bg color
                isPlusAccording === index
                  ? "bg-white  size-8 lg:size-9"
                  : "bg-transparent size-8 lg:size-9"
              }`}
            >
              <svg
                width={iconWidth}
                height={iconWidth}
                viewBox={`0 0 ${iconWidth} ${iconWidth}`}
                className={`${
                  isPlusAccording === index ? "fill-primary-20" : "fill-white"
                } shrink-0 transition-colors duration-300`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y={iconY}
                  width={iconWidth}
                  height="2"
                  rx="1"
                  className={`origin-center transition-transform duration-300 ${
                    isPlusAccording === index ? "rotate-180" : "rotate-0"
                  }`}
                />

                <rect
                  x="0"
                  y={iconY}
                  width={iconWidth}
                  height="2"
                  rx="1"
                  className={`origin-center transition-transform duration-300 ${
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
                  className={`flex items-start gap-2 md:gap-3 3xl:gap-4`}
                >
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
