import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const AboutPRTechImages = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 relative">
      {/* Bg gradient */}
      <div className="bg-primary-20 absolute top-0 bottom-0 left-0 right-0 z-0 w-[320px] md:w-[711px] h-[300px] md:h-[613px] rounded-full opacity-40 blur-[163px]"></div>
      <div className="flex flex-row md:flex-col gap-5 z-10">
        {/* Support card */}
        <div className="bg-primary-20 rounded-2xl p-5 flex flex-col gap-3 md:gap-9 size-[160px] md:w-[343px]">
          <h2
            className={`text-white font-Rethink text-lg md:text-2xl font-bold`}
          >
            24/7 Support
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 justify-between">
            <p className="text-white text-[10px] md:text-base leading-4">
              We provide 24/7 service to our customer
            </p>
            <div className="bg-white rounded-full flex items-center justify-center size-10">
              <Image src={ICONS.rightArrowTop2} className="size-6" alt="" />
            </div>
          </div>
        </div>
        <Image
          src={IMAGES.aboutPrTech2}
          className="size-[160px] md:size-full object-cover rounded-xl"
          alt=""
        />
      </div>
      <Image
        src={IMAGES.aboutPrTech1}
        className="z-10 h-[220px] md:h-[615px] object-cover rounded-2xl"
        alt=""
      />
    </div>
  );
};

export default AboutPRTechImages;
