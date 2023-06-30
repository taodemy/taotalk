import React from 'react';

interface HeadingDescriptionProps {
  headingContent: string;
  descriptionContent: string;
}

const HeadingDescription = ({ headingContent, descriptionContent }: HeadingDescriptionProps) => {
  return (
    <div className="xs:flex xs:flex-col">
      <h2 className="heading--h2 xl:w-9/10 xs:w-full xs:text-center xs:text-[32px] md:text-[48px] xl:text-left">
        {headingContent}
      </h2>
      <p className="paragraph--p1 xs:w-full xs:py-[24px] xs:text-center xs:text-[12px] md:text-[18px] xl:w-3/4 xl:text-left">
        {descriptionContent}
      </p>
    </div>
  );
};

export default HeadingDescription;
