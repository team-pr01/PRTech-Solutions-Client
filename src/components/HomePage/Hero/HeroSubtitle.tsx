import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const HeroSubtitle = () => {
  return (
    <div className="relative mx-auto w-fit rounded-full bg-gradient-to-r from-white via-whites-20 to-whites-05 p-0.5 shadow-3xl">
      <div className=" bg-primary-60 rounded-full gap-4">
        <div className="relative rounded-full bg-whites-50 py-[10px] px-4 md:px-[30px]">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-primary-30 opacity-10 h-full rounded-full"></div>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-[9px] ">
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5"
            />
            <p className="text-white text-center font-Inter text-[8px] sm:text-[10px] md:text-xs 3xl:text-[13px] font-semibold capitalize leading-none">
              Establish business online and test potential.
            </p>
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSubtitle;
