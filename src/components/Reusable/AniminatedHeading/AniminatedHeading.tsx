/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedHeadingProps = {
  staticTextBefore?: string;
  loopTexts?: string[];
  staticTextAfter?: string;
  className?: string;
  highlightClassName?: string;
  variants?: any;
  transition?: any;
  loopInterval?: number;
};

const defaultVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition = {
  duration: 0.7,
  ease: "easeOut",
};

export default function AnimatedHeading({
  staticTextBefore,
  loopTexts = [],
  staticTextAfter,
  className,
  highlightClassName = "text-primary-20",
  variants = defaultVariants,
  transition = defaultTransition,
  loopInterval = 2200,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!loopTexts.length) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % loopTexts.length);
    }, loopInterval);

    return () => clearInterval(interval);
  }, [loopTexts, loopInterval]);

  return (
    <motion.h2
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      className={`${className} text-white font-rethink text-3xl xl:text-4xl font-bold leading-9 xl:leading-12 max-w-[900px] mx-auto text-center`}
    >
      {staticTextBefore}{" "}

      {loopTexts.length > 0 && (
        <span className={`inline-block relative ${highlightClassName}`}>
          <AnimatePresence mode="wait">
            <motion.span
              key={loopTexts[index]}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="inline-block"
            >
              {loopTexts[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      )}{" "}

      {staticTextAfter}
    </motion.h2>
  );
}
