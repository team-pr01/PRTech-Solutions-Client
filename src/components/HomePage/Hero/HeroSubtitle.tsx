import { GRADIENT_BG, ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const HeroSubtitle = () => {
  return (
    <div className="relative mx-auto max-w-md rounded-full bg-gradient-to-r from-white via-whites-20 to-whites-05 p-0.5 shadow-lg">
      <div className=" bg-primary-60  rounded-full gap-4">
        <div className="relative rounded-full bg-whites-50  py-[10px] px-[30px]">
          <div className=" absolute -top-6  md:-top-8 -bottom-5 right-0 left-0 ">
            <Image
              src={GRADIENT_BG.gradientHero}
              alt="Gradient Card"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-[9px] ">
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5"
            />
            <p className="text-white text-center font-inter text-[10px] md:text-xs lg:text-[13px] not-italic font-medium capitalize leading-none">
              esatblish your business online and text your potential.
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
