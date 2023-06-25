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
              <Button
                variant="normal"
                outline={false}
                color="pinkLight"
                label="Sprint →"
                style={{ width: '129px' }}
              />
            </div>
            <div>
              <div>
                <img className={styles.audioCallImage} src="/audio-call.svg" alt="video call" />
              </div>
              <Button
                variant="normal"
                outline={false}
                color="cyanLight"
                label="Audio-call →"
                style={{ width: '172px' }}
              />
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
