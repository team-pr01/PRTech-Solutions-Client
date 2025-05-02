"use client";

import Image from "next/image";
import { IMAGES } from "@/assets";

const TabMockup = ({ imageUrl = IMAGES.project3, altText = "Project screenshot on tablet" }) => {
  return (
   <div className="p-2 border border-neutral-70 rounded-xl h-[400px] max-w-[300px] shadow-xl">
     <div className="relative border-black dark:border-neutral-700 bg-neutral-800 dark:bg-neutral-700 border-[8px] w-full h-full">
      {/* Optional: Camera Dot */}
      <div className="w-2 h-2 md:w-3 md:h-3 absolute top-[10px] md:top-[14px] left-1/2 -translate-x-1/2 bg-neutral-40 dark:bg-neutral-500 rounded-full"></div>

      {/* Screen Content Area */}
      <div className="overflow-hidden w-full h-full bg-white dark:bg-black">
        <Image
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover dark:opacity-90"
          priority={true}
          width={500}
          height={680}
        />
      </div>
    </div>
   </div>
  );
};

export default TabMockup;