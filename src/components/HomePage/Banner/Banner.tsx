/* eslint-disable react/no-unescaped-entities */
"use client";
import { ANIMATEDICONS, ICONS, IMAGES } from "@/assets";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react"; // Import useRef
import { CgArrowTopRight } from "react-icons/cg";
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import Link from "next/link";
// import { easeLinear } from 'framer-motion';

const Banner = () => {
  const words = [
    "help you understand what’s possible",
    "tell you what to avoid,",
    "help founders move forward with clarity, not guesswork",
    "turn ideas into scalable, well-thought-out systems.",
    "help you decide what to build — and how to build it right.",
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
      scale: [1, 1.05, 1], 
      transition: {
        duration: 1.5,
        ease: easeInOut,
        repeat: Infinity, // Keep pulsing
        repeatType: "mirror" as const, // Go back and forth
        delay: 0.2,
      },
    },
  };

  const subtleSlideUpFadeIn = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: easeOut } },
  };

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0, 0, 1, 1] as const },
  },
};


  const bounceIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const, // Use spring for bounce
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
            <motion.h2
              ref={heading1Ref}
              variants={subtleSlideUpFadeIn}
              initial="hidden"
              animate={isHeading1InView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }} // Add delay
              className={`text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px] text-center mt-5`}
            >
              Have an idea, but not sure how to build it the right way?
            </motion.h2>
            <motion.h3
              ref={heading1Ref}
              variants={subtleSlideUpFadeIn}
              initial="hidden"
              animate={isHeading1InView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }} // Add delay
              className={`text-white font-rethink text-xl md:text-2xl 2xl:text-[34px] font-bold leading-9 2xl:leading-[64px] text-center mt-5`}
            >
              Start with a free project feasibility review.
            </motion.h3>

            {/* Animated Typing Heading Container */}
            <motion.div
              ref={typingRef}
              variants={fadeIn}
              initial="hidden"
              animate={isTypingInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }} // Add delay
              className="h-14 sm:h-16" // Add height to prevent layout shift during typing
            >
              <h4 className="text-4xl sm:text-5xl font-bold text-center text-white mt-6">
             We help you  { " "}
                <span className="text-primary-20  border-primary-20 pr-1">
                  {/* Render typing text only when in view */}
                  {/* {isTypingInView ? displayedText : ""} */}
                decide what to build — and how to build it right.
                </span>
              </h4>
            </motion.div>

            {/* Animated Paragraph */}
            <motion.p
              ref={paragraphRef}
              variants={subtleSlideUpFadeIn}
              initial="hidden"
              animate={isParagraphInView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }} // Add delay
              className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-20 text-center max-w-[900px] mx-auto`}
            >
             Make confident decisions before committing to development or vendors.
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
              <Link href="/contact-us"><FillBgOnHover classNames="w-fit group bg-primary-20 border border-primary-20 text-white flex items-center gap-1 hover:bg-primary-20/80">
                Start Free Feasibility Review   
                <CgArrowTopRight className="text-base md:text-xl lg:text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
              </FillBgOnHover></Link>
              <Link href="/book-consultation" className=" text-white border border-white font-Inter text-xs md:text-base font-medium flex items-center gap-2 px-5 md:px-10 py-2 md:py-[14px] rounded-[30px] hover:bg-secondary-40 transition duration-300">
                <Image
                  src={ICONS.calendarGif}
                  alt="arrow-top-right"
                  className="size-4 md:size-6"
                />
                Schedule a Call
              </Link>
            </motion.div>
             <motion.p
                variants={subtleSlideUpFadeIn}
                initial="hidden"
                animate="visible"
                transition={{delay: 1}}
                className="text-white/80 text-center font-Inter text-xs md:text-base lg:text-md 3xl:text-lg font-normal leading-4 md:leading-5 lg:leading-8 2xl:leading-[30px] mt-4 lg:mt-6 max-w-[543px] lg:max-w-[720px] mx-auto"
              >
              No obligation · No sales pressure · Just Clarity
              </motion.p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;