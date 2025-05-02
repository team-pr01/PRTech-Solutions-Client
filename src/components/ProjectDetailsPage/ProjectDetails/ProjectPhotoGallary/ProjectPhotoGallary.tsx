/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { IMAGES } from "@/assets";
import { useRef, useState } from "react";

const ProjectPhotoGallary = () => {
  const [progress, setProgress] = useState(0); // 0 to 100
  // The ref is not strictly needed for this logic but doesn't hurt
  const progressRef = useRef<HTMLDivElement | null>(null);

  // --- Corrected Handler ---
  const handleAutoplayTimeLeft = (
    swiper: any,
    time: number,
    progressRatio: number
  ) => {
    // progressRatio goes from 0 (start of delay) to 1 (end of delay)
    // We want the bar width to go from 0% to 100%
    setProgress((1 - progressRatio) * 100);
  };
  return (
    <div className="flex flex-col gap-6 mt-[50px]">
      <div>
        <h1 className="font-Rethink text-3xl font-bold leading-11 text-white">
          Checkout the Project
        </h1>
        <p
          className={`text-neutral-65 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-3 max-w-full lg:max-w-[900px]`}
        >
          Complete redesign of an e-commerce platform with focus on mobile
        </p>
      </div>

      <div className="w-full relative">
        {/* Progress Bar Container */}
        <div className="bg-neutral-70/70 h-0.5 relative rounded-xl overflow-hidden mb-4">
          <div
            ref={progressRef}
            className="bg-primary-20 h-full rounded-xl"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Swiper Component */}
        <Swiper
          speed={600}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={handleAutoplayTimeLeft}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          className="!pb-12"
        >
          {[1, 2, 3, 4, 5].map((project) => (
            <SwiperSlide key={project}>
              <Image
                src={IMAGES.project1}
                alt={`Project ${project}`}
                width={800}
                height={450}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        <div className="swiper-pagination-custom text-center absolute bottom-4 left-0 right-0 w-full z-0"></div>

          {/* Styles for dots */}
        <style jsx global>{`
          .swiper-pagination-custom .swiper-pagination-bullet {
            background-color: #fafcfd !important;
            opacity: 0.5;
            transition: all 0.3s ease;
            width: 8px;
            height: 8px;
            margin: 0 5px !important;
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active {
            background-color: #06a0ed !important;
            opacity: 1;
            width: 12px;
            height: 12px;
            transform: translateY(-2px);
          }

          .swiper-slide {
            height: auto;
          }
          .swiper-wrapper {
            align-items: stretch;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectPhotoGallary;
