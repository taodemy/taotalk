import React, { useState } from 'react';
import Button from '../../Shared/Buttons';
import DirectionGuide from '../../Shared/DirectionGuide';
import styles from '../AudioCallGame.module.scss';

const wordList = ['prêt hypothécaire', 'correct', 'selon laquelle', 'citer', 'nourriture'];
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
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button variant="icon" size="large" iconTypes="playerWithLabel" />
      </div>
      <img src="/fiveLikes.svg" alt="five likes" />
      <div className={styles.wordListButton}>
        {wordList.map((item, index) => (
          <div key={index}>
            <Button variant="outline" label={item} color="grey" size="normal" />
          </div>
        ))}
      </div>
      <Button color="primary" label="I don't know" />
      {isHovered && <DirectionGuide guideDetails="1 - 5" />}
    </div>
  );
};

export default AudioCallPractice;
