import React from 'react';
import Styles from './wordDetail.module.scss';
import Button from '../../Shared/Buttons';
import Play from '../../../../public/play.svg';

interface WordDetailProps {
  name: string;
  synonyms: string;
  phonetic: string;
  definition: string;
  example: string;
  isLearnt: boolean;
  inDictionary: boolean;
  imgSrc: string;
  encountered: number;
  learned: number;
  bestSeries: number;
  buttonViewChecked: boolean;
  handleLearnedToggle: (wordName: string) => void;
  handleDictionaryToggle: (wordName: string) => void;
}

const WordDetail = ({
  name,
  synonyms,
  phonetic,
  definition,
  example,
  isLearnt,
  inDictionary,
  imgSrc,
  encountered,
  learned,
  bestSeries,
  buttonViewChecked,
  handleLearnedToggle,
  handleDictionaryToggle,
}: WordDetailProps) => {
  return (
    <div className={Styles.wordDetail}>
      <div className={Styles.leftImage}>
        <img className={Styles.image} src={imgSrc} alt={`${name} image`} />
        <div className={Styles.buttonContainer}>
          <button>
            <img src="flag.svg" alt="encountered icon" />
            <p>{encountered}</p>
            <p className={Styles.hidden}>encountered</p>
          </button>
          <button>
            <img src="star.svg" alt="learned icon" />
            <p>{learned}</p>
            <p className={Styles.hidden}>learned</p>
          </button>
          <button>
            <img src="thunder.svg" alt="bestSeries icon" />
            <p>{bestSeries}</p>
            <p className={Styles.hidden}>best series</p>
          </button>
        </div>
      </div>

      <div className={Styles.rightDetail}>
        <div className={Styles.word}>
          <div className={Styles.wordName}>
            <h3 className="heading--h3">
              {name}
              <span>/</span>
              <span className={Styles.synonyms}>{synonyms}</span>
            </h3>
            <div className={Styles.play}>
              <Play viewBox="0 0 40 40" alt="play icon" />
            </div>
          </div>
          <div>
            <p className="paragraph--p2">{phonetic}</p>
          </div>
        </div>

        <div className={Styles.explain}>
          <p className={`paragraph--p2 ${Styles.definition}`}>{definition}</p>
          <hr />
          <p className="paragraph--p2">{example}</p>
        </div>
        {buttonViewChecked && (
          <div className={Styles.buttons}>
            <Button
              outline={false}
              color={isLearnt ? 'greenLight' : 'green'}
              label={isLearnt ? 'Remove from learned' : 'Add to learned'}
              onClick={() => handleLearnedToggle(name)}
            />
            <Button
              outline={false}
              color={inDictionary ? 'orangeLight' : 'orange'}
              label={inDictionary ? 'Remove from dictionary' : 'Add to dictionary'}
              onClick={() => handleDictionaryToggle(name)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WordDetail;
