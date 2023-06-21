import React from 'react';
import styles from './ScrollRow.module.scss';
import IconButton from '../../Buttons/IconButton';

interface ScrollRowProps {
  itemOne: string;
  itemTwo: string;
  className?: string;
}
const ScrollRow: React.FC<ScrollRowProps> = ({ itemOne, itemTwo }) => {
  return (
    <div className={styles.scrollRow}>
      <IconButton iconTypes="player" />
      <div className={styles.textContainer}>
        <p className={`paragraph--p2 ${styles.scrollFontBlack}`}>{itemOne}</p>
        <p className={`paragraph--p2 ${styles.translation}`}>{itemTwo}</p>
      </div>
    </div>
  );
};

export default ScrollRow;
