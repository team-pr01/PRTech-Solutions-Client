import "./FillBgToTopOnHover.css"
import { CgArrowTopRight } from "react-icons/cg";
const FillBgToTopOnHover = () => {
  return (
    <button className="flex justify-center items-center gap-2 rounded-full px-2 md:px-3 lg:px-[15px] py-2 md:py-3 lg:py-[15px] cursor-pointer bg-white fill-to-top-animated-button">
      <span>Get Free Quote</span>
      <CgArrowTopRight className="text-xl" />
    </button>
  );
};

export default FillBgToTopOnHover;
