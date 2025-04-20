import { ReactNode } from "react";
import "./FillBgOnHover.css"
const FillBgOnHover = ({children, classNames} : {children:ReactNode, classNames?:string}) => {
    return (
        <button className={`animated-button font-normal font-Inter text-white flex justify-center items-center gap-2 rounded-full px-2 md:px-3 lg:px-[35px] py-2 md:py-3 lg:py-[15px] cursor-pointer border border-white text-secondary-60 font-Inter text-[10px] md:text-sm lg:text-base font-medium leading-[1.4] transition-all duration-300 ease-in-out active:scale-95 ${classNames}`}>
            {children}
        </button>
    );
};

export default FillBgOnHover;