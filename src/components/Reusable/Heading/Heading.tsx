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
        <h2 className={`text-white font-rethink text-3xl xl:text-4xl font-bold leading-9 xl:leading-12 ${alignment} ${headingClassName}`}>
          {heading}
        </h2>
      )}
      {subHeading && (
        <p className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 max-w-full lg:max-w-[800px] text-center ${align === "left" ? "mx-0" : "mx-auto"} ${alignment} ${subHeadingClassName}`}>
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Heading;
