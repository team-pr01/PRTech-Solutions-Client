import { ICONS } from "@/assets";
import AboutPRTechCard from "./AboutPRTechCard";
import Link from "next/link";
import AboutPRTechImages from "./AboutPRTechImages";
import FillBgOnHover from "../AnimatedButtons/FillBgOnHover/FillBgOnHover";
import { CgArrowTopRight } from "react-icons/cg";

const AboutPRTech = () => {
  const missionAndVision = [
    {
      icon: ICONS.missionGif,
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audiences.",
    },
    {
      icon: ICONS.visionGif,
      title: "Our Vision",
      description:
        "To empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audiences.",
    },
    {
      icon: ICONS.disclaimerGif,
      title: "Disclaimer",
      description:
        "PRTech Agency is a fictitious company created for demonstration purposes only. Any resemblance to real companies, past or present, is purely coincidental.",
    },
  ];
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full">
      <div className="w-full relative">
        <div className="max-w-full 2xl:max-w-[1300px] mx-auto px-5 2xl:px-0">
          <h1
            className={`text-white font-Rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px]`}
          >
            About PRTech
          </h1>
          <div className="flex flex-col xl:flex-row justify-between mt-6 md:mt-[70px] gap-0 xl:gap-10 2xl:gap-0">
            {/* Left side */}
            <AboutPRTechImages />

            {/* Right side */}
            <div className="flex flex-col gap-0 md:gap-3 mt-16 xl:mt-0">
              {/* Card */}
              {missionAndVision.map((item, index) => (
                <AboutPRTechCard key={index} {...item} />
              ))}
              <Link href={"/about-us"} className="mt-5">
                <FillBgOnHover classNames="w-fit group bg-white text-secondary-60 group-hover:text-white flex items-center gap-1">
                  More About Us
                  <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
                </FillBgOnHover>
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
