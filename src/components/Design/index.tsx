import React from 'react';

import styles from './design.module.scss'
import Headings from './Headings';
import PrimaryColors from './Colors/Primary';
import SecondaryColor from './Colors/Secondary/SecondaryColor';

const Design = () => {
  return (
    <div className = {styles.designContainer}>
      <Headings />
      <PrimaryColors />
      <SecondaryColor />
    </div>
  );
};

export default Design;
