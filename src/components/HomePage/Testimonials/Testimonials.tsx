/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/Reusable/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect, useRef } from "react";
import type SwiperCore from "swiper";
import { motion } from "framer-motion";

// types/testimonial.ts (optional location)
export interface TestimonialData {
  name: string;
  position: string;
  rating: number;
  review: string;
  briefReview: string;
  business: string;
  profileImage: string;
  dashboardImage: string;
}


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);
  const swiperRef = useRef<SwiperCore | null>(null);

  
  const testimonials: TestimonialData[] = [
  {
    name: "Alice Johnson",
    position: "CTO, TechCorp",
    rating: 4.5,
    review:
      "TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient! The dashboard is intuitive and support is outstanding.TechCorp has never been more efficient!",
    briefReview: "Game-Changer for Our Workflow",
    business: "TechCorp",
    profileImage: "/images/alice.jpg",
    dashboardImage: "/images/dashboard1.png",
  },
  {
    name: "Michael Lee",
    position: "Founder, StartHub",
    rating: 5,
    review:
      "Absolutely loved the experience. Fast, reliable, and user-friendly. Highly recommended!",
    briefReview: "Seamless User Experience",
    business: "StartHub",
    profileImage: "/images/michael.jpg",
    dashboardImage: "/images/dashboard2.png",
  },
  {
    name: "Sara Kim",
    position: "Product Manager, InnovateX",
    rating: 4,
    review:
      "A solid tool that supports our product lifecycle. Room for improvement, but very satisfied!",
    briefReview: "Reliable & Intuitive",
    business: "InnovateX",
    profileImage: "/images/sara.jpg",
    dashboardImage: "/images/dashboard3.png",
  },
  {
    name: "David Brown",
    position: "CEO, FutureVision",
    rating: 4.5,
    review:
      "Great features and excellent customer service. Helped us streamline operations across departments.",
    briefReview: "Excellent Business Tool",
    business: "FutureVision",
    profileImage: "/images/david.jpg",
    dashboardImage: "/images/dashboard4.png",
  },
];
  const updateSlidesPerView = (swiper: SwiperCore) => {
    if (
      !swiper ||
      !swiper.params ||
      typeof swiper.params.slidesPerView !== "number"
    ) {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1366) setCurrentSlidesPerView(3);
        else if (window.innerWidth >= 640) setCurrentSlidesPerView(2);
        else setCurrentSlidesPerView(1);
      } else {
        setCurrentSlidesPerView(1);
      }
      return;
    }
    setCurrentSlidesPerView(swiper.params.slidesPerView);
  };

  useEffect(() => {
    if (swiperRef.current) {
      updateSlidesPerView(swiperRef.current);
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Start hidden, slightly to the left
    visible: {
      opacity: 1,
      x: 0,           // End visible, at original position
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const buttonsVariants = {
    hidden: { opacity: 0, x: 50 }, // Start hidden, slightly to the right
    visible: {
      opacity: 1,
      x: 0,          // End visible, at original position
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2, // Optional: Slight delay for buttons
      },
    },
  };
  

  return (
    <div className="relative w-full py-32 border-y border-neutral-80/50">
      <div className="bg-primary-20 size-[300px] opacity-20 blur-[150px] absolute top-48 z-0 left-20"></div>
      <Image
        src={IMAGES.linnerBg1}
        className="absolute left-0 top-0 h-full opacity-5 z-0"
        alt=""
      />
      <Image
        src={IMAGES.linnerBg2}
        className="absolute right-0 top-0 h-full opacity-10 z-0 rotate-180"
        alt=""
      />
      <Container>
      <div className="flex flex-col lg:flex-row justify-between mb-5 items-center lg:items-end overflow-hidden"> {/* Added overflow-hidden to parent */}
        {/* Text Content - Animate from Left */}
        <motion.div
          className="mb-4 lg:mb-0 text-center lg:text-left z-10"
          variants={textVariants}      // Apply variants
          initial="hidden"             // Start hidden
          whileInView="visible"        // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
        >
          <h1
            className={`text-white text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-snug 2xl:leading-[64px]`}
          >
            What's <span className="text-primary-20">Our Clients</span> Saying?
          </h1>
          <p
            className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-relaxed md:leading-7 mt-4 lg:mx-0`}
          >
            Hear from our most valuable clients and partners about their
            experience with us.
          </p>
        </motion.div>

        {/* Desktop Navigation - Animate from Right */}
        <motion.div
          className="hidden lg:flex items-center gap-4 flex-shrink-0 z-10"
          variants={buttonsVariants}   // Apply variants
          initial="hidden"             // Start hidden
          whileInView="visible"        // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
        >
          <button
            id="prevButtonDesktop"
            className="rounded-full size-12 bg-neutral-70 hover:bg-primary-20 transition duration-300 flex items-center justify-center cursor-pointer group"
          >
            <Image
              src={ICONS.leftArrow}
              alt="Previous Testimonial"
              className="size-6 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>
          <button
            id="nextButtonDesktop"
            className="rounded-full size-12 bg-primary-20 border border-primary-20 hover:bg-primary-20/80 transition duration-300 flex items-center justify-center cursor-pointer group"
          >
            <Image
              src={ICONS.rightArrow}
              alt="Next Testimonial"
              className="size-6 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

        {/* Swiper Component */}
        <Swiper
          speed={600}
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: "#prevButtonDesktop, #prevButtonMobile",
            nextEl: "#nextButtonDesktop, #nextButtonMobile",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSlidesPerView(swiper);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onBreakpoint={(swiper) => updateSlidesPerView(swiper)}
          onResize={(swiper) => updateSlidesPerView(swiper)}
          // breakpoints={{
          //   640: { slidesPerView: 2, spaceBetween: 25 },
          //   1024: { slidesPerView: 2, spaceBetween: 30 },
          //   1366: { slidesPerView: 3, spaceBetween: 30 },
          // }}
          className="!pb-16 md:!pb-20 mt-12"
        >
          {testimonials.map((testimonial) => {
  // const isMiddle =
  //   currentSlidesPerView === 3 && index === activeIndex + 1;

  return (
    <SwiperSlide key={testimonial.id} className="self-stretch">
      <TestimonialCard
        {...testimonial} // spread all testimonial data props
     
      />
    </SwiperSlide>
  );
})}
          <div className="swiper-pagination-custom text-center absolute bottom-4 left-0 right-0 cursor-pointer w-fit"></div>
        </Swiper>

        {/* Custom Pagination Styles */}
        <style jsx global>{`
          /* ... (pagination styles remain the same) ... */
          .swiper-pagination-custom .swiper-pagination-bullet {
            background-color: #fafcfd !important;
            opacity: 0.5;
            transition: all 0.3s ease;
            width: 8px;
            height: 8px;
            margin: 0 5px !important; /* Add horizontal margin */
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active {
            background-color: #06a0ed !important;
            opacity: 1;
            width: 12px; /* Make active bullet slightly larger */
            height: 12px;
            transform: translateY(-2px); /* Optional: slight raise effect */
          }

          /* Ensure swiper slides have height in stretch mode */
          .swiper-slide {
            height: auto; /* Default */
          }
          .swiper-wrapper {
            align-items: stretch; /* Align items to stretch */
          }
        `}</style>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            id="prevButtonMobile"
            className="rounded-full size-12 bg-neutral-70 hover:bg-primary-20 transition duration-300 flex items-center justify-center cursor-pointer group"
          >
            <Image
              src={ICONS.leftArrow}
              alt="Previous Testimonial"
              className="size-6 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>
          <button
            id="nextButtonMobile"
            className="rounded-full size-12 bg-primary-20 border border-primary-20 hover:bg-primary-20/80 transition duration-300 flex items-center justify-center cursor-pointer group"
          >
            <Image
              src={ICONS.rightArrow}
              alt="Next Testimonial"
              className="size-6 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
