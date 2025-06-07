"use client";
import { ANIMATEDICONS, IMAGES } from "@/assets";
import Image from "next/image";
import "./OurProjects.css";
import { motion } from "framer-motion";

const ProjectCard = ({
  index,
}: {
  index: number;
  cardDirection: "left" | "right";
  isIFrameView?: boolean;
}) => {
  // Animation variants
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-secondary-20/80 rounded-3xl w-full h-full border border-neutral-65/30 relative z-10 "
    >
      {/* Bg gradients */}
      {/* <div className="bg-primary-20 absolute bottom-4 left-0 z-0 size-[300px] overflow-hidden rounded-full opacity-5 blur-2xl"></div> */}
      <div className="bg-primary-20 absolute bottom-0 right-0 top-6 z-[-1] size-[200px] rounded-full opacity-20 blur-2xl"></div>

      <Image
        src={IMAGES.mockup}
        alt=""
        className="w-full rounded-t-3xl h-[430px] object-cover"
        priority={true}
      />
      <div className="p-3 xl:p-6">
        <h1 className="text-white text-2xl md:text-3xl font-bold mt-5">
        PRTech Solutions -{" "}
        <span className="font-semibold text-xl md:text-2xl text-neutral-40">
          Modern Web Design & Development Agency
        </span>
      </h1>
      <p
        className={`text-primary-50 text-sm md:text-base leading-4 md:leading-7 mt-4`}
      >
        Discover the passion, creativity, and dedication behind our
        works—crafted to deliver real value, impact, and long-lasting
        impressions.
      </p>

        {/* <div className="hidden xl:flex items-center gap-5 mt-6">
          <a href="https://mitraconsultancy.co.in/" target="_blank" className="cursor-pointer border border-white flex items-center gap-2 px-2 md:px-3 lg:px-5 py-2 md:py-3 lg:py-3 font-Inter text-white text-sm sm:text-base rounded-[30px]">
            <Image
              src={ANIMATEDICONS.linkGif}
              alt="arrow-top-right"
              className="size-4 md:size-6"
            />
            View Live
          </a>
          <GlowOnHover
            classNames="px-2 md:px-3 lg:px-5 py-2 md:py-3 lg:py-3 font-Inter text-white text-sm sm:text-base border border-primary-20"
            icon={ICONS.arrowTopRight}
            alt="tio-right-icon"
          >
            See Details
          </GlowOnHover>
        </div> */}
         <a href="https://mitraconsultancy.co.in/" target="_blank" className="cursor-pointer border border-white flex items-center gap-2 px-2 md:px-3 lg:px-5 py-2 md:py-3 lg:py-3 font-Inter text-white text-sm sm:text-base rounded-[30px] mt-6 w-fit">
            <Image
              src={ANIMATEDICONS.linkGif}
              alt="arrow-top-right"
              className="size-4 md:size-6"
            />
            View Live
          </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
