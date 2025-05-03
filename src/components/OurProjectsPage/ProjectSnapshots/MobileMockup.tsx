"use client";
import Image from "next/image";
import { IMAGES } from "@/assets";

const MobileMockup = ({
  imageUrl = IMAGES.project2,
  altText = "Project screenshot on iPhone",
}) => {
  return (
    <div className="border border-neutral-70 rounded-xl h-[380px] max-w-[200px] shadow-xl mt-10">
      <div className="relative border-black dark:border-neutral-800 bg-black dark:bg-neutral-800 border-[8px] w-full h-full rounded-xl">
        {/* Inner screen container */}
        <div className="w-full h-full overflow-hidden bg-white dark:bg-black">
          <Image
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover dark:opacity-95"
            priority={true}
            width={320}
            height={650}
          />
        </div>

        {/* Dynamic Island / Notch */}
        <div className="absolute top-[0px] left-1/2 -translate-x-1/2 h-4 w-28 md:w-36 bg-black rounded-b-lg md:rounded-b-xl"></div>

        {/* Optional: Side Button Indentations (subtle) */}
        <div className="absolute left-[-9px] md:left-[-11px] top-[80px] md:top-[100px] h-10 md:h-12 w-1 md:w-[3px] bg-black dark:bg-neutral-800 rounded-l-lg"></div>
        <div className="absolute left-[-9px] md:left-[-11px] top-[135px] md:top-[160px] h-16 md:h-20 w-1 md:w-[3px] bg-black dark:bg-neutral-800 rounded-l-lg"></div>
        <div className="absolute right-[-9px] md:right-[-11px] top-[110px] md:top-[140px] h-16 md:h-20 w-1 md:w-[3px] bg-black dark:bg-neutral-800 rounded-r-lg"></div>
      </div>
    </div>
  );
};

export default MobileMockup;
