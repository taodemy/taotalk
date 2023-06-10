import React from 'react';

interface HeadingDescriptionProps {
  headingContent: string;
  descriptionContent: string;
}

const HeadingDescription = ({ headingContent, descriptionContent }: HeadingDescriptionProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 className="heading--h2" style={{ width: '90%' }}>
        {headingContent}
      </h2>
      <p className="paragraph--p1" style={{ width: '75%', margin: '30px 0' }}>
        {descriptionContent}
      </p>
    </div>
  );
};

export default HeadingDescription;
