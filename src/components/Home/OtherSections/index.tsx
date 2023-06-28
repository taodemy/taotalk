import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';
import styles from './OtherSections.module.scss';

const OtherSections = () => {
  return (
    <>
      <section className={styles.languageSectionContainer}>
        <img src="/language.svg" alt="Language" className={styles.imgContainerfull} />
        <div>
          <HeadingDescription
            headingContent="Learn a language in a playful way"
            descriptionContent="Make learning words more fun with mini-games"
          />
          <div className={styles.languageButtonsGap}>
            <div>
              <div>
                <img className={styles.sprintImage} src="/sprint.svg" alt="sprint" />
              </div>
              <Button outline={false} color="pinkLight" label="Sprint →" />
            </div>
            <div>
              <div>
                <img className={styles.audioCallImage} src="/audio-call.svg" alt="video call" />
              </div>
              <Button outline={false} color="cyanLight" label="Audio-call →" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto grid sm:px-[8px] sm:py-[16px] md:max-w-[1216px] md:px-[32px] md:py-[40px] xl:max-w-[1180px] xl:grid-cols-2 xl:gap-[26px] xl:pb-0 xl:pt-[26px]">
          <div className="mx-0 my-auto flex flex-col sm:ml-0 xl:ml-[100px] xl:block">
            <HeadingDescription
              headingContent="Increase your vocabulary"
              descriptionContent="Traditional and new effective approaches to word study"
            />
            <Button outline={false} color="cyanLight" label="Textbook →" />
          </div>
          <img src="/vocabulary.svg" alt="Vocabulary" className="mx-0 my-auto w-full" />
        </div>
      </section>
      <section className="mx-auto grid sm:px-[8px] sm:py-[16px] md:max-w-[1216px] md:px-[32px] md:py-0 xl:max-w-[1180px] xl:grid-cols-2 xl:gap-[20px] xl:py-[95px] ">
        <img src="/progress.svg" alt="Statistics" className="mx-0 my-auto w-full" />
        <div className="mx-0 my-auto flex flex-col xl:block">
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
