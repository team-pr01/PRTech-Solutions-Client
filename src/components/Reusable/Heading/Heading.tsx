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
      {heading && <h1 className={`text-white text-[64px] font-rethink font-bold leading-[1] ${headingClassName}`}>{heading}</h1>}
      {subHeading && <p className={`text-white text-[22px] font-inter font-normal leading-[1.4] mt-4 ${subHeadingClassName}`}>{subHeading}</p>}
    </div>
  );
};

export default Heading;

