import React from 'react';
import { useState } from 'react';
import Styles from './textbook.module.scss';
import PageTitle from './PageTitle';
import SubTitle from './SubTitle';
import WordDetail from './WordDetail';
import Empty from './Empty';
import PageNumber from './PageNumber';

import dictionaryData from './dictionaryData.json';
const Textbook = () => {
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
  }>(dictionaryData);

  const [selectedLevel, setSelectedLevel] = useState<string>('A1');
  const [listViewChecked, setListViewChecked] = useState(false);
  const [buttonViewChecked, setButtonViewChecked] = useState(false);

  const handleListViewChange = () => {
    setListViewChecked(!listViewChecked);
  };

  const handleButtonViewChange = () => {
    setButtonViewChecked(!buttonViewChecked);
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
      <PageTitle
        listViewChecked={listViewChecked}
        buttonViewChecked={buttonViewChecked}
        handleListViewChange={handleListViewChange}
        handleButtonViewChange={handleButtonViewChange}
      />
      <section className={Styles.subheading}>
        {Object.keys(dictionaries).map((key) => (
          <SubTitle
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
      {dictionaries[selectedLevel].dictionary.length > 0 && (
        <section>
          <PageNumber />
        </section>
      )}
    </article>
  );
};

export default Textbook;
