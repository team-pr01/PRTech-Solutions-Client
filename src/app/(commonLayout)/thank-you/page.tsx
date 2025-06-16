"use client";

import { GRADIENT_BG, IMAGES } from "@/assets";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import Container from "@/components/Reusable/Container/Container";
import Modal from "@/components/Reusable/Modal/Modal";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const ThankYou = () => {
  // Refs for triggering animations
  // const headingRef = useRef(null);
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useInView hooks to detect when elements are in viewport
  // const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 });
  // const isAccordionInView = useInView(accordionRef, {
  //   once: true,
  //   amount: 0.3,
  // });

  // Animation variants
  // const slideUpVariants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: { y: 0, opacity: 1 },
  // };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // const transition = { duration: 0.6, ease: "easeOut" };
  // const slideUpVariant = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: (delay = 0) => ({
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       delay,
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   }),
  // };

  // Viewport settings
  // const viewportSettings = {
  //   once: true,
  //   amount: 0.1,
  // };

  // Calculate base delays dynamically
  // const contactInfoDelayIncrement = 0.1;
  // const followUsHeadingDelay =
  //   0.3 + (contactInfo?.length || 0) * contactInfoDelayIncrement;
  // const socialLinkDelayIncrement = 0.07;
  // const firstSocialLinkDelay = followUsHeadingDelay + 0.1;

  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen ">
      <div className="relative w-full h-full flex flex-col justify-center items-center py-20 bg-secondary-50 overflow-hidden">
        {/* Gradient Backgrounds */}
        <Image
          src={GRADIENT_BG.gradientServiceLeft}
          alt="PRTech Solutions Gradient Left"
          className="absolute bottom-20 left-0 h-[380px] w-[200px] pointer-events-none select-none z-0"
        />
        <Image
          src={GRADIENT_BG.gradientServiceRight}
          alt="PRTech Solutions Gradient Right"
          className="absolute top-20 right-0 h-[460px] w-[250px] pointer-events-none select-none z-0"
        />
        {/* Content */}
        <div className="relative z-10 w-full ">
          <Container>
            <div className="flex mt-8 flex-col items-center justify-center mb-10 ">
              {/* Animated Heading */}

              {/* <MotionConfig transition={transition}>
                <motion.div
                  ref={headingRef}
                  variants={slideUpVariants}
                  initial="hidden"
                  animate={isHeadingInView ? "visible" : "hidden"}
                  className="w-[80%] md:w-[60%] mt-30  flex flex-col items-center"
                >
                  <SubHeading heading="Thank You for your valuable time! Our industry specialist will reach out to you shortly." />
                </motion.div>
              </MotionConfig> */}
              <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 2xl:gap-16">
                {/* Animated Video container */}
                <motion.div
                  ref={videoRef}
                  variants={scaleUpVariants}
                  initial="hidden"
                  animate={isVideoInView ? "visible" : "hidden"}
                  // transition={{ ...transition, delay: 0.2 }}
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
                  <div className="absolute top-0 bottom-0 right-0 left-0 z-200 flex items-center justify-center">
                    {/* Increased z-index */}
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
               
              </div>
            </div>
          </Container>
          <Testimonials />
        </div>
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
      </div>
    </div>
  );
};

export default ThankYou;
