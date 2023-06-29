import React from 'react';

interface HeadingDescriptionProps {
  headingContent: string;
  descriptionContent: string;
}

const HeadingDescription = ({ headingContent, descriptionContent }: HeadingDescriptionProps) => {
  return (
    <div className="sm:flex sm:flex-col">
      <h2 className="heading--h2 lg:w-9/10 sm:w-full sm:text-center sm:text-[32px] md:text-[48px] lg:w-[474px] lg:text-left">
        {headingContent}
      </h2>
      <p className="paragraph--p1 py-[24px] sm:w-full sm:text-center sm:text-[12px] md:text-[18px] lg:w-[397px] lg:pb-[34px] lg:pt-[30px] lg:text-left">
        {descriptionContent}
      </p>
    </div>
  );
};

export default HeadingDescription;
