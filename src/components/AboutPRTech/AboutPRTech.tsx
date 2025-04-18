import { ICONS } from "@/assets";
import Image from "next/image";
import AboutPRTechCard from "./AboutPRTechCard";
import Link from "next/link";
import AboutPRTechImages from "./AboutPRTechImages";

const AboutPRTech = () => {
  const missionAndVision = [
    {
      icon: ICONS.mission,
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audiences.",
    },
    {
      icon: ICONS.vision,
      title: "Our Vision",
      description:
        "To empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audiences.",
    },
    {
      icon: ICONS.disclaimer,
      title: "Disclaimer",
      description:
        "PRTech Agency is a fictitious company created for demonstration purposes only. Any resemblance to real companies, past or present, is purely coincidental.",
    },
  ];
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full">
      <div className="w-full relative">
        <div className="max-w-full 2xl:max-w-[1300px] mx-auto">
          <h1
            className={`text-white font-Rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px]`}
          >
            About PRTech
          </h1>
          <div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-[70px] gap-0 xl:gap-10 2xl:gap-0">
            {/* Left side */}
            <AboutPRTechImages />

            {/* Right side */}
            <div className="flex flex-col gap-0 md:gap-3 mt-16 xl:mt-0">
              {/* Card */}
              {missionAndVision.map((item, index) => (
                <AboutPRTechCard key={index} {...item} />
              ))}
              <Link
                href={"/about-us"}
                className="bg-white border text-secondary-60 text-sm md:text-base font-medium flex items-center gap-2 px-5 md:px-10 py-2 md:py-4 rounded-[30px] w-fit mt-5"
              >
                More About Us
                <Image
                  src={ICONS.rightArrowTop2}
                  alt="arrow-top-right"
                  className="size-6"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Bg gradient */}
        <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
      </div>
    </div>
  );
};

export default AboutPRTech;
