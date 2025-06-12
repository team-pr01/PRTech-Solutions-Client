/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/Reusable/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import type SwiperCore from "swiper";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import TestimonialCard from "./TestimonialCard";
import { useRef } from "react";
import { motion } from "framer-motion";

// types/testimonial.ts (optional location)
export interface TestimonialData {
  id: number;
  name: string;
  position: string;
  rating: number;
  review: string;
  briefReview: string;
  business: string;
  profileImage: string;
  image: any;
}

const Testimonials = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);
  const swiperRef = useRef<SwiperCore | null>(null);

  const testimonials: TestimonialData[] = [
  
    {
      id: 2,
      name: "Shakil Mirza",
      position: "CEO, Creative Hub IT",
      rating: 5,
      review:
        "I’m truly impressed by the outstanding work delivered by the team on my MLM website. From designing the Figma layout to developing the frontend and integrating APIs, they handled everything with professionalism and attention to detail. The user interface is clean and responsive, and the overall functionality is seamless. Their communication and timely delivery made the process smooth. I highly recommend them for any web development project—reliable, skilled, and creative.",
      briefReview: "Seamless design to delivery.",
      business: "Ten Stage Matrix",
      profileImage: "/images/michael.jpg",
      image: IMAGES.mockup,
    },
    {
      id: 3,
      name: "Akash Debhnath",
      position: "Research Administrator, Arya Kalyan Foundation",
      rating: 5,
      review:
        "The team delivered a complete Vedic Dashboard with stunning design and robust functionality. From temple and donation management to reels, everything works flawlessly. Their dedication and precision made this project truly special.",
      briefReview: "Flawless Vedic dashboard design.",
      business: "Arya Kalyan Foundation",
      profileImage: "/images/sara.jpg",
      image: IMAGES.vedicDashboard,
    },
    {
      id: 4,
      name: "Shreya Banerjee",
      position: "CEO, Shopfinity",
      rating: 5,
      review:
        "I am very happy with the ecommerce website made by PRTech Solutions. They understood my needs clearly and completed everything on time. The design looks good, and all features work smoothly. It is simple to use. Great work by PRTech Solutions from start to finish.",
      briefReview: "Perfect ecommerce website solution.",
      business: "Shopfinity",
      profileImage: "/images/david.jpg",
      image: IMAGES.shopfinity,
    },
      {
      id: 1,
      name: "Dr. Ropak Roy",
      position: "Founder, C.R.Physiotherapy Centre",
      rating: 5,
      review:
        "I’m incredibly impressed with the team’s dedication and expertise. They designed and developed my personal portfolio with precision, creativity, and a clear understanding of my vision. The final result exceeded my expectations and perfectly represents my professional identity. I highly recommend their services to anyone seeking quality and professionalism.",
      briefReview: "Truly professional and impressive.",
      business: "C.R.Physiotherapy Centre",
      profileImage: "/images/alice.jpg",
      image: IMAGES.doctorPortfolio,
    },
    {
      id: 5,
      name: "Rohan Patel",
      position: "Co-Founder, Amplogix",
      rating: 5,
      review:
        "PRTech Solutions built a professional agency website for me, and I’m very happy with the outcome. They managed everything from design to development with care and clear communication. The website looks clean, works smoothly, and loads fast. It’s also easy to update and manage. They understood my goals well and delivered just what I needed. I would surely recommend PRTech Solutions to anyone looking for a smart and reliable web partner.",
      briefReview: "Smart, fast, and clean.",
      business: "Amplogix",
      profileImage: "/images/david.jpg",
      image: IMAGES.amplogix,
    },
    {
      id: 6,
      name: "Karan Malhotra",
      position: "Founder, Orbit Rides",
      rating: 5,
      review:
        "The team has made very good landing page for my ride-share app. It is simple, easy to use, and looks nice. Many people liked it and now my app is getting more users. I would definitely recommend PRTech Solutions to anyone looking for a smart and reliable web partner.",
      briefReview: "Boosted ride-share app growth.",
      business: "Orbit Rides",
      profileImage: "/images/david.jpg",
      image: IMAGES.orbitRides,
    },
    {
      id: 7,
      name: "Brinto Chakraborti",
      position: "Media Manager, Arya Kalyan Foundation",
      rating: 5,
      review:
        "The Vedic mobile app for managing temples, donations, and reels is wonderful. The app is very easy to use and works smoothly without any problems. It helps me keep everything organized and connected with the community. The design is clean and user-friendly. I am very happy with the app.",
      briefReview: "Smooth and helpful app.",
      business: "Arya Kalyan Foundation",
      profileImage: "/images/david.jpg",
      image: "/images/dashboard4.png",
    },
  ];
  // const updateSlidesPerView = (swiper: SwiperCore) => {
  //   if (
  //     !swiper ||
  //     !swiper.params ||
  //     typeof swiper.params.slidesPerView !== "number"
  //   ) {
  //     if (typeof window !== "undefined") {
  //       if (window.innerWidth >= 1366) setCurrentSlidesPerView(3);
  //       else if (window.innerWidth >= 640) setCurrentSlidesPerView(2);
  //       else setCurrentSlidesPerView(1);
  //     } else {
  //       setCurrentSlidesPerView(1);
  //     }
  //     return;
  //   }
  //   setCurrentSlidesPerView(swiper.params.slidesPerView);
  // };

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     updateSlidesPerView(swiperRef.current);
  //   }
  // }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Start hidden, slightly to the left
    visible: {
      opacity: 1,
      x: 0, // End visible, at original position
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
      x: 0, // End visible, at original position
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
        <div className="flex flex-col lg:flex-row justify-between mb-5 items-center lg:items-end overflow-hidden">
          {" "}
          {/* Added overflow-hidden to parent */}
          {/* Text Content - Animate from Left */}
          <motion.div
            className="mb-4 lg:mb-0 text-center lg:text-left z-10"
            variants={textVariants} // Apply variants
            initial="hidden" // Start hidden
            whileInView="visible" // Animate when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
          >
            <h1
              className={`text-white text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-tight md:leading-snug 2xl:leading-[64px]`}
            >
              What's <span className="text-primary-20">Our Clients</span>{" "}
              Saying?
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
            variants={buttonsVariants} // Apply variants
            initial="hidden" // Start hidden
            whileInView="visible" // Animate when in view
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
            // updateSlidesPerView(swiper);
          }}
          // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // onBreakpoint={(swiper) => updateSlidesPerView(swiper)}
          // onResize={(swiper) => updateSlidesPerView(swiper)}
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
