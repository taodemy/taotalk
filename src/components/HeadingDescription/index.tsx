import React from 'react';

interface HeadingDescriptionProps {
  headingContent: string;
  descriptionContent: string;
}

const HeadingDescription = ({ headingContent, descriptionContent }: HeadingDescriptionProps) => {
  return (
    <div className="headingDescriptionContainer">
      <h2 className="heading--h2">{headingContent}</h2>
      <p className="paragraph--p1">{descriptionContent}</p>
    </div>
  );
};

export default HeadingDescription;
