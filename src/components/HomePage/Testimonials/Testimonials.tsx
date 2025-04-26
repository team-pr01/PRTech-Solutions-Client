/* eslint-disable react/no-unescaped-entities */
"use client"
import Container from "@/components/Reusable/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ICONS } from "@/assets";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <Container>
      <h1
        className={`text-white text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px]`}
      >
        What's <span className="text-primary-20">Our Clients</span> Saying?
      </h1>
      <p
        className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 }`}
      >
        Here from our most valuable clients and partners about their experience with us.
      </p>

                    <div className='flex justify-between mb-5'>
                        <div className='hidden lg:flex items-center gap-4'>
                            <button id="prevButton" className="p-2 rounded-full size-12 bg- border border-neutral-60 hover:bg-gray-100 transition duration-300">
                                <Image src={ICONS.topRightWhiteArrow} alt='' className='size-6 rotate-180' />
                            </button>
                            <button id="nextButton" className="p-2 rounded-full size-12 bg-primary-20 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                                <Image src={ICONS.topRightWhiteArrow} alt='' className='size-6' />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                            prevEl: "#prevButton",
                            nextEl: "#nextButton",
                        }}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            360: { slidesPerView: 1 },
                            425: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                            1366: { slidesPerView: 3 },
                        }}
                        className=""
                    >
                        {[1,2,3,4,5]?.map((testimonial, index) => (
                            <SwiperSlide key={index} className='mb-10'>
                                <TestimonialCard {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='flex lg:hidden items-center justify-center gap-4 mt-7'>
                        <button id="prevButton" className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                            <Image src={ICONS.topRightWhiteArrow} alt='' className='size-6 rotate-180' />
                        </button>
                        <button id="nextButton" className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                            <Image src={ICONS.topRightWhiteArrow} alt='' className='size-6' />
                        </button>
                    </div>
    </Container>
  );
};

export default Testimonials;
