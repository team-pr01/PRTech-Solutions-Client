/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import "./AboutPRTech.css";

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
    <div className="flex gap-6 font-Inter group">
      <div className="flex flex-col items-center gap-2 md:gap-[27px]">
        {/* Icon */}
        <div className="bg-primary-20 size-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out group-hover:scale-150">
          <Image
            src={icon}
            width={24}
            height={24}
            className="size-8"
            alt="Section Icon"
          />
        </div>
        <div className="animated-connector-line w-[2px] h-[96px]"></div>
      </div>
      <div>
        <h1
          className={`text-white font-Inter text-xl md:text-2xl font-bold leading-7 lg:leading-[33px]`}
        >
          {title}
        </h1>
        <p className="text-xs md:text-lg leading-5 lg:leading-[28px] text-primary-50 mt-2 max-w-full md:max-w-[464px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutPRTechCard;
