import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import "./GlowOnHover.css";

const GlowOnHover = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <button
      className={twMerge(
        `glow-button font-Inter text-white flex justify-center items-center gap-2 rounded-full px-3 lg:px-[35px] py-2 md:py-3 cursor-pointer border border-primary-40 bg-primary-20 text-[10px] md:text-sm lg:text-base font-medium leading-[1.4] transition-all duration-300 ease-in-out active:scale-95`,
        classNames
      )}
    >
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <span className="z-10">{children}</span>
    </button>
  );
};

export default GlowOnHover;
