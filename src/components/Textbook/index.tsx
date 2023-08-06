import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './textbook.module.scss';
import PageTitle from './PageTitle';
import SubTitle from './SubTitle';
import WordDetail from './WordDetail';
import Empty from './Empty';
import PageNumber from './PageNumber';

import dictionaryData from './dictionaryData.json';
import Button from '../Shared/Buttons';
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
  const [isListView, setisListView] = useState(true);
  const [isButtonShow, setisButtonShow] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = isListView ? 3 : 8;
  const startIndex = (currentPage - 1) * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;

  useEffect(() => {
    if (!isListView) {
      if (currentPage > Math.ceil(dictionaries[selectedLevel].dictionary.length / wordsPerPage)) {
        const totalPages = Math.ceil(dictionaries[selectedLevel].dictionary.length / wordsPerPage);
        setCurrentPage(totalPages > 0 ? totalPages : 1);
      }
    }
  }, [isListView, currentPage, dictionaries, selectedLevel, wordsPerPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel]);

  const handleListViewChange = () => {
    setisListView(!isListView);
  };

  const handleButtonViewChange = () => {
    setisButtonShow(!isButtonShow);
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
    <article className="flex flex-col items-center justify-center gap-10 bg-tk_greyLight">
      <PageTitle
        isListView={isListView}
        isButtonShow={isButtonShow}
        handleListViewChange={handleListViewChange}
        handleButtonViewChange={handleButtonViewChange}
      />
      <section className="flex gap-10">
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
      <section className={isListView ? 'flex flex-col gap-10' : 'grid grid-cols-3 gap-5'}>
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
                isButtonShow={isButtonShow}
                isListView={isListView}
              />
            ))}
        {!isListView && endIndex < dictionaries[selectedLevel].dictionary.length && (
          <div className="shadow-[0_23px_46px_-11px_rgba(52, 41, 39, 0.08)] flex items-center justify-center rounded-[14px] bg-white">
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              <p className="paragraph--p2 font-bold leading-normal text-black">Next page →</p>
            </button>
          </div>
        )}
      </section>
      {dictionaries[selectedLevel].dictionary.length < 1 && (
        <section className="w-[800px]">
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
