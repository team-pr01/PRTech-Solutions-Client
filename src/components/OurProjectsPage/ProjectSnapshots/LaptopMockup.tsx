import { IMAGES } from "@/assets";
import Image from "next/image";

const LaptopMockup = () => {
  return (
    <>
      {/* Screen Bezel Part (Keep as is) */}
      <div className="border border-neutral-70 rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] mx-auto">
        <div className="relative border-black dark:border-gray-800 bg-black dark:bg-gray-800 border-[8px] rounded-t-xl">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-3 h-[5px] md:w-5 md:h-[8px] bg-gray-800"></div>
          <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
            <Image
              src={IMAGES.project1}
              alt=""
              className="w-full h-full"
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Base/Keyboard Part */}
      <div className="relative mx-auto bg-neutral-70 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </>
  );
};

export default LaptopMockup;
