import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import "./AboutPRTech.css";
import { LuSquareMousePointer } from "react-icons/lu";

const AboutPRTechImages = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 relative w-full ">
      {/* Bg gradient */}
      <div className="bg-primary-20 absolute top-0 bottom-0 left-0 right-0 z-0 w-[320px] md:w-[711px] h-[300px] md:h-[613px] rounded-full opacity-40 blur-[163px] "></div>
      <div className="flex flex-row md:flex-col gap-5 z-10">
        {/* Support card */}
        <div className="support-card-wave group relative overflow-hidden  bg-primary-20/80 rounded-2xl p-5 flex flex-col gap-3 md:gap-9 h-[180px] w-full md:w-[343px] group">
          {/* Content Wrapper */}
          <div className="relative z-[2] flex flex-col h-full">
            <h2
              className={`text-white font-Rethink text-2xl font-bold`}
            >
              24/7 Support
            </h2>
            {/* Bottom section */}
            <div className="flex flex-row items-start md:items-center gap-2 md:gap-0 justify-between mt-auto">
              <p className="text-white md:text-base leading-4 max-full md:max-w-[75%]">
                We provide 24/7 service to our customer
              </p>

              <div className="bg-white rounded-full flex items-center justify-center size-10 shrink-0 group-hover:transition-all duration-300 group-hover:ease-in-out group-hover:transform group-hover:scale-105 group-hover:shadow-xl active:scale-95">
                <div className="relative w-6 h-6 overflow-hidden">
                  {/* Original Icon */}
                  <Image
                    src={ICONS.rightArrowTop2}
                    width={24}
                    height={24}
                    className="card-arrow-icon absolute inset-0 size-6"
                    alt="Arrow icon"
                  />
                  {/* Copy Icon */}
                  <Image
                    src={ICONS.rightArrowTop2}
                    width={24}
                    height={24}
                    className="card-arrow-icon card-arrow-icon--copy absolute inset-0 size-6"
                    alt="Arrow icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <Image
            src={IMAGES.aboutPrTech2}
            className="size-[180px] md:size-full object-cover rounded-xl"
            alt=""
          />
          {/* Hover card */}
          <div className="hidden  md:flex flex-col bg-gradient-to-b from-secondary-20/80 via-primary-20/50 to-primary-20 rounded-2xl absolute bottom-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-[600ms] overflow-hidden p-5">
            {/* <div className="flex items-center gap-3">
          <div className="px-3 py-2 text-secondary-600 font-500 text-sm bg-white w-fit rounded-md translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
            For All Levels
          </div>
          <h1 className="text-success-100 text-xl font-600 translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            Free
          </h1>
        </div> */}

            <h1 className="text-white text-2xl font-bold mt-4 leading-7">
              Hello from PRTech
            </h1>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
              <p className="text-white text-[15px] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <LuSquareMousePointer />
                Lorem ipsum dolor sit
              </p>
            </div>
          </div>
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
