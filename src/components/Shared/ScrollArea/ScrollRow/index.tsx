import React, { useState } from 'react';
import styles from './ScrollRow.module.scss';
import Play from '../../../../../public/play.svg';

interface ScrollRowProps {
  itemOne: string;
  itemTwo: string;
  className?: string;
}
const ScrollRow: React.FC<ScrollRowProps> = ({ itemOne, itemTwo }) => {
  const [clicked, setClicked] = useState(false);
  const handlePlayerClick = () => setClicked(!clicked);
  return (
    <div className={styles.scrollRow} onClick={handlePlayerClick}>
      <div className={clicked ? styles.playerActive : styles.player}>
        <Play viewBox="0 0 40 40" alt="player" />
      </div>
      <div className={styles.textContainer}>
        <p className={`paragraph--p2 ${styles.scrollFontBlack}`}>{itemOne}</p>
        <p className={`paragraph--p2 ${styles.translation}`}>{itemTwo}</p>
      </div>
    </div>
  );
};

export default ScrollRow;
