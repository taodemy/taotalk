import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './textbook.module.scss';
import Heading from './Heading';
import Button from '../Shared/Buttons';
import Subheading from './Subheading';
import WordDetail from './WordDetail';
import Empty from './Empty';
import PageNumber from './PageNumber';
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
    [key: string]: { level: string; dictionary: Word[] };
  }>({
    A1: {
      level: 'Easy',
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
          encountered: 1,
          learned: 1,
          bestSeries: 2,
        },
      ],
    },
    A2: {
      level: 'Easy',
      dictionary: [],
    },
    B1: {
      level: 'Medium',
      dictionary: [],
    },
    B2: {
      level: 'Medium',
      dictionary: [],
    },
    C1: {
      level: 'Hard',
      dictionary: [],
    },
    C2: {
      level: 'Hard',
      dictionary: [],
    },
  });

  const [selectedLevel, setSelectedLevel] = useState<string>('A1');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
  };

  const handleLearnedToggle = (wordName: string) => {
    setDictionaries((prevDictionaries) => {
      const updatedDictionaries = { ...prevDictionaries };
      const dictionary = updatedDictionaries[selectedLevel].dictionary;
      const wordIndex = dictionary.findIndex((word) => word.name === wordName);
      if (wordIndex !== -1) {
        dictionary[wordIndex].isLearnt = !dictionary[wordIndex].isLearnt;
      }
      return updatedDictionaries;
    });
  };

  const handleDictionaryToggle = (wordName: string) => {
    setDictionaries((prevDictionaries) => {
      const updatedDictionaries = { ...prevDictionaries };
      const dictionary = updatedDictionaries[selectedLevel].dictionary;
      const wordIndex = dictionary.findIndex((word) => word.name === wordName);
      if (wordIndex !== -1) {
        dictionary[wordIndex].inDictionary = !dictionary[wordIndex].inDictionary;
      }
      return updatedDictionaries;
    });
  };

  return (
    <article className={Styles.textbook}>
      <section>
        <Heading handleDropdown={handleDropdownToggle} isDropdownOpen={isDropdownOpen} />
      </section>
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
              handleLearnedToggle={handleLearnedToggle}
              handleDictionaryToggle={handleDictionaryToggle}
            />
          ))
        ) : (
          <Empty />
        )}
      </section>
      <section>
        <PageNumber />
      </section>
    </article>
  );
};

export default Dictionary;
