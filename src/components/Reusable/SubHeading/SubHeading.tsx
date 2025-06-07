import React from 'react';

interface SubHeadingProps {
  heading?: string;
  subHeading?: string;
  className?: string; 
  headingClassName?: string; 
  subHeadingClassName?: string;
  align?: 'left' | 'center' | 'right';
}

const SubHeading: React.FC<SubHeadingProps> = ({
  heading,
  className = '',
  headingClassName = '',
  align = 'center' 
}) => {
  const alignment = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <div className={`${alignment} flex flex-col gap-7 lg:gap-5 2xl:gap-6 ${className}`}>
      {heading && (
        <h1 className={`text-white font-rethink text-2xl md:text-3xl 2xl:text-4xl font-bold leading-[50px]  ${alignment} ${headingClassName}`}>
          {heading}
        </h1>
      )}
     
    </div>
  );
};

export default SubHeading;
