/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ANIMATEDICONS } from "@/assets";

const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  cardDirection: "left" | "right";
  isIFrameView?: boolean;
  project: any;
}) => {
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      onClick={(e) => {
        e.preventDefault();
      }}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        bg-[#0a1222]
        rounded-2xl
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-[#06a0ed]/10
        cursor-pointer
        border border-[#06a0ed]/10
      "
    >
      {/* Image */}
      <div className="relative h-[240px] md:h-[280px] overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title || "Project"}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
          priority
        />
        
        {/* Simple overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Title and Type */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">
            {project?.title}
          </h3>
          
          <span className="text-xs text-[#bababa] whitespace-nowrap px-2 py-1 rounded-full bg-[#06a0ed]/10">
            {project?.subtle?.includes("Mobile") ? "Mobile" : 
             project?.subtle?.includes("Web") ? "Web" : "App"}
          </span>
        </div>

        {/* Description - shortened */}
        <p className="text-[#d8d8d8] text-sm leading-relaxed line-clamp-2">
          {project?.description}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-end">
          <button className="
            group/cta
            flex items-center gap-2
            text-sm text-[#bababa]
            hover:text-[#61dafb]
            transition-colors duration-200
          ">
            <span>Learn more</span>
            <Image
              src={ANIMATEDICONS.linkGif}
              alt="arrow"
              className="size-4 transition-transform group-hover/cta:translate-x-1"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;