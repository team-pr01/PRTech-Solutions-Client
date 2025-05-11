"use client";
import { ICONS } from "@/assets";
import AboutPRTechCard from "./AboutPRTechCard";
import Link from "next/link";
import AboutPRTechImages from "./AboutPRTechImages";
import { CgArrowTopRight } from "react-icons/cg";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import { usePathname } from "next/navigation";

const AboutPRTech = () => {
  const pathname = usePathname();

  const headingRef = useRef(null);
  const imagesRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isImagesInView = useInView(imagesRef, { once: true, amount: 0.3 });

  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transition = { duration: 0.6, ease: "easeOut" };

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

  // Calculate delay for the button based on the number of cards
  const buttonDelay = 3 * 0.5;

  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full overflow-hidden">
      <div className="w-full relative">
        <div className="max-w-full 2xl:max-w-[1300px] mx-auto px-5 2xl:px-0">
          <motion.div
            ref={headingRef}
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            transition={transition}
            className="flex items-center gap-10 w-fit"
          >
            <h1
              className={`text-white font-Rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px]`}
            >
              About PRTech
            </h1>
            {/* <Image src={ANIMATEDICONS.aboutUsGif} alt="" className="size-28 absolute -right-32 -top-12" /> */}
          </motion.div>
          <div className="flex flex-col xl:flex-row justify-between mt-6 md:mt-[70px] gap-0 xl:gap-10 2xl:gap-0">
            {/* Left side */}
            <motion.div
              ref={imagesRef}
              variants={slideUpVariants}
              initial="hidden"
              animate={isImagesInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.2 }}
              className="w-full xl:w-auto"
            >
              <AboutPRTechImages />
            </motion.div>

            {/* Right side */}
            <div className="flex flex-col gap-0 md:gap-3 mt-16 xl:mt-0">
              {/* Card */}
              {missionAndVision.map((item, index) => (
                <AboutPRTechCard key={index} index={index} {...item} />
              ))}
              {/* Animated Link */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: buttonDelay }}
                className="mt-5 w-fit"
              >
                <Link
                  href={pathname === "/about-us" ? "/contact-us" : "/about-us"}
                >
                  <FillBgOnHover classNames="w-fit group bg-white text-secondary-60 group-hover:text-white flex items-center gap-1">
                    {pathname === "/about-us" ? "Contact Us" : "More About Us"}

                    <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
                  </FillBgOnHover>
                </Link>
              </motion.div>
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
