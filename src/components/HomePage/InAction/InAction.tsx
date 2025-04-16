"use client";
import { GRADIENT_BG, ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Modal from "@/components/Reusable/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";

const InAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-14 overflow-hidden">
      <Heading heading="See Us In Action" subHeading="Take a glimpse into our creative process and learn how we transform ideas into reality." />
      {/* Gradient Backgrounds for dark mode */}
      <Image
        src={GRADIENT_BG.gradientServiceLeft}
        alt="PRTech Solutions Gradient Left"
        className="hidden xl:block absolute bottom-20 -left-9 h-[380px] w-[200px] pointer-events-none select-none z-0"
      />
      <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className="hidden xl:block  absolute top-20 -right-10 h-[460px] w-[250px] pointer-events-none select-none z-0"
      />
      <Container>
        <div className="relative flex flex-col items-center justify-center w-full h-full mt-10 ">
        <Image
        src={GRADIENT_BG.gradientInAction}
        alt="PRTech Solutions Gradient Left"
        className="hidden xl:block absolute -top-1/4  h-[600px] w-[900px] pointer-events-none select-none z-0"
      />
          <Image
            src={IMAGES.videoDummyImage}
            alt="PRTech Solutions In Action"
            className="w-full h-auto rounded-2xl z-50 "
          />
          {/* video play btn */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-60">
            <Image
            alt={"PRTech Solutions Play Button"}
              src={ICONS.InActionBtn}
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
            />
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="w-full aspect-video mx-auto">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            />
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default InAction;
