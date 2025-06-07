"use client";
import Link from "next/link";
import { useState } from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // [1, 3, 5, 7]
      // [1,3,4,5,7]
      // ${[1,3,4,5,7].includes(index) ? "bg-service-gradient" : "bg-faq-gradient"}
      className={`bg-faq-gradient relative  text-white h-full w-[25%] rounded-2xl p-5 md:p-8 border border-primary-70/50 group overflow-hidden`}
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
        <LuSquareArrowOutUpRight className="text-3xl text-primary-20 group-hover:text-white transition duration-300" />

        <div>
          <h1 className="text-base md:text-2xl font-bold leading-6 md:leading-8">
            Wanna transform your business with digital solutions?
          </h1>
          <p className="text-sm md:text-base leading-6 font-medium text-primary-50 group-hover:text-white transition-all duration-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            repellendus veritatis ab quia?
          </p>
        </div>

        <Link href={"/contact-us"} className="font-Inter flex justify-center items-center gap-2 rounded-full px-2 md:px-3 lg:px-[35px] py-2 md:py-3 lg:py-[15px] cursor-pointer bg-primary-20 hover:bg-primary-20/80 text-[10px] md:text-sm lg:text-base font-medium leading-[1.4] transition-all duration-300 ease-in-out active:scale-75 hover:text-white">
          Get Started Today
        </Link>
      </div>
    </div>
  );
};

export default Card;
