"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";

type TServiceCardProps = {
  index: number;
  icon: StaticImageData;
  hoverIcon: StaticImageData;
  title: string;
  description: string;
  features: string[];
};
const ServiceCard = ({ index, icon, hoverIcon, title, description, features } : TServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // [1, 3, 5, 7]
      // [1,3,4,5,7]
      // ${[1,3,4,5,7].includes(index) ? "bg-service-gradient" : "bg-faq-gradient"}
      className={`bg-faq-gradient relative  text-white w-full h-full max-h-[491px] rounded-2xl p-5 md:p-8 border border-primary-70/50 group overflow-hidden`}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl z-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "var(--bg-service-gradient)",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-7">
        <div
          className={`relative transition-all duration-700 ${
            isHovered ? "size-12" : "size-11"
          }`}
        >
          {/* Default icon */}
          <Image
            className={`absolute top-0 left-0 transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            src={icon}
            alt=""
          />
          {/* Hover icon */}
          <Image
            className={`absolute top-0 left-0 transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            src={hoverIcon}
            alt=""
          />
        </div>

        <div>
          <h1 className="text-xl md:text-[28px] font-bold leading-6 md:leading-9">
            {title}
          </h1>
          <p className="text-sm md:text-base leading-6 font-medium text-primary-50 group-hover:text-white transition-all duration-700 mt-4">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {features?.map((feature: string) => (
            <div key={feature} className="flex items-center gap-4">
              <FaHandPointRight className="text-primary-20 text-lg" />
              <p className="text-sm md:text-base leading-6 font-bold">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
