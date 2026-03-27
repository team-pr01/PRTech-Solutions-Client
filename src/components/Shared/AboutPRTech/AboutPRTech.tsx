"use client";
import { ICONS } from "@/assets";
import AboutPRTechCard from "./AboutPRTechCard";
import AboutPRTechImages from "./AboutPRTechImages";
import { CgArrowTopRight } from "react-icons/cg";
import { easeOut, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Heading from "@/components/Reusable/Heading/Heading";

const AboutPRTech = () => {
  const headingRef = useRef(null);
  const imagesRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isImagesInView = useInView(imagesRef, { once: true, amount: 0.3 });

  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transition = { duration: 0.6, ease: easeOut };

  const missionAndVision = [
    {
      icon: ICONS.missionGif,
      title: "  Feasibility Before Code",
      description:
        " We don’t jump into development blindly. Every project starts by validating technical feasibility, scope, and trade-offs — so you avoid building the wrong thing or over-engineering too early.",
    },
    {
      icon: ICONS.visionGif,
      title: "Built for Speed, Not Just Looks",
      description:
        "Performance is treated as a requirement, not an afterthought. We design and develop systems optimized for fast load times, clean architecture, and real-world usage from day one.",
    },
    {
      icon: ICONS.disclaimerGif,
      title: "Future-Proof Architecture Planning",
      description:
        "We design systems with growth in mind — so your product can evolve from MVP to scale without costly rewrites. Clear phases, clean boundaries, and room to grow.",
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
            className="w-full"
          >
            <Heading
              heading="Why Businesses Choose PRTech for Web & App Development"
              align="left"
            />
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
                className="mt-5 w-full"
              >
                <button className="text-primary-10 font-medium text-right cursor-pointer group w-full flex justify-end">
                  {" "}
                  <p className=" hover:underline underline-offset-3">
                    Start With a Free Feasibility Review{" "}
                  </p>
                  <CgArrowTopRight className="text-base md:text-lg xl:text-2xl group-hover:rotate-45 transition-all mt-[2px] duration-500 group-hover:translate-x-2" />
                </button>
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
