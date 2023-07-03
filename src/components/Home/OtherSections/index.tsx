import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';
import styles from './OtherSections.module.scss';

const OtherSections = () => {
  return (
    <>
      <section className="mx-auto grid sm:px-[8px] sm:py-[16px] lg:max-w-[1180px] lg:grid-cols-2 lg:gap-[120px] lg:py-[78px]">
        <img
          src="/language.svg"
          alt="Language"
          className="sm:hidden md:mx-auto md:block lg:my-auto lg:max-h-[445px] lg:max-w-[580px]"
        />
        <div className="flex flex-col sm:items-center sm:py-[60px] md:order-first md:py-[115px] lg:order-last lg:my-auto lg:items-start">
          <HeadingDescription
            headingContent="Learn a language in a playful way"
            descriptionContent="Make learning words more fun with mini-games"
          />
          <div className="flex sm:min-h-[150px] sm:gap-[20px] lg:gap-[21px]">
            <div className="flex flex-col">
              <img
                className="z-10 hover:translate-y-[-3px] sm:h-[112px] sm:w-[134px] lg:z-10 lg:h-[106px]"
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
                className="z-10 hover:translate-y-[-3px] sm:h-[112px] sm:w-[112px] lg:h-[106px]"
                src="/audio-call.svg"
                alt="video call"
              />
              <div>
                <span className="p2 rounded-[14px] bg-tk_cyanLight font-bold text-tk_cyanDark sm:px-[18px] sm:pb-[14px] sm:pt-[82px] lg:px-[34px] lg:pb-[14px] lg:pt-[82px]">
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
