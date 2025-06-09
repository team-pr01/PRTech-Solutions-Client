"use client"; // Add this directive
import Heading from "@/components/Reusable/Heading/Heading";
import Container from "@/components/Reusable/Container/Container";
import TechStackCard from "./TechStackCard";
import MarqueeColumn from "./MarqueeColumn";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Link from "next/link";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import { CgArrowTopRight } from "react-icons/cg";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { androidTechnologies, tools, webTechnologies } from "./techStack.data";

const OurTechStack = () => {

  // Refs for animation triggers
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isParagraphInView = useInView(paragraphRef, { once: true, amount: 0.2 });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.2 });

  // Animation variants - Changed to slide from left
  const slideFromLeftVariants = {
    hidden: { x: -100, opacity: 0 }, // Start from left
    visible: { x: 0, opacity: 1 },   // End at original position
  };

  // Base transition
  const transition = (delay = 0) => ({
    duration: 0.6,
    ease: "easeOut",
    delay,
  });


  return (
    <div className="w-full bg-secondary-60 overflow-hidden relative">
      <div className="bg-primary-20 absolute top-36 bottom-0 left-0 z-0 size-[239px] rounded-full opacity-40 blur-[150px]"></div>
      <Image
        src={IMAGES.techStackShadow}
        alt=""
        className="hidden xl:block absolute top-0 right-[270px] w-[550px] h-[150px] z-10"
      />
      <Image
        src={IMAGES.techStackShadow}
        alt=""
        className="hidden xl:block absolute bottom-0 right-[270px] w-[550px] h-[150px] z-10 rotate-180"
      />
      <Container>
        <div className="flex flex-col xl:flex-row items-center gap-0 md:gap-12 xl:gap-24">
          {/* Left Column */}
          <div className="w-full xl:w-[55%] py-14">
            {/* <Image src={ANIMATEDICONS.techStack} alt="" className="size-28" /> */}
            {/* Animated Heading */}
            <motion.div
              ref={headingRef}
              variants={slideFromLeftVariants} // Use slide from left variant
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              transition={transition(0)}
            >
              <Heading
                heading="Our Tech Stack"
                subHeading="We use cutting-edge technologies to build scalable, high-performance solutions."
                align="left"
              />
            </motion.div>
            {/* Animated Paragraph */}
            <motion.p
              ref={paragraphRef}
              variants={slideFromLeftVariants} // Use slide from left variant
              initial="hidden"
              animate={isParagraphInView ? "visible" : "hidden"}
              transition={transition(0.2)} // Delay after heading
              className="text-primary-50 text-lg font-Inter mt-6 md:mt-10 lg:mt-12 xl:mt-10 mb-10"
            >
             At PRtech Solutions, we use a modern and reliable tech stack to build scalable, secure, and high-performance digital products. From intuitive front-end interfaces with React and Next.js to robust back-end systems using Node.js and Express, every tool is chosen to match your project’s unique needs.
              <br />
              <br />
             We stay updated with the latest trends and best practices, ensuring our solutions are flexible, efficient, and future-ready. With the right mix of databases, APIs, and cloud services, we deliver products that perform seamlessly and grow with your business.
              {/* Keep full text as in your code */}
            </motion.p>
            {/* Animated Button */}
            <motion.div
               ref={buttonRef}
               variants={slideFromLeftVariants} // Use slide from left variant
               initial="hidden"
               animate={isButtonInView ? "visible" : "hidden"}
               transition={transition(0.4)} // Delay after paragraph
               className="w-fit" // Added w-fit to the motion div
            >
              <Link href={"/about-us"} className="">
                <FillBgOnHover classNames="w-fit group bg-white text-secondary-60 group-hover:text-white flex items-center gap-1">
                  More About Us
                  <CgArrowTopRight className="text-base md:text-xl lg:text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
                </FillBgOnHover>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Marquees - NO ANIMATION APPLIED */}
          <div className="w-full block xl:hidden">
            <Marquee speed={70} loop={0} direction="left">
              {webTechnologies.map((item, i) => (
                <div key={`up-${i}`} className="mr-7">
                  <TechStackCard {...item} />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="w-full block xl:hidden mt-5">
            <Marquee speed={60} loop={0} direction="right">
              {androidTechnologies.map((item, i) => (
                <div key={`up-${i}`} className="mr-7">
                  <TechStackCard {...item} />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="w-full block xl:hidden mt-5 pb-5">
            <Marquee speed={90} loop={0} direction="left">
              {tools.map((item, i) => (
                <div key={`up-${i}`} className="mr-7">
                  <TechStackCard {...item} />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Right Column - Marquee Tech Cards - NO ANIMATION APPLIED */}
          <div className="w-full xl:w-[42%] xl:flex gap-4 xl:gap-10 hidden">
            <MarqueeColumn direction="up">
              {webTechnologies.map((item, i) => (
                <TechStackCard key={`up-${i}`} {...item} />
              ))}
            </MarqueeColumn>
            <MarqueeColumn direction="down" height="h-[680px]">
              {androidTechnologies.map((item, i) => (
                <TechStackCard key={`down-${i}`} {...item} />
              ))}
            </MarqueeColumn>
            <MarqueeColumn direction="up">
              {tools.map((item, i) => (
                <TechStackCard key={`up2-${i}`} {...item} />
              ))}
            </MarqueeColumn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTechStack;