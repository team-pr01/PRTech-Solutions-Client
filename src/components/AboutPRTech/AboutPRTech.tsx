import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Container from "../Reusable/Container/Container";
import AboutPRTechCard from "./AboutPRTechCard";
import Link from "next/link";

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
      <Container>
        <h1
          className={`text-white font-Rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px]`}
        >
          About PRTech
        </h1>
        <div className="flex justify-between mt-[70px]">
          {/* Left side */}
          <div className="flex gap-6 relative">
            {/* Bg gradient */}
            <div className="bg-primary-20 absolute top-0 bottom-0 left-0 right-0 z-0 w-[711px] h-[613px] rounded-full opacity-40 blur-[163px]"></div>
            <div className="flex flex-col gap-5 z-10">
              {/* Support card */}
              <div className="bg-primary-20 rounded-2xl p-5 flex flex-col gap-9 w-[343px]">
                <h2
                  className={`text-white font-Rethink text-xl lg:text-2xl font-bold`}
                >
                  24/7 Support
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-white">
                    We provide 24/7 service to our customer
                  </p>
                  <div className="bg-white rounded-full size-6 p-4">
                    <Image
                      src={ICONS.rightArrowTop2}
                      className="size-6"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <Image src={IMAGES.aboutPrTech2} className="" alt="" />
            </div>
            <Image src={IMAGES.aboutPrTech1} className="z-10 h-[615px]" alt="" />
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-3">
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
      </Container>
      <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
    </div>
    </div>
  );
};

export default AboutPRTech;
