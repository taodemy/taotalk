import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './textbook.module.scss';
import Heading from './Heading';
import Button from '../Shared/Buttons';
import Subheading from './Subheading';
import WordDetail from './WordDetail';
import Empty from './Empty';
const Dictionary = () => {
  interface Word {
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
  const [dictionaries, setDictionaries] = useState<{
    [key: string]: { level: string; isSelected: boolean; dictionary: Word[] };
  }>({
    A1: {
      level: 'Easy',
      isSelected: true,
      dictionary: [
        {
          name: 'remark',
          synonyms: 'note',
          phonetic: '[rimɑ́ːrk]',
          definition: "To remark is to say something. - Remarquer, c'est dire quelque chose",
          example:
            "The teacher remarked on how quickly the students were learning. L'enseignant a noté la rapidité avec laquelle les élèves apprenaient.",
          isLearnt: false,
          inDictionary: true,
          imgSrc: 'remark.png',
          encountered: 0,
          learned: 0,
          bestSeries: 0,
        },
        {
          name: 'awful',
          synonyms: 'terrible',
          phonetic: '[ɔ́ːfəl]',
          definition: "To remark is to say something. - Remarquer, c'est dire quelque chose",
          example:
            "The teacher remarked on how quickly the students were learning. L'enseignant a noté la rapidité avec laquelle les élèves apprenaient.",
          isLearnt: true,
          inDictionary: false,
          imgSrc: 'awful.png',
          encountered: 5,
          learned: 1,
          bestSeries: 0,
        },
      ],
    },
    A2: {
      level: 'Easy',
      isSelected: false,
      dictionary: [],
    },
    B1: {
      level: 'Medium',
      isSelected: false,
      dictionary: [],
    },
    B2: {
      level: 'Medium',
      isSelected: false,
      dictionary: [],
    },
    C1: {
      level: 'Hard',
      isSelected: false,
      dictionary: [],
    },
    C2: {
      level: 'Hard',
      isSelected: false,
      dictionary: [],
    },
  });

  const [selectedLevel, setSelectedLevel] = useState<string>('A1');

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
  };

  return (
    <article className={Styles.textbook}>
      <Heading />
      <section className={Styles.subheading}>
        {Object.keys(dictionaries).map((key) => (
          <Subheading
            key={key}
            name={key}
            level={dictionaries[key].level}
            selected={selectedLevel}
            onLevelSelect={handleLevelSelect}
          />
        ))}
      </section>
      <section>
        {dictionaries[selectedLevel].dictionary.length > 0 ? (
          dictionaries[selectedLevel].dictionary.map((word, index) => (
            <WordDetail
              key={index}
              name={word.name}
              synonyms={word.synonyms}
              phonetic={word.phonetic}
              definition={word.definition}
              example={word.example}
              isLearnt={word.isLearnt}
              inDictionary={word.inDictionary}
              imgSrc={word.imgSrc}
              encountered={word.encountered}
              learned={word.learned}
              bestSeries={word.bestSeries}
            />
          ))
        ) : (
          <Empty />
        )}
      </section>
    </article>
  );
};

export default Dictionary;
