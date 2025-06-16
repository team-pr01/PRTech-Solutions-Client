/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { ANIMATEDICONS, IMAGES } from "@/assets";
import Image from "next/image";
import "./OurProjects.css";
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  cardDirection: "left" | "right";
  isIFrameView?: boolean;
  project : any
}) => {
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
      className="bg-secondary-20/80 rounded-xl xl:rounded-2xl w-full h-full border border-neutral-65/30 relative z-10"
    >
      <div className="bg-primary-20 absolute bottom-0 right-0 top-6 z-[-1] size-[200px] rounded-full opacity-20 blur-2xl"></div>

      {/* Swiper Image Carousel */}
      <div className="relative h-[300px] md:h-[430px]">
        {/* <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="rounded-t-xl xl:rounded-t-2xl h-full"
        >
          {[1, 2, 3, 4, 5].map((img, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <Image
                src={IMAGES.mockup}
                alt={`project mockup ${idx + 1}`}
                className="w-full h-full object-cover rounded-t-xl xl:rounded-t-2xl"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Image
          src={project?.image}
          alt={`project mockup`}
          className="w-full h-full object-cover rounded-t-xl xl:rounded-t-2xl"
          priority
        />
      </div>

      <div className="p-3 xl:p-6">
        <h1 className="text-white text-2xl md:text-3xl font-bold mt-5">
          {project?.title} -{" "}
          <span className="font-semibold text-xl md:text-2xl text-neutral-40">
            {project?.subtitle}
          </span>
        </h1>
        <p className="text-primary-50 text-sm md:text-base leading-4 md:leading-7 mt-4">
          {project?.description}
        </p>

        {/* <a
          href="https://mitraconsultancy.co.in/"
          target="_blank"
          className="cursor-pointer border border-white flex items-center gap-2 px-2 md:px-3 lg:px-5 py-2 md:py-3 lg:py-3 font-Inter text-white text-sm sm:text-base rounded-[30px] mt-6 w-fit"
        >
          <Image
            src={ANIMATEDICONS.linkGif}
            alt="arrow-top-right"
            className="size-4 md:size-6"
          />
          View Live
        </a> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
