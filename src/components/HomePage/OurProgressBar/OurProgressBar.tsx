"use client";
import { useEffect, useRef, useState } from "react";
import { ANIMATEDICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import CountUp from "react-countup";
import { easeOut, motion, useInView } from "framer-motion"; // Import motion and hooks

const OurProgressBar = () => {
  const progressBarData = [
    { title: "Projects Delivered", value: "15" },
    { title: "Happy Clients", value: "15" },
    { title: "Tech Tools Used", value: "20" },
    { title: "Years of Experience", value: "2" },
    { title: "Success Ratio", value: "98" },
  ];

  // State for CountUp trigger (using native Intersection Observer as before)
  const [inViewForCount, setInViewForCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Refs for Framer Motion animations
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null); // Ref for the grid container

  // Framer Motion useInView hooks
  const isIconInView = useInView(iconRef, { once: true, amount: 0.5 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const areCardsInView = useInView(cardsContainerRef, { once: true, amount: 0.1 }); // Trigger earlier for cards

  // Animation variants
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Base transition
  const transition = (delay = 0) => ({
    duration: 0.6,
    ease: easeOut,
    delay,
  });

  // 👇 Native Intersection Observer setup for CountUp
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger CountUp only when intersecting
          if (entry.isIntersecting) {
            setInViewForCount(true);
          }
          // Optional: Reset countup if needed when out of view (uncomment below)
          // else {
          //   setInViewForCount(false);
          // }
        });
      },
      {
        threshold: 0.5, // Trigger count when 50% visible
      }
    );

    const currentSectionRef = sectionRef.current; // Capture ref value

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={sectionRef} // Ref for Intersection Observer (CountUp trigger)
      className="relative bg-primary-40/40 py-16 w-full overflow-hidden"
    >
      <Image
        className="absolute right-0 top-0 h-full w-full z-0"
        src={IMAGES.progressBarBg}
        alt=""
      />
      <Container>
        {/* Animated Icon */}
        <motion.div
          ref={iconRef}
          variants={slideUpVariants}
          initial="hidden"
          animate={isIconInView ? "visible" : "hidden"}
          transition={transition(0)}
          className="flex justify-center mb-10" // Center the icon wrapper
        >
          <Image src={ANIMATEDICONS.progressGif} alt="" className="size-28" />
        </motion.div>
        {/* Animated Heading */}
        <motion.div
           ref={headingRef}
           variants={slideUpVariants}
           initial="hidden"
           animate={isHeadingInView ? "visible" : "hidden"}
           transition={transition(0.1)} // Slight delay after icon
        >
          <Heading
            heading="Our Progress at a Glance"
            subHeading="Driven by results, powered by performance – here’s how we measure success."
            align="center"
          />
        </motion.div>

        {/* Animated Cards Container */}
        <div
          ref={cardsContainerRef} // Ref for Framer Motion trigger
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-between mt-16 z-10 relative" // Changed items-center to items-start if needed
        >
          {progressBarData.map((item, index) => (
            // Wrap each card in motion.div for staggered animation
            <motion.div
              key={item.title}
              variants={slideUpVariants}
              initial="hidden"
              // Animate cards when the container is in view
              animate={areCardsInView ? "visible" : "hidden"}
              // Apply staggered delay
              transition={transition(0.3 + index * 0.1)} // Base delay + stagger
            >
              <h1 className="text-primary-20 font-Rethink text-[64px] font-bold text-center">
                {/* Use the state variable from native observer for CountUp */}
                {inViewForCount ? (
                  <CountUp end={Number(item.value)} />
                ) : (
                  0
                )}
                {item.title === "Success Ratio" ? "%" : "+"}
              </h1>
              <p className="text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 text-center my-2"> {/* Added margin-top */}
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProgressBar;