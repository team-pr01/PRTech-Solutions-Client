/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import "./OurProjects.css";
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
      transition={{ duration: 0.5, delay: index * 0.15 }}
      // 👇 PRESSED STATE
      whileTap={{
        scale: 0.98,
        boxShadow: "0 8px 20px rgba(6,160,237,0.15)",
      }}
      className="
    group relative z-10
    bg-secondary-50
    rounded-xl xl:rounded-2xl
    border border-primary-50
    font-Rethink
    transition-all duration-200 ease-out
    hover:-translate-y-[6px]
    hover:shadow-[0_20px_40px_rgba(6,160,237,0.25)]
    hover:ring-2 hover:ring-primary-20/60
  "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-6 z-[-1] size-[200px] rounded-full bg-primary-20 opacity-20 blur-2xl" />

      {/* IMAGE */}
      <div className="relative h-[200px] md:h-[330px] overflow-hidden rounded-t-xl xl:rounded-t-2xl">
        {/* Dark overlay */}
        <div
          className="
            absolute inset-0 z-10
            bg-black/30
            transition-opacity duration-200
            group-hover:opacity-0
          "
        />

        <Image
          src={project?.image}
          alt="project mockup"
          className="
            h-full w-full object-cover
            transition-transform duration-200 ease-out
            group-hover:scale-[1.03]
          "
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 xl:p-6">
        <div className="flex items-end justify-between">
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            {project?.title}
          </h3>

          <div className="rounded-full border border-white px-8 py-[7px] text-white text-sm">
            App
          </div>
        </div>

        <p className="mt-4 text-primary-50 text-sm md:text-base leading-5 md:leading-7">
          {project?.description}
        </p>

        {/* CTA */}
        <div className="mt-3 flex justify-between items-end">
          <h4 className="text-white">{project.subtle}</h4>
          <button
            className="
              group/cta flex items-center gap-2
              rounded-[30px]
              px-3 md:px-5
              font-Inter text-sm sm:text-base text-white
              transition-all duration-200
              hover:text-primary-30
            "
          >
            <span
              className="
                transition-all duration-200
                group-hover/cta:translate-x-[4px]
                group-hover/cta:font-semibold
              "
            >
              View system overview
            </span>

            <Image
              src={ANIMATEDICONS.linkGif}
              alt="arrow-top-right"
              className="
                size-4 md:size-6
                transition-all duration-200
                group-hover/cta:translate-x-[6px]
                group-hover/cta:brightness-125
              "
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
