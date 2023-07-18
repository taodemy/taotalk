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
  const [listViewChecked, setListViewChecked] = useState(true);
  const [buttonViewChecked, setButtonViewChecked] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = listViewChecked ? 3 : 8;
  const startIndex = (currentPage - 1) * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;

  const handleListViewChange = () => {
    setListViewChecked(!listViewChecked);
    if (
      !listViewChecked &&
      currentPage > Math.ceil(dictionaries[selectedLevel].dictionary.length / 8)
    ) {
      setCurrentPage(1);
    }
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
      <section className={listViewChecked ? '' : Styles.wordDetailGrid}>
        {dictionaries[selectedLevel].dictionary.length > 0 &&
          dictionaries[selectedLevel].dictionary
            .slice(startIndex, endIndex)
            .map((word, index) => (
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
                buttonViewChecked={buttonViewChecked}
                listViewChecked={listViewChecked}
              />
            ))}
      </section>
      {dictionaries[selectedLevel].dictionary.length < 1 && (
        <section>
          <Empty />
        </section>
      )}
      {dictionaries[selectedLevel].dictionary.length > 0 && (
        <section>
          <PageNumber
            totalWords={dictionaries[selectedLevel].dictionary.length}
            wordsPerPage={wordsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>
      )}
    </article>
  );
};

export default Textbook;
