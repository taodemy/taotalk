import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';

const OtherSections = () => {
  return (
    <>
      <section className="languageSectionContainer">
        <img src="/language.svg" alt="Language" className="imgContainer--full" />
        <div>
          <HeadingDescription
            headingContent="Learn a language in a playful way"
            descriptionContent="Make learning words more fun with mini-games"
          />
          <div className="languageButtonsGap">
            <Button
              variant="bouncing"
              color="pinkLight"
              label="Sprint →"
              src="/sprint.svg"
              alt="sprint"
            />
            <Button
              variant="bouncing"
              color="cyanLight"
              label="Audio-call →"
              src="/audio-call.svg"
              alt="video call"
              buttonWidthIncrease={76}
            />
          </div>
        </div>
      </section>
      <section className="vocabularySectionContainer">
        <div>
          <HeadingDescription
            headingContent="Increase your vocabulary"
            descriptionContent="Traditional and new effective approaches to word study"
          />
          <Button color="cyanLight" label="Textbook →" />
        </div>
        <img src="/vocabulary.svg" alt="Vocabulary" className="imgContainer--full" />
      </section>
      <section className="statisticsSectionContainer">
        <img src="/progress.svg" alt="Statistics" className="imgContainer--full" />
        <div>
          <HeadingDescription
            headingContent="Watch your progress every day"
            descriptionContent="Save statistics on your achievements, words learned, and mistakes"
          />
          <Button color="cyanLight" label="Statistics →" />
        </div>
      </section>
    </>
  );
};

export default OtherSections;
