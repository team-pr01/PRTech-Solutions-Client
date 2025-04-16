import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ButtonProps {
  text?: string;
  icon?: StaticImageData;
  iconPosition?: "left" | "right";
  alt?: string;
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconPosition = "left",
  alt = "icon",
  className = "",
  textClassName = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `flex flex-row justify-center items-center gap-2 rounded-full px-2 md:px-3 lg:px-[15px] py-2 md:py-3 lg:py-[15px] cursor-pointer ${className}`
      )}
    >
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          alt={alt}
          className="size-[18px] md:size-5 lg:size-6"
        />
      )}
      {text && (
        <span
          className={`text-secondary-60 font-Inter text-[10px] md:text-sm lg:text-base font-medium leading-[1.4] ${textClassName}`}
        >
          {text}
        </span>
      )}
      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          alt={alt}
          className="size-[18px] md:size-5 lg:size-6  "
        />
      )}
    </button>
  );
};

export default Button;
