"use client";
import { GRADIENT_BG, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Modal from "@/components/Reusable/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import "./InAction.css";

const InAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-full h-full py-14 overflow-hidden">
        {/* Gradient Backgrounds for dark mode */}
        <Image
          src={GRADIENT_BG.gradientServiceLeft}
          alt="PRTech Solutions Gradient Left"
          className="hidden xl:block absolute bottom-20 -left-9 h-[380px] w-[200px] pointer-events-none select-none z-0"
        />
        {/* <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className="hidden xl:block  absolute top-20 -right-10 h-[460px] w-[250px] pointer-events-none select-none z-0"
      /> */}
        <Container>
          <Heading
            heading="See Us In Action"
            subHeading="Take a glimpse into our creative process and learn how we transform ideas into reality."
          />
          <div className="relative flex flex-col items-center justify-center w-full h-full mt-10 ">
            <Image
              src={GRADIENT_BG.gradientInAction}
              alt="PRTech Solutions Gradient Left"
              className="hidden xl:block absolute -top-1/4  h-[600px] w-[900px] pointer-events-none select-none z-0"
            />
            <Image
              src={IMAGES.videoDummyImage}
              alt="PRTech Solutions In Action"
              className="w-full h-auto rounded-2xl z-50 opacity-70"
            />
            {/* video play btn */}
            <div className="absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="video-button cursor-pointer size-10 md:size-20 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  // width="26px"
                  className="size-5 md:size-6"
                >
                  <path
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="w-full aspect-video mx-auto">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              />
            </div>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default InAction;
