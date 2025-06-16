"use client"; // Add this directive for Framer Motion hooks

import { GRADIENT_BG, IMAGES } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React, { useRef } from "react"; // Import useRef
import ServiceAccordion from "./ServicesAccordion";
import Container from "@/components/Reusable/Container/Container";
import { easeOut, motion, useInView } from "framer-motion"; // Import motion and useInView

const OurServices = () => {
  // Refs for triggering animations
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const accordionRef = useRef(null);

  // useInView hooks to detect when elements are in viewport
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isAccordionInView = useInView(accordionRef, { once: true, amount: 0.3 });

  // Animation variants for sliding up
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Common transition settings
  const transition = { duration: 0.6, ease: easeOut };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center py-20 bg-secondary-50 overflow-hidden">
      {/* Gradient Backgrounds */}
      <Image
        src={GRADIENT_BG.gradientServiceLeft}
        alt="PRTech Solutions Gradient Left"
        className=" absolute bottom-20 left-0 h-[380px] w-[200px] pointer-events-none select-none z-0"
      />
      <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className=" absolute top-20 right-0 h-[460px] w-[250px] pointer-events-none select-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="flex flex-col items-center justify-center">
            {/* <Image src={ANIMATEDICONS.servicesGif} alt="" className="size-28" /> */}
            {/* Animated Heading */}
            <motion.div
              ref={headingRef}
              variants={slideUpVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              transition={transition}
              className="w-full flex flex-col items-center" // Added for layout consistency
            >
              <Heading
                heading="Our Service"
                subHeading="Smart digital solutions to grow your brand online — and beyond."
              />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-5 md:gap-9 3xl:gap-14 mt-10 md:mt-12 xl:mt-16 2xl:mt-[70px] w-full">
              {/* Animated Left Column (Image) */}
              <motion.div
                ref={imageRef}
                variants={slideUpVariants}
                initial="hidden"
                animate={isImageInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.2 }} // Slight delay for staggered effect
                className="w-full h-full" // Ensure motion div takes space
              >
                <Image
                  src={IMAGES.services}
                  alt="PRTech Solutions Services"
                  className="w-full h-full object-cover object-center rounded-3xl 3xl:rounded-3xl" // Added object-cover
                />
              </motion.div>
              {/* Animated Right Column (Accordion) */}
              <motion.div
                ref={accordionRef}
                variants={slideUpVariants}
                initial="hidden"
                animate={isAccordionInView ? "visible" : "hidden"}
                transition={{ ...transition, delay: 0.4 }} // Further delay
                className="w-full h-full" // Ensure motion div takes space
              >
                <ServiceAccordion />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurServices;