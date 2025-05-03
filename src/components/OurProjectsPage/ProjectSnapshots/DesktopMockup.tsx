import { IMAGES } from "@/assets";
import Image from "next/image";

const DesktopMockup = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Monitor Screen Part */}
      <div className="border border-neutral-70 rounded-xl max-w-[580px] w-full md:max-w-[720px] h-[340px] md:h-[420px] z-10">
        <div className="relative border-neutral-800 bg-neutral-800 border-[8px] rounded-xl w-full h-full">
          <div className="rounded-sm overflow-hidden w-full h-full bg-white dark:bg-neutral-900">
            <Image
              // Replace with your actual image source for the desktop screen
              src={IMAGES.project1}
              alt="Desktop screen content"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Monitor Stand Part */}
      <div className="flex flex-col items-center">
        {/* Stand Neck */}
        <div className="w-10 md:w-24 h-12 md:h-16 bg-neutral-800 -mt-[1px]"></div>
        {/* Stand Base */}
        <div className="w-48 md:w-56 h-3 md:h-4 bg-neutral-70 rounded-b-md rounded-t-sm"></div>
      </div>
    </div>
  );
};

export default DesktopMockup;
