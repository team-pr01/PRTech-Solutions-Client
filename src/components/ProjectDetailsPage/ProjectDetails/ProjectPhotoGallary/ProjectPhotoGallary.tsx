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

      <Swiper
        speed={600}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1366: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="!pb-16 md:!pb-20 mt-12"
      >
        {[1, 2, 3, 4, 5].map((project) => (
          <SwiperSlide key={project} className="">
            <Image src={IMAGES.project1} alt={""} />
          </SwiperSlide>
        ))}
        {/* <div className="swiper-pagination-custom text-center absolute bottom-4 left-0 right-0 cursor-pointer w-fit"></div> */}
      </Swiper>
    </div>
  );
};

export default ProjectPhotoGallary;