import React, { ReactNode } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
  fontColor: string;
  bgColor: string;
  children: ReactNode;
}
const Label: React.FC<LabelProps> = ({ fontColor, bgColor, children }) => {
  return (
    <label
      className={styles.Label}
      style={{ color: `${fontColor}`, backgroundColor: `${bgColor}` }}
    >
      {children}
    </label>
  );
};

export default Label;
