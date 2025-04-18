/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type TAboutPRTechCardProps = {
  icon: any;
  title: string;
  description: string;
};
const AboutPRTechCard: React.FC<TAboutPRTechCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-6">
      {/* Icon */}
      <div className="flex flex-col items-center gap-[27px]">
        <div className="bg-primary-20 size-11 rounded-full flex items-center justify-center">
          <Image src={icon} className="" alt="size-6" />
        </div>
        <div className="bg-about-bg-gradient w-[2px] h-[96px]"></div>
      </div>
      <div>
        <h1
          className={`text-white font-Inter text-xl lg:text-2xl font-bold leading-7 lg:leading-[33px]`}
        >
          {title}
        </h1>
        <p className="text-xs lg:text-xl leading-5 lg:leading-[32px] text-primary-50 mt-2 max-w-[464px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutPRTechCard;
