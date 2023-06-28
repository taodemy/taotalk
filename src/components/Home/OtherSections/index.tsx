import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';
import styles from './OtherSections.module.scss';

const OtherSections = () => {
  return (
    <>
      {/* <section className={styles.languageSectionContainer}>
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
      </section> */}
      <section className="bg-gray-100">
        <div className="mx-auto grid xs:px-[8px] xs:py-[16px] md:max-w-[1216px] md:px-[32px] md:py-[40px] xl:max-w-[1180px] xl:grid-cols-2 xl:gap-[26px] xl:pb-0 xl:pt-[26px]">
          <div className="mx-0 my-auto flex flex-col xs:ml-0 xl:ml-[100px] xl:flex-none">
            <HeadingDescription
              headingContent="Increase your vocabulary"
              descriptionContent="Traditional and new effective approaches to word study"
            />
            <Button outline={false} color="cyanLight" label="Textbook →" />
          </div>
          <img src="/vocabulary.svg" alt="Vocabulary" className="mx-0 my-auto sm:w-full" />
        </div>
      </section>
      <section className="mx-auto grid sm:px-[8px] sm:py-[16px] md:px-[32px] md:py-0 lg:max-w-[1180px] lg:grid-cols-2 lg:px-[0] lg:py-[95px] xl:gap-[20px] xl:px-[0] ">
        <img
          src="/progress.svg"
          alt="Statistics"
          className="mx-0 my-auto sm:mb-[60px] sm:w-full md:mb-[0] lg:h-[409px] lg:w-auto"
        />
        <div className="mx-0 flex flex-col sm:pb-[60px] md:pb-[120px] md:pt-[60px] lg:my-auto lg:ml-auto lg:block lg:py-[0] xl:max-w-[475px]">
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
