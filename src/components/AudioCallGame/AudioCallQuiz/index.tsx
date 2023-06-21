import React from 'react';
import Button from '../../Shared/Buttons';
import DirectionGuide from '../../../components/Shared/DirectionGuide';
import CoverImage from '../../Shared/Buttons/ImageButton';
import ScrollRow from '../../Shared/ScrollArea/ScrollRow';
import styles from '../AudioCallGame.module.scss';

const wordList = ['prêt hypothécaire', 'correct', 'selon laquelle', 'citer', 'nourriture'];
const AudioCallQuiz = () => {
  return (
    <div className={styles.audioCall}>
      <CoverImage
        src="/food.svg"
        InjectedComponent={() => (
          <div className={styles.passedInComponent}>
            <ScrollRow itemOne="food" itemTwo="- nourriture" />
          </div>
        )}
      />
      <img src="/fourLikes.svg" alt="four likes" />
      <div className={styles.wordListButton}>
        {wordList.map((item, index) => (
          <div key={index}>
            <Button variant="outline" label={item} color="grey" size="normal" />
          </div>
        ))}
      </div>
      <Button color="primary" label="Next" />
      <DirectionGuide guideDetails="1 - 5" />
    </div>
  );
};

export default AudioCallQuiz;
