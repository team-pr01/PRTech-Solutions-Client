import React from 'react';

interface HeadingProps {
  heading?: string;
  subHeading?: string;
  className?: string; 
  headingClassName?: string; 
  subHeadingClassName?: string;
  align?: 'left' | 'center' | 'right';
}

const Heading: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  className = '',
  headingClassName = '',
  subHeadingClassName = '',
  align = 'center' 
}) => {
  const alignment = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <div className={`${alignment} flex flex-col gap-2 md:gap-3 lg:gap-5 3xl:gap-6 ${className}`}>
      {heading && (
        <h1 className={`text-black dark:text-white font-rethink text-3xl md:text-5xl 3xl:text-[64px] font-bold leading-[1] ${alignment} ${headingClassName}`}>
          {heading}
        </h1>
      )}
      {subHeading && (
        <p className={`dark:text-neutral-30 text-neutral-80 font-inter text-sx md:text-base 3xl:text-xl font-normal leading-[28px] ${alignment} ${subHeadingClassName}`}>
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Heading;
