import { IMAGES } from "@/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Container from "../Container/Container";

type TPageHeroSection = {
    heading: string;
    description: string;
    backgroundImage?: StaticImageData;
}
const PageHeroSection:React.FC<TPageHeroSection> = ({heading, description, backgroundImage=IMAGES.heroBgImage2}) => {
  return (
    <>
      <div className="relative">
        <Image
          src={backgroundImage}
          alt=""
          className="w-full min-h-[400px] xl:h-full"
        />
        <Container>
          <div className="flex flex-col items-center justify-center absolute top-10 bottom-0 right-0 left-0 h-full">
            <h1 className="text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px] z-10">
                {heading}
            </h1>
            <p
              className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 text-center z-10 mt-3 xl:mt-5 max-w-[700px]`}
            >
                {description}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PageHeroSection;
