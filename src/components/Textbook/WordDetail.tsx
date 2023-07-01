import React from 'react';

import Styles from './textbook.module.scss';
import Button from '../Shared/Buttons';
import Setting from '../../../public/setting.svg';
import Play from '../../../public/play.svg';

interface wordDetailProps {
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
}

const WordDetail = (props: wordDetailProps) => {
  return (
    <div className={Styles.wordDetail}>
      <div className={Styles.leftImage}>
        <img className={Styles.image} src={props.imgSrc} alt={`${props.name} image`} />
        <div className={Styles.buttonContainer}>
          <button>
            <img src="flag.svg" alt="encountered icon" />
            <p>&nbsp;{props.encountered}</p>
            <p>&nbsp;encountered</p>
          </button>
          <button>
            <img src="star.svg" alt="learned icon" />
            <p>&nbsp;{props.learned}</p>
            <p>&nbsp;learned</p>
          </button>
          <button>
            <img src="thunder.svg" alt="bestSeries icon" />
            <p>&nbsp;{props.bestSeries}</p>
            <p>&nbsp;best series</p>
          </button>
        </div>
      </div>

      <div className={Styles.rightDetail}>
        <div className={Styles.word}>
          <div className={Styles.wordName}>
            <h3 className="heading-h3">
              {props.name} / <span className={Styles.synonyms}>{props.synonyms}</span>
            </h3>
            <Play alt="play icon" />
          </div>
          <div className={Styles.phonetic}>
            <p className="paragraph-p1">{props.phonetic}</p>
          </div>
        </div>

        <div className={Styles.explain}>
          <p className="paragraph-p2">{props.definition}</p>
          <hr />
          <p className="paragraph-p2">{props.example}</p>
        </div>

        <div className={Styles.buttons}>
          <Button
            outline={false}
            color={props.isLearnt ? 'greenLight' : 'green'}
            label={props.isLearnt ? 'Remove from learned' : 'Add to leanred'}
          />
          <Button
            outline={false}
            color={props.inDictionary ? 'orangeLight' : 'orange'}
            label={props.inDictionary ? 'Remove from dictionary' : 'Add to dictionary'}
          />
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
