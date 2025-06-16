"use client"; // Add this directive
import { GRADIENT_BG, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Modal from "@/components/Reusable/Modal/Modal";
import Image from "next/image";
import React, { useState, useRef } from "react"; // Import useRef
import "./InAction.css";
import { easeOut, motion, useInView } from "framer-motion"; // Import motion and useInView

const InAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for animation triggers
  const headingRef = useRef(null);
  const videoRef = useRef(null);

  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 });

  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // Transition settings
  const transition = { duration: 0.8, ease: easeOut };

  return (
    // Add overflow-hidden to the main container if scale causes overflow issues
    <div className="overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full h-full py-14 overflow-hidden">      
        {/* <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className="hidden xl:block  absolute top-20 -right-10 h-[460px] w-[250px] pointer-events-none select-none z-0"
      /> */}
        <Container>
          {/* Animated Heading */}
          <motion.div
            ref={headingRef}
            variants={fadeInVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            transition={transition}
          >
            <Heading
              heading="See Us In Action"
              subHeading="Take a glimpse into our creative process and learn how we transform ideas into reality."
            />
          </motion.div>
          {/* Animated Video container */}
          <motion.div
            ref={videoRef}
            variants={scaleUpVariants}
            initial="hidden"
            animate={isVideoInView ? "visible" : "hidden"}
            transition={{ ...transition, delay: 0.2 }} // Add a slight delay
            className="relative flex flex-col items-center justify-center w-full h-full mt-10 "
          >
            <Image
              src={GRADIENT_BG.gradientInAction}
              alt="PRTech Solutions Gradient Left"
              className="hidden xl:block absolute -top-1/4  h-[600px] w-[900px] pointer-events-none select-none z-0"
            />
            <Image
              src={IMAGES.videoDummyImage}
              alt="PRTech Solutions In Action"
              className="w-full h-auto rounded-2xl z-10 opacity-70" // Increased z-index slightly
            />
            {/* video play btn */}
            <div className="absolute top-0 bottom-0 right-0 left-0 z-20 flex items-center justify-center"> {/* Increased z-index */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="video-button cursor-pointer size-10 md:size-20 flex items-center justify-center"
                aria-label="Play video" // Added aria-label for accessibility
              >
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  // width="26px"
                  className="size-5 md:size-6"
                >
                  <path
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="w-full aspect-video mx-auto">
              {/* <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full rounded"
              /> */}
            </div>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default InAction;