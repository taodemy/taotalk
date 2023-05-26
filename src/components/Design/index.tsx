import React from 'react';
import styled from 'styled-components';

import Headings from './Headings';
import PrimaryColors from './Colors/Primary';
import SecondaryColor from './Colors/Secondary/SecondaryColor';

const FlowWrapper = styled.div`
  display: flexbox;
  gap: 100px;
`;

const Design = () => {
  return (
    <FlowWrapper>
      <Headings />
      <PrimaryColors />
      <SecondaryColor />
    </FlowWrapper>
  );
};

export default Design;
