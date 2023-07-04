import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';
import styles from './OtherSections.module.scss';

const OtherSections = () => {
  return (
    <>
      <section className="mx-auto grid px-[8px] py-[16px] lg:max-w-[1180px] lg:grid-cols-2 lg:gap-[120px] lg:py-[78px]">
        <img
          src="/language.svg"
          alt="Language"
          className="hidden md:visible md:mx-auto md:block md:h-[500px] lg:my-auto lg:h-[445px]"
        />
        <div className="flex flex-col items-center py-[60px] md:order-first md:py-[115px] lg:order-last lg:my-auto lg:items-start">
          <HeadingDescription
            headingContent="Learn a language in a playful way"
            descriptionContent="Make learning words more fun with mini-games"
          />
          <div className="flex min-h-[150px] gap-[20px] lg:gap-[21px]">
            <div className="flex flex-col">
              <img
                className="z-10 h-[112px] w-[134px] hover:translate-y-[-3px] lg:z-10 lg:h-[106px]"
                src="/sprint.svg"
                alt="sprint"
              />
              <div>
                <span className="p2 rounded-[14px] bg-tk_pinkLight px-[34px] pb-[14px] pt-[82px] font-bold text-tk_pinkDark">
                  Sprint →
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="z-10 h-[112px] w-[112px] hover:translate-y-[-3px] lg:h-[106px]"
                src="/audio-call.svg"
                alt="video call"
              />
              <div>
                <span className="p2 rounded-[14px] bg-tk_cyanLight px-[18px] pb-[14px] pt-[82px] font-bold text-tk_cyanDark lg:px-[34px] lg:pb-[14px] lg:pt-[82px]">
                  Audio-call →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.vocabularySectionContainer}>
        <div>
          <HeadingDescription
            headingContent="Increase your vocabulary"
            descriptionContent="Traditional and new effective approaches to word study"
          />
          <Button outline={false} color="cyanLight" label="Textbook →" />
        </div>
        <img src="/vocabulary.svg" alt="Vocabulary" className={styles.imgContainerfull} />
      </section>
      <section className={styles.statisticsSectionContainer}>
        <img src="/progress.svg" alt="Statistics" className={styles.imgContainerfull} />
        <div>
          <HeadingDescription
            headingContent="Watch your progress every day"
            descriptionContent="Save statistics on your achievements, words learned, and mistakes"
          />
          <Button outline={false} color="cyanLight" label="Statistics →" />
        </div>
      </section>
    </>
  );
};

export default OtherSections;
