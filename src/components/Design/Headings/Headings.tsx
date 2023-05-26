import React from 'react';
import styled from 'styled-components';

export interface StyledHeadingsProps {
  headingsize: string;
}

const HeadingBasestyle = styled.p<StyledHeadingsProps>`
  font-family: Dela Gothic One;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 120%;
  color: '#000000';
  font-size: ${(props) => props.headingsize};
`;

const fontSize = {
  Heading1: '56px',
  Heading2: '48px',
  Heading3: '32px',
  Heading4: '26px',
};

const Headings = () => (
  <div>
    <h2>---Heading---</h2>
    {Object.entries(fontSize).map(([headingName, headingSize]) => (
      <HeadingBasestyle key={headingName} headingsize={headingSize}>
        {headingName}
      </HeadingBasestyle>
    ))}
  </div>
);

export default Headings;
