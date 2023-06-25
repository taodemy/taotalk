import React, { useState } from 'react';
import Button from '../../Shared/Buttons';
import DirectionGuide from '../../Shared/DirectionGuide';
import styles from '../AudioCallGame.module.scss';
import Play from '../../../../public/play.svg';
import { wordList } from '../../../../mockData/mockData';

const AudioCallPractice = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.audioCall}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.playWithLabel}
      >
        <div>
          <Play alt="play" />
          <p className="paragraph--p1">Play</p>
        </div>
      </div>
      <img src="/fiveLikes.svg" alt="five likes" />
      <div className={styles.wordListButton}>
        {wordList.map((item, index) => (
          <div key={index}>
            <Button outline={true} label={item} color="greyIcon" size="normal" />
          </div>
        ))}
      </div>
      <Button outline={false} color="cyanLight" label="I don't know" />
      {isHovered && <DirectionGuide guideDetails="1 - 5" />}
    </div>
  );
};

export default AudioCallPractice;
