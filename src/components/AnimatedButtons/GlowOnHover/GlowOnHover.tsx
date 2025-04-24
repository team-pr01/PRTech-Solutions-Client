import { ReactNode } from "react";
import "./GlowOnHover.css";
import Image, { StaticImageData } from "next/image";

const GlowOnHover = ({
  children,
  classNames,
  icon,
  alt,
}: {
  children: ReactNode;
  classNames?: string;
  icon?: StaticImageData;
  alt: string;
}) => {
  return (
    <button
      className={`glow-button font-Inter text-white flex justify-center items-center gap-2 rounded-full px-2 md:px-3 lg:px-[35px] py-2 md:py-3 lg:py-[15px] cursor-pointer border border-primary-40 bg-primary-20 text-[10px] md:text-sm lg:text-base font-medium leading-[1.4] transition-all duration-300 ease-in-out active:scale-95 ${classNames}`}
    >
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <span className="z-10">{children}</span>
      {icon && (
        <Image
          src={icon}
          alt={alt}
          className="icon size-[18px] md:size-5 lg:size-6 z-10"
        />
      )}
    </button>
  );
};

export default GlowOnHover;
