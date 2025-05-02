"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { IMAGES } from "@/assets";

const ProjectPhotoGallary = () => {
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
        <Swiper
          speed={600}
          spaceBetween={50}
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
          className="!pb-16 md:!pb-20"
        >
          {[1, 2, 3, 4, 5].map((project) => (
            <SwiperSlide key={project}>
              <Image src={IMAGES.project1} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Place pagination outside of <Swiper> */}
        <div className="swiper-pagination-custom text-center absolute bottom-4 left-0 right-0 w-full z-0"></div>

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
