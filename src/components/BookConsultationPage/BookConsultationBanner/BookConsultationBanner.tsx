import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';

const BookConsultationBanner = () => {
    return (
       <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center max-h-[690px]">
            <div className="h-full w-full bg-neutral-80 absolute top-0 bottom-0 rounded-xl opacity-70"></div>
            <Image
              src={IMAGES.bookConsultationBg}
              alt="MITRA Consultancy"
              className="rounded-xl h-full w-full"
            />
            <div className="flex flex-col items-center justify-center w-full absolute top-0 bottom-0 right-0 left-0 z-20">
              <Image
                src={IMAGES.prtechSolutionsLogoGray}
                alt="MITRA Consultancy"
                className="w-[164px] h-[64px]"
              />
              <h1 className="text-white text-[25px] xl:text-[42px] text-center font-bold mt-8 uppercase font-Rethink">
                Crafting Digital Excellence
              </h1>
              <p className="text-white text-[10px] text-center md:text-base leading-7 mt-4">
                Have questions or want to discuss your next big idea?
              </p>
              <p className="text-white text-[10px] text-center md:text-base leading-7 mt-0 lg:mt-[6px]">
                We here to help you bring your digital vision to life.
              </p>
            </div>
          </div>
    );
};

export default BookConsultationBanner;