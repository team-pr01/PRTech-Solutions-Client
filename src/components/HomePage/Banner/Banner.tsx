/* eslint-disable react/no-unescaped-entities */
"use client";
import { ANIMATEDICONS, ICONS, IMAGES } from "@/assets";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";

const Banner = () => {
  const words = [
    "build websites",
    "develop apps",
    "create digital solutions",
    "design user experiences",
    "boost your brand",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);
  return (
    <div className="bg-secondary-60 w-full">
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
          <div className="py-10 md:py-14 xl:py-40">
            <Image src={ANIMATEDICONS.banner} alt="" className="size-40 justify-self-center" />
            <h1
              className={`text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px] text-center mt-5`}
            >
              Ready to transform your digital presence?
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mt-6">
              We{" "}
              <span className="text-primary-20 border-r-2 border-white pr-1 animate-pulse">
                {displayedText}
              </span>
            </h1>
            <p
              className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-6 text-center max-w-[900px] mx-auto`}
            >
              Let’s discuss how we can help you achieve your business goals with
              our expertise — from tailored strategies to innovative solutions,
              we’re here to drive your success every step of the way.
            </p>

            <div className="flex items-center justify-center gap-5 mt-10">
              <FillBgOnHover classNames="w-fit group bg-primary-20 border border-primary-20 text-white flex items-center gap-1 hover:bg-primary-20/80">
                More About Us
                <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
              </FillBgOnHover>
              <button className="bg-secondary-60 text-white border border-white font-Inter text-xs md:text-base font-medium flex items-center gap-2 px-5 md:px-10 py-2 md:py-[14px] rounded-[30px]">
                <Image
                  src={ICONS.calendarGif}
                  alt="arrow-top-right"
                  className="size-4 md:size-6"
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
