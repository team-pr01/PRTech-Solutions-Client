import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import "./AboutPRTech.css";
import { useEffect, useRef } from "react";

const AboutPRTechImages = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
          }, 3000);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 relative w-full">
      {/* Bg gradient */}
      <div className="bg-primary-20 absolute inset-0 z-0 w-[320px] md:w-[711px] h-[300px] md:h-[813px] rounded-full opacity-40 blur-[163px]" />

      <div className="flex flex-row md:flex-col gap-5 z-10">
        {/* Support card */}
        <div className="support-card-wave relative overflow-hidden bg-primary-20/80 rounded-2xl p-5 flex flex-col gap-3 md:gap-9 h-[180px] md:h-[160px] w-full md:w-[343px]">
          <div className="relative z-[2] flex flex-col h-full">
            <p className="text-white font-Rethink text-sm sm:text-2xl font-bold">
              Free Project Feasibility Review
            </p>

            <div className="flex items-start md:items-center justify-between mt-auto gap-2">
              <p className="text-white text-sm sm:text-base leading-4 md:max-w-[75%]">
              Validate your product idea before investing in development.
              </p>

              <div className="bg-white rounded-full flex items-center justify-center size-10 shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
                <div className="relative w-6 h-6 overflow-hidden">
                  <Image
                    src={ICONS.rightArrowTop2}
                    width={24}
                    height={24}
                    className="absolute inset-0 size-6"
                    alt="Arrow icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image with auto-slide overlay */}
        <div ref={sectionRef} className="relative overflow-hidden">
          <Image
            src={IMAGES.aboutPrTech2}
            className="size-[180px] md:size-full object-cover rounded-xl"
            alt=""
          />

          
        </div>
      </div>

      <Image
        src={IMAGES.aboutPrTech1}
        className="z-10 h-[220px] md:h-[615px] w-full object-cover rounded-2xl"
        alt=""
      />
    </div>
  );
};

export default AboutPRTechImages;
