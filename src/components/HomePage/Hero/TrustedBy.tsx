import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-[18px]">
      <Image
        src={IMAGES.trustedPeople}
        alt="Trusted By"
        className=" h-[30px] md:h-11  w-[91px] md:w-23  object-contain"
      />
      <p className="text-white text-center font-rethink text-[10px] sm:text-xs md:text-[16px] not-italic font-medium leading-none tracking-[1.6px]">
        Trusted already 10.6k+
      </p>
    </div>
  );
};

export default TrustedBy;
