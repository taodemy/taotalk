import React from 'react';
import Button from '../Shared/Buttons';
import Play from '../../../public/play.svg';

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
  isListView: boolean;
  isButtonShow: boolean;
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
  isListView,
  isButtonShow,
  handleLearnedToggle,
  handleDictionaryToggle,
}: WordDetailProps) => {
  return (
    <div
      className={`shadow-[0_23px_46px_-11px_rgba(52, 41, 39, 0.08)] flex rounded-[14px] bg-white ${
        isListView ? 'w-[926px]' : 'w-[380px] flex-col'
      }`}
    >
      <div className="relative">
        <img
          className={`max-w-none object-cover ${
            isListView ? 'h-full w-[337px] rounded-l-[14px]' : 'h-[250px] w-full rounded-t-[14px]'
          }`}
          src={imgSrc}
          alt={`${name} image`}
        />
        <div
          className={`group absolute right-0 flex flex-col justify-end gap-[8px] rounded-l-[8px] bg-black  bg-opacity-70 p-[8px] text-white transition-opacity duration-300 ${
            isListView ? 'top-[40px]' : 'top-[112px]'
          }`}
        >
          <button className="flex gap-[8px]">
            <img className="mt-[3px] h-[16px] w-[16px]" src="flag.svg" alt="encountered icon" />
            <p>{encountered}</p>
            <p className={'hidden group-hover:block'}>encountered</p>
          </button>
          <button className="flex gap-[8px]">
            <img className="mt-[3px] h-[16px] w-[16px]" src="star.svg" alt="learned icon" />
            <p>{learned}</p>
            <p className={'hidden group-hover:block'}>learned</p>
          </button>
          <button className="flex gap-[8px]">
            <img className="mt-[3px] h-[16px] w-[16px]" src="thunder.svg" alt="bestSeries icon" />
            <p>{bestSeries}</p>
            <p className={'hidden group-hover:block'}>best series</p>
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col gap-[20px] ${
          isListView ? 'pb-[40px] pl-[40px] pr-[33px] pt-[40px]' : 'p-[30px]'
        }`}
      >
        <div className={`flex flex-col ${isListView ? 'gap-[12px]' : 'gap-[16px]'}`}>
          <div className={`${isListView && 'flex justify-between'}`}>
            <h3 className={`heading--h3 flex ${isListView ? 'gap-[12px]' : 'flex-col gap-[8px]'}`}>
              {name}
              {isListView && <span>/</span>}
              <span className="text-tk_greyDark">{synonyms}</span>
            </h3>
            {isListView && (
              <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-[4px] bg-tk_greyLight hover:bg-tk_cyanDark">
                <Play
                  className="h-[24px] w-[24px] text-tk_greyIcon group-hover:text-white"
                  viewBox="0 0 40 40"
                  alt="play icon"
                />
              </div>
            )}
          </div>

          <p className="paragraph--p2 tracking-[0.04rem] text-black">{phonetic}</p>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className={`paragraph--p2 font-medium leading-normal text-black`}>{definition}</p>
          <hr />
          <p className="paragraph--p2 font-medium leading-normal">{example}</p>
        </div>
        {isButtonShow && (
          <div className={`flex ${isListView ? 'gap-[20px]' : 'flex-col gap-[10px]'}`}>
            <div>
              <Button
                outline={false}
                color={isLearnt ? 'greenLight' : 'green'}
                label={isLearnt ? 'Remove from learned' : 'Add to learned'}
                onClick={() => handleLearnedToggle(name)}
              />
            </div>
            <div>
              <Button
                outline={false}
                color={inDictionary ? 'orangeLight' : 'orange'}
                label={inDictionary ? 'Remove from dictionary' : 'Add to dictionary'}
                onClick={() => handleDictionaryToggle(name)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordDetail;
