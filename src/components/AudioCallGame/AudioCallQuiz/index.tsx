import React from 'react';
import Button from '../../Shared/Buttons';
import DirectionGuide from '../../../components/Shared/DirectionGuide';
import CoverImage from '../../Shared/Buttons/ImageButton';
import ScrollRow from '../../Shared/ScrollArea/ScrollRow';
import styles from '../AudioCallGame.module.scss';
import { wordList } from '../../../../mockData/mockData';

const AudioCallQuiz = () => {
  return (
    <div className={styles.audioCall}>
      <div className={styles.imgWithExplain}>
        <CoverImage src="/food.svg" />
        <div className={styles.scrollRow}>
          <ScrollRow itemOne="food" itemTwo="- nourriture" />
        </div>
      </div>
      <img src="/fourLikes.svg" alt="four likes" />
      <div className={styles.wordListButton}>
        {wordList.map((item, index) => (
          <div key={index}>
            <Button
              outline={true}
              label={item}
              color={index === 2 ? 'pinkDark' : index === 4 ? 'cyanDark' : 'greyIcon'}
              size="normal"
            />
          </div>
        ))}
      </div>
      <Button outline={false} color="cyanLight" label="Next" />
      <DirectionGuide guideDetails="1 - 5" />
    </div>
  );
};

export default AudioCallQuiz;
