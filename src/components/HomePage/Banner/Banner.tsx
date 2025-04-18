/* eslint-disable react/no-unescaped-entities */
import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-secondary-60 h-[450px] w-full">
      <div className="relative flex h-full flex-col items-center justify-center">
      <Image
        className="absolute right-0 top-0 h-full w-full z-0"
        src={IMAGES.bannerBg}
        alt=""
      />
      <Image
        className="absolute right-0 top-0 left-0 bottom-0 h-full mx-auto z-0 hidden md:block"
        src={IMAGES.bannerCircle}
        alt=""
      />
      <Container>
        <div>
          <h1
            className={`text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px] text-center`}
          >
            Ready to transform your digital presence?
          </h1>
          <p
            className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-6 text-center`}>
            Let's discuss how we can help you achieve your business goals with
            our expertise.
          </p>

          <div className="flex items-center justify-center gap-5 mt-10">
            <button className="bg-primary-30 border border-primary-30 text-white text-sm md:text-base font-Inter font-medium flex items-center gap-2 px-5 md:px-10 py-2 md:py-4 rounded-[30px]">
              Get A Quote
              <Image
                src={ICONS.arrowTopRight}
                alt="arrow-top-right"
                className="size-6"
              />
            </button>
            <button className="bg-secondary-60 text-white border border-white font-Inter text-sm md:text-base font-medium flex items-center gap-2 px-5 md:px-10 py-2 md:py-4 rounded-[30px]">
              <Image
                src={ICONS.calendar}
                alt="arrow-top-right"
                className="size-6"
              />
              Schedule a Call
            </button>
          </div>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default Banner;
