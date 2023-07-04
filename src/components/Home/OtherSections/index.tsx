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
      <section className="bg-tk_greyLight">
        <div className="mx-auto grid px-2 py-4 md:px-8 md:py-10 lg:max-w-[1180px] lg:grid-cols-2 lg:px-0 lg:pb-0 lg:pt-[26px]">
          <div className="mx-0 ml-0 flex flex-col py-4 md:py-[60px] lg:my-auto lg:ml-[100px] lg:block">
            <HeadingDescription
              headingContent="Increase your vocabulary"
              descriptionContent="Traditional and new effective approaches to word study"
            />
            <Button outline={false} color="cyanLight" label="Textbook →" />
          </div>
          <img
            src="/vocabulary.svg"
            alt="Vocabulary"
            className="mx-auto my-auto h-[200px] md:h-[363px] lg:h-auto
            "
          />
        </div>
      </section>
      <section className="mx-auto grid px-2 py-4 md:px-8 md:py-0 lg:max-w-[1180px] lg:grid-cols-2 lg:px-0 lg:py-[95px] xl:gap-[20px] xl:px-0 ">
        <img
          src="/progress.svg"
          alt="Statistics"
          className="mx-auto my-auto mb-[60px] h-[200px] md:mb-0 md:h-[373px] lg:h-auto"
        />
        <div className="mx-0 flex flex-col pb-[60px] md:pb-[120px] md:pt-[60px] lg:my-auto lg:ml-auto lg:block lg:py-0 xl:max-w-[475px]">
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
