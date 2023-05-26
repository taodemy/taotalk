import React from 'react';
import styled from 'styled-components';

export interface StyledColorProps {
  children: string;
  colorValue: string;
}

const FontBasestyle = styled.p<StyledColorProps>`
  font-family: Dela Gothic One;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 120%;
  font-size: 32px;
  color: ${(props) => props.colorValue};
`;

const Colors: React.FC<StyledColorProps> = ({ children, colorValue }) => {
  return <FontBasestyle colorValue={colorValue}>{children}</FontBasestyle>;
};

export default Colors;
