import React from 'react';

interface HeadingDescriptionProps {
  headingContent: string;
  descriptionContent: string;
}

const HeadingDescription = ({ headingContent, descriptionContent }: HeadingDescriptionProps) => {
  return (
    <div className="sm:flex sm:flex-col">
      <h2 className="lg:w-9/10 w-full text-center text-[32px] md:text-[48px] lg:w-[474px] lg:text-left">
        {headingContent}
      </h2>
      <p className="p1 py-[24px] text-center text-[12px] md:text-[18px] lg:w-[397px] lg:pb-[34px] lg:pt-[30px] lg:text-left">
        {descriptionContent}
      </p>
    </div>
  );
};

export default HeadingDescription;
