import { twMerge } from "tailwind-merge";
import { CgArrowTopRight } from "react-icons/cg";
import "./FillBgToTopOnHover.css";

type Props = {
  classNames?: string;
  btnText: string;
};

const FillBgToTopOnHover = ({ classNames, btnText }: Props) => {
  const mergedClasses = twMerge(
    "flex justify-center items-center gap-2 rounded-full px-3 lg:px-[15px] py-2 md:py-3 lg:py-[15px] cursor-pointer bg-white fill-to-top-animated-button",
    classNames
  );

  return (
    <button className={mergedClasses}>
      <span>{btnText}</span>
      <CgArrowTopRight className="text-base md:text-xl lg:text-2xl" />
    </button>
  );
};

export default FillBgToTopOnHover;
