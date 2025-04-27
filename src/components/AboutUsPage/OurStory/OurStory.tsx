"use client";
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./OurStory.css";

const OurStory = () => {
  // Refs for animation triggers
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isParagraphInView = useInView(paragraphRef, {
    once: true,
    amount: 0.2,
  });

  // Animation variants - Changed to slide from left
  const slideFromLeftVariants = {
    hidden: { x: -100, opacity: 0 }, // Start from left
    visible: { x: 0, opacity: 1 }, // End at original position
  };

  // Base transition
  const transition = (delay = 0) => ({
    duration: 0.6,
    ease: "easeOut",
    delay,
  });

  const variants = {
    hidden: { x: "100%", opacity: 0 }, // Start off-screen to the right and invisible
    visible: {
      x: 0, // End at the original position
      opacity: 1, // End fully visible
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeInOut", // Animation easing function
        // type: "spring", // Alternatively use a spring animation
        // stiffness: 100,
        // damping: 15
      },
    },
  };
  return (
    <div className="w-full bg-secondary-60 overflow-hidden relative py-14">
      <div className="bg-primary-20 absolute top-36 bottom-0 left-0 z-0 size-[239px] rounded-full opacity-40 blur-[150px]"></div>
      <div className="bg-primary-20 absolute bottom-0 right-0 z-0 size-[200px] rounded-full opacity-70 blur-[150px]"></div>
      <Container>
        <div className="flex flex-col xl:flex-row items-center justify-between w-full">
          {/* Left Column */}
          <div className="w-full xl:w-[55%]">
            <motion.div
              ref={headingRef}
              variants={slideFromLeftVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              transition={transition(0)}
            >
              <Heading
                heading="Our Story"
                subHeading="We use cutting-edge technologies to build scalable, high-performance solutions."
                align="left"
              />
            </motion.div>
            {/* Animated Paragraph */}
            <motion.p
              ref={paragraphRef}
              variants={slideFromLeftVariants}
              initial="hidden"
              animate={isParagraphInView ? "visible" : "hidden"}
              transition={transition(0.2)} // Delay after heading
              className="text-primary-50 text-lg font-Inter mt-6 md:mt-10 lg:mt-12 xl:mt-10 mb-10"
            >
              PixelCraft was founded in 2014 with a simple mission: to help
              businesses thrive in the digital world through innovative,
              user-centered design and development.What started as a small
              three-person team has grown into a full-service digital agency
              with over 50 talented professionals across design, development,
              marketing, and strategy.
              <br />
              <br />
              Over the years, we have partnered with startups, growing
              businesses, and Fortune 500 companies alike, helping them
              transform their ideas into powerful digital experiences that drive
              results.PixelCraft was founded in 2014 with a simple mission: to
              help businesses thrive in the digital world through innovative,
              user-centered design and development. What started as a small
              three-person team has grown into a full-service digital agency
              with over 50 talented professionals across design, development,
              marketing, and strategy.
              {/* Keep full text as in your code */}
            </motion.p>
          </div>

          {/* Right column */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
          >
            <Image
              src={IMAGES.aboutPrTech2}
              alt="About Image"
              width={450}
              height={600}
              className="w-full md:w-[450px] h-auto md:h-[600px] object-cover rounded-full"
            />
            <div className="absolute bottom-0 left-0 md:-left-24">
              <div className="bubble-blob size-[150px] md:size-[300px] border-4 border-secondary-60 overflow-hidden rounded-full">
                <Image
                  src={IMAGES.aboutPrTech2}
                  alt="About Image Bubble"
                  layout="fill"
                  objectFit="cover"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default OurStory;
