"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import HeroSubtitle from "./HeroSubtitle";
import Container from "@/components/Reusable/Container/Container";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import GlowOnHover from "@/components/AnimatedButtons/GlowOnHover/GlowOnHover";
import { motion } from "framer-motion";

const Hero = () => {
  // Variants for different animations
  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideFromBottom = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Base transition - CORRECTED
  const transition = (delay = 0) => ({
    duration: 0.8,
    // Use a standard easing keyword like "easeOut" or "easeInOut"
    // Or provide a VALID cubic-bezier array e.g., [0.25, 0.1, 0.25, 1.0]
    ease: "easeOut", // Changed from the invalid array
    delay,
  });

  return (
    // Add overflow-hidden to the main container
    <div className="h-[600px] md:h-[700px] lg:h-[800px] 2xl:h-[900px] bg-secondary-60 w-full overflow-hidden">
      {/* Use relative positioning on the main wrapper */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0"> {/* z-0 should be below z-20 */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            // The parent needs relative positioning for fill to work correctly
            className="relative w-full h-full"
          >
            <Image
              src={IMAGES.heroImage}
              alt="PRTech solutions hero bg"
              fill // Fill requires the parent (motion.div) to have position: relative
              className="object-cover" // Ensure object-cover is applied
              priority
            />
          </motion.div>
        </div>

        {/* Hero Content Container */}
        {/* Increased z-index to ensure it's above the background */}
        <div className="relative z-20 w-full">
          <Container>
             {/* Removed redundant positioning/margin, rely on Container and flex alignment */}
            <div className="text-center px-4">
              {/* Hero Subtitle - Slide from Right */}
              <motion.div
                variants={slideFromRight}
                initial="hidden"
                animate="visible"
                transition={transition(0.2)}
                className="mb-4 md:mb-6" // Add margin bottom if needed for spacing
              >
                <HeroSubtitle />
              </motion.div>
              {/* Hero Title - Slide from Left */}
              <motion.h1
                variants={slideFromLeft}
                initial="hidden"
                animate="visible"
                transition={transition(0.4)}
                className="text-center font-Rethink text-[40px] md:text-5xl lg:text-7xl 2xl:text-[96px] text-white font-bold leading-10 md:leading-[60px] lg:leading-[80px] 2xl:leading-[100px] text-balance"
              >
                <span className="bg-gradient-to-r from-primary-20 to-primary-15 bg-clip-text text-transparent">
                  We craft digital
                </span>{" "}
                experiences that inspire
              </motion.h1>
              {/* Description - Slide from Bottom */}
              <motion.p
                variants={slideFromBottom}
                initial="hidden"
                animate="visible"
                transition={transition(0.6)}
                className="text-white/80 text-center font-Inter text-xs md:text-md lg:text-xl 3xl:text-[22px] font-normal leading-4 md:leading-5 lg:leading-8 2xl:leading-[30px] mt-4 lg:mt-6 max-w-[343px] lg:max-w-[520px] mx-auto"
              >
                Award-winning digital agency helping brands stand out in the digital
                landscape.
              </motion.p>
              {/* Buttons - Slide from Bottom */}
              <motion.div
                variants={slideFromBottom}
                initial="hidden"
                animate="visible"
                transition={transition(0.8)}
                className="flex justify-center gap-4 md:gap-5 3xl:gap-6 mt-8"
              >
                <GlowOnHover icon={ICONS.arrowTopRight} alt="tio-right-icon">Get Started</GlowOnHover>
                <FillBgOnHover classNames="text-white">View Our Work</FillBgOnHover>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;