import React from 'react';

import styles from '../../Design/Design.module.scss';

export interface StyledColorProps {
  children: string;
  colorValue: string;
}

const Colors: React.FC<StyledColorProps> = ({ children, colorValue }) => {
  return (
    <p className={styles.fontBaseStyle} style={{ color: colorValue }}>
      {children}
    </p>
  );
};

export default Colors;
