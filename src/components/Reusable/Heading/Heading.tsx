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
    <div className={`${alignment} flex flex-col gap-7 lg:gap-5 2xl:gap-6 ${className}`}>
      {heading && (
        <h1 className={`text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[64px] ${alignment} ${headingClassName}`}>
          {heading}
        </h1>
      )}
      {subHeading && (
        <p className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 max-w-full lg:max-w-[800px] text-center mx-auto ${alignment} ${subHeadingClassName}`}>
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Heading;
