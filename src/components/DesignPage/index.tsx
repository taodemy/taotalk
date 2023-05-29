import React from 'react';

import styles from './DesignPage.module.scss';
import Headings from './Headings';
import PrimaryColors from './Colors/Primary';
import SecondaryColor from './Colors/Secondary/SecondaryColor';

const DesignPage = () => {
  return (
    <div className={styles.designContainer}>
      <Headings />
      <PrimaryColors />
      <SecondaryColor />
    </div>
  );
};

export default DesignPage;
