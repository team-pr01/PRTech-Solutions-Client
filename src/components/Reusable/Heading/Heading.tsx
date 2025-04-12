import React from 'react';

interface HeadingProps {
  heading?: string;
  subHeading?: string;
  className?: string; 
  headingClassName?: string; 
  subHeadingClassName?: string;
}

const Heading: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  className = '',
  headingClassName = '',
  subHeadingClassName = ''
}) => {
  return (
    <div className={`text-center  ${className}`}>
      {heading && <h1 className={`text-black dark:text-white text-center font-rethink text-2xl md:text-5xl lg:text-[64px]  font-bold leading-[1] ${headingClassName}`}>{heading}</h1>}
      {subHeading && <p className={`dark:text-neutral-30 text-neutral-80 text-center font-inter text-sx md:text-base lg:text-xl font-normal leading-[28px] ${subHeadingClassName}`}>{subHeading}</p>}
    </div>
  );
};

export default Heading;

