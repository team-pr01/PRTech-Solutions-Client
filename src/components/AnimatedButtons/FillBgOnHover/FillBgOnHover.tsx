import { ReactNode } from "react";
import "./FillBgOnHover.css";
import { twMerge } from "tailwind-merge";

const FillBgOnHover = ({
  children,
  classNames,
  onClick,
}: {
  children: ReactNode;
  classNames?: string;
  onClick ? : () => void;
}) => {
  return (
    <button
    onClick={onClick}
      className={twMerge(
        "animated-button font-Inter flex justify-center items-center gap-2 rounded-full px-3 lg:px-[35px] py-2 md:py-3 lg:py-[15px] cursor-pointer border border-white hover:border-primary-20 text-[10px] md:text-sm lg:text-base font-medium leading-[1.4] transition-all duration-300 ease-in-out active:scale-75 hover:text-white",
        classNames
      )}
    >
      {children}
    </button>
  );
};

export default FillBgOnHover;
