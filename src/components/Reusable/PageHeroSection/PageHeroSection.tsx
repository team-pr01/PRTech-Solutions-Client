"use client";

import { IMAGES } from "@/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Container from "../Container/Container";
import { easeOut, motion } from "framer-motion";

type TPageHeroSection = {
  heading: string;
  description: string;
  backgroundImage?: StaticImageData;
};

const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const transition = (delay = 0) => ({
  duration: 0.8,
  ease: easeOut,
  delay,
});

const PageHeroSection: React.FC<TPageHeroSection> = ({
  heading,
  description,
  backgroundImage = IMAGES.heroBgImage2,
}) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt={heading || "Page hero background"}
            fill
            className="object-cover w-full min-h-[400px] xl:h-full"
            priority
          />
        </div>
      </motion.div>

      <div className="relative min-h-[400px] xl:h-auto flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center absolute top-10 bottom-0 right-0 left-0 h-full">
            <motion.h1
              variants={slideFromLeft}
              initial="hidden"
              animate="visible"
              transition={transition(0.2)}
              className="text-white font-rethink text-lg md:text-2xl lg:text-4xl 2xl:text-[50px] font-bold leading-9 2xl:leading-[64px] max-w-3xl z-10 text-center"
            >
              {heading}
            </motion.h1>
            <motion.p
              variants={slideFromBottom}
              initial="hidden"
              animate="visible"
              transition={transition(0.4)}
              className="text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 text-center z-10 mt-3 xl:mt-5 max-w-[700px]"
            >
              {description}
            </motion.p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageHeroSection;
