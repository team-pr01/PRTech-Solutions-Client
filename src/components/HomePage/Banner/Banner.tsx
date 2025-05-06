/* eslint-disable react/no-unescaped-entities */
"use client";
import { ANIMATEDICONS, ICONS, IMAGES } from "@/assets";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react"; // Import useRef
import { CgArrowTopRight } from "react-icons/cg";
import { motion, useInView } from "framer-motion"; // Import motion and hooks

const Banner = () => {
  const words = [
    "build websites",
    "develop apps",
    "create digital solutions",
    "design user experiences",
    "boost your brand",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Refs for animations
  const iconRef = useRef(null);
  const heading1Ref = useRef(null);
  const typingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  // Check if elements are in view
  const isIconInView = useInView(iconRef, { once: true, amount: 0.5 });
  const isHeading1InView = useInView(heading1Ref, { once: true, amount: 0.3 });
  const isTypingInView = useInView(typingRef, { once: true, amount: 0.3 });
  const isParagraphInView = useInView(paragraphRef, { once: true, amount: 0.2 });
  const areButtonsInView = useInView(buttonsRef, { once: true, amount: 0.2 });

  // Animation Variants
  const pulseVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: [1, 1.05, 1], // Pulse effect
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity, // Keep pulsing
        repeatType: "mirror" as const, // Go back and forth
        delay: 0.2,
      },
    },
  };

  const subtleSlideUpFadeIn = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "linear" } },
  };

  const bounceIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring", // Use spring for bounce
        stiffness: 200,
        damping: 15,
      },
    },
  };


  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    // Only run typing effect if the element is in view
    if (isTypingInView) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );

        if (!isDeleting && displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
        // Optionally reset when out of view
         setDisplayedText("");
         setIsDeleting(false);
         setCurrentWordIndex(0);
    }
  // Add isTypingInView to dependencies
  }, [displayedText, isDeleting, isTypingInView, currentWordIndex, words]);

  return (
    // Add overflow-hidden to the main container
    <div className="bg-secondary-60 w-full overflow-hidden">
      <div className="relative flex h-full flex-col items-center justify-center">
        <Image
          className="absolute right-0 top-0 h-full w-full z-0"
          src={IMAGES.bannerBg}
          alt=""
        />
        <Image
          className="absolute right-0 top-0 left-0 bottom-0 h-full mx-auto z-0 hidden md:block"
          src={IMAGES.bannerCircle}
          alt=""
        />
        <Container>
          {/* Apply relative z-10 to ensure content is above background */}
          <div className="relative z-10 py-10 md:py-14 xl:py-40 flex flex-col items-center"> {/* Added flex and items-center */}
            {/* Animated Icon */}
            <motion.div
              ref={iconRef}
              variants={pulseVariant}
              initial="hidden"
              animate={isIconInView ? "visible" : "hidden"}
              // No separate transition needed, it's in the variant
            >
              <Image src={ANIMATEDICONS.banner} alt="" className="size-40 justify-self-center" />
            </motion.div>

            {/* Animated Heading 1 */}
            <motion.h1
              ref={heading1Ref}
              variants={subtleSlideUpFadeIn}
              initial="hidden"
              animate={isHeading1InView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }} // Add delay
              className={`text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px] text-center mt-5`}
            >
              Ready to transform your digital presence?
            </motion.h1>

            {/* Animated Typing Heading Container */}
            <motion.div
              ref={typingRef}
              variants={fadeIn}
              initial="hidden"
              animate={isTypingInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }} // Add delay
              className="h-14 sm:h-16" // Add height to prevent layout shift during typing
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mt-6">
                We{" "}
                <span className="text-primary-20 border-r-2 border-primary-20 pr-1">
                  {/* Render typing text only when in view */}
                  {isTypingInView ? displayedText : ""}
                </span>
              </h1>
            </motion.div>

            {/* Animated Paragraph */}
            <motion.p
              ref={paragraphRef}
              variants={subtleSlideUpFadeIn}
              initial="hidden"
              animate={isParagraphInView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }} // Add delay
              className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-6 text-center max-w-[900px] mx-auto`}
            >
              Let’s discuss how we can help you achieve your business goals with
              our expertise — from tailored strategies to innovative solutions,
              we’re here to drive your success every step of the way.
            </motion.p>

            {/* Animated Buttons Container */}
            <motion.div
              ref={buttonsRef}
              variants={bounceIn} // Use bounceIn for the container
              initial="hidden"
              animate={areButtonsInView ? "visible" : "hidden"}
              transition={{ delay: 0.9 }} // Add delay for the container
              className="flex items-center justify-center gap-5 mt-10"
            >
              {/* Individual buttons don't need separate animation if container bounces */}
              <FillBgOnHover classNames="w-fit group bg-primary-20 border border-primary-20 text-white flex items-center gap-1 hover:bg-primary-20/80">
                More About Us
                <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
              </FillBgOnHover>
              <button className=" text-white border border-white font-Inter text-xs md:text-base font-medium flex items-center gap-2 px-5 md:px-10 py-2 md:py-[14px] rounded-[30px]">
                <Image
                  src={ICONS.calendarGif}
                  alt="arrow-top-right"
                  className="size-4 md:size-6"
                />
                Schedule a Call
              </button>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;