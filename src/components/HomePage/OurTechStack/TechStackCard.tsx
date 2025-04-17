import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const TechStackCard = () => {
  return (
    <div className="relative bg-neutral-85/50 border border-primary-40 rounded-lg flex flex-col gap-0 lg:gap-2 items-center justify-center w-[70px] lg:w-[150px] h-[70px] lg:h-[140px]">
      <Image
        className="absolute right-0 top-0 h-full w-full opacity-60"
        src={IMAGES.techStackGradientBg1}
        alt=""
      />
      <Image
        className="absolute left-0 bottom-0 h-full w-full opacity-60"
        src={IMAGES.techStackGradientBg2}
        alt=""
      />
      <Image src={ICONS.django} alt={``} className="size-8 lg:size-12" />
      <h1 className="text-white text-[8px] lg:text-sm font-bold leading-5">Django</h1>
    </div>
  );
};

export default TechStackCard;
