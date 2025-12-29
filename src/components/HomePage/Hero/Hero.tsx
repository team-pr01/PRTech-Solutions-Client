"use client";
import { IMAGES } from "@/assets";
import Image from "next/image";
import HeroSubtitle from "./HeroSubtitle";
import Container from "@/components/Reusable/Container/Container";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import GlowOnHover from "@/components/AnimatedButtons/GlowOnHover/GlowOnHover";
import { easeOut, motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
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

  const transition = (delay = 0) => ({
    duration: 0.8,
    ease: easeOut,
    delay,
  });

  return (
    <div className="h-screen bg-secondary-60 w-full overflow-hidden mt-0">
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 z-0">
          {" "}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: easeOut }}
            className="relative w-full h-full"
          >
            <Image
              src={IMAGES.heroImage}
              alt="PRTech solutions hero bg"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="relative z-20 w-full md:mt-20">
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            transition={transition(0.2)}
            className="mb-4 md:mb-6 mx-auto"
          >
            <HeroSubtitle />
          </motion.div>
          <Container>
            <div className="text-center px-4">
              <motion.h1
                variants={slideFromLeft}
                initial="hidden"
                animate="visible"
                transition={transition(0.4)}
                className="text-center my-6 font-Rethink text-[28px] md:text-5xl lg:text-6xl 2xl:text-[70px] text-white font-bold leading-10 md:leading-[60px] lg:leading-[72px] text-balance"
              >
                <span className="bg-gradient-to-r from-primary-20 to-primary-15 bg-clip-text text-transparent">
                  Custom Web & App Services <br />
                </span>{" "}
                Built for Real Business Growth
              </motion.h1>
              <motion.p
                variants={slideFromBottom}
                initial="hidden"
                animate="visible"
                transition={transition(0.6)}
                className="text-white/80 text-center font-Inter text-xs md:text-md lg:text-xl 3xl:text-[22px] font-normal leading-4 md:leading-5 lg:leading-8 2xl:leading-[30px] mt-4 lg:mt-6 max-w-[543px] lg:max-w-[720px] mx-auto"
              >
                From complex custom requirements to high-performing eCommerce
                platforms, we design, build, and scale digital products that
                actually work in the real world.
              </motion.p>
              <motion.div
                variants={slideFromBottom}
                initial="hidden"
                animate="visible"
                transition={transition(0.8)}
                className=" mt-8 "
              >
                <div className="flex justify-center gap-4 md:gap-5 3xl:gap-6">
                  <Link href="/contact-us">
                    <GlowOnHover classNames="px-2 lg:px-6">
                      Free Project Feasibility Review
                    </GlowOnHover>
                  </Link>
                  <FillBgOnHover
                    classNames="hidden sm:block text-white px-2 lg:px-6"
                    onClick={() => {
                      const section = document.getElementById("our-projects");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See Systems We’ve Built
                  </FillBgOnHover>
                </div>
                <motion.p
                  variants={slideFromBottom}
                  initial="hidden"
                  animate="visible"
                  transition={transition(0.6)}
                  className="text-white/80 text-center font-Inter text-xs md:text-base lg:text-md 3xl:text-lg font-normal leading-4 md:leading-5 lg:leading-8 2xl:leading-[30px] mt-4 lg:mt-6 max-w-[543px] lg:max-w-[720px] mx-auto"
                >
                  No commitment · Clear next steps
                </motion.p>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
