import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const HeroSubtitle = () => {
  return (
    <div className="bg-gradient-to-b from-primary-60 to-secondary-20 relative mx-auto w-full sm:w-fit rounded-full shadow-3xl card-wrapper shadow-3xl">
      <div className="bg-transparent inset-0 z-[2] relative w-full sm:w-fit rounded-full gap-4 p-0.5">
        <div className="relative z-[2] rounded-full bg-whites-50 py-[10px] px-4 md:px-[30px]">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-primary-30 opacity-10 h-full rounded-full"></div>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-[9px] w-full">
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5 animate-pulse"
            />
            <p className="text-white text-center font-Inter text-[10px] md:text-xs 3xl:text-[13px] font-semibold capitalize leading-none">
              Establish business online and test potential.
            </p>
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5 animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSubtitle;

// <div className="relative mx-auto w-full sm:w-fit rounded-full p-0.5 shadow-3xl card-wrapper overflow-hidden">
// {/* Animated gradient background */}
// <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-white/05 animate-gradient-border rounded-full"></div>

// <div className="relative bg-primary-60 w-full sm:w-fit rounded-full gap-4">
//   <div className="relative rounded-full bg-whites-50 py-[10px] px-4 md:px-[30px]">
//     <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-primary-30 opacity-10 h-full rounded-full"></div>
//     <div className="flex flex-row items-center justify-center gap-2 md:gap-[9px] w-full">
//       <Image
//         src={ICONS.stars}
//         alt="PRTech Solutions Logo"
//         className="size-[15px] md:size-5"
//       />
//       <p className="text-white text-center font-Inter text-[10px] md:text-xs 3xl:text-[13px] font-semibold capitalize leading-none">
//         Establish business online and test potential.
//       </p>
//       <Image
//         src={ICONS.stars}
//         alt="PRTech Solutions Logo"
//         className="size-[15px] md:size-5"
//       />
//     </div>
//   </div>
// </div>
// </div>
