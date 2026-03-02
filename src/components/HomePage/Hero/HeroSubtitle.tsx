import { ICONS } from "@/assets";
import Image from "next/image";
import "./HeroSubtitle.css"

const HeroSubtitle = () => {
  return (
    <div className="bg-gradient-to-b from-primary-60 to-secondary-20 relative mx-auto w-fit rounded-full shadow-3xl card-wrapper shadow-3xl">
      <div className="bg-transparent inset-0 z-[2] relative w-fit rounded-full gap-4 p-0.5">
        <div className="relative z-[2] rounded-full bg-whites-50 py-[10px] px-4 md:px-[30px]">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-primary-30 opacity-10 h-full rounded-full"></div>
          {/* Content */}
          <div className="flex flex-row items-center justify-center gap-2 md:gap-[9px] w-full">
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5 animate-pulse"
            />
            <p className="text-white text-center font-Inter text-[10px] md:text-xs 3xl:text-[13px] font-medium capitalize leading-none">
              idea{"  "}  •  implementation {"  "} •  impact
            </p>
            <Image
              src={ICONS.stars}
              alt="PRTech Solutions Logo"
              className="size-[15px] md:size-5 animate-pulse scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSubtitle;
