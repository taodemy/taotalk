import HeadingDescription from '../components/HeadingDescription';
import Button from '../components/Buttons';

export default function Home() {
  return (
    <>
      <section>
        <h1>Learning and teaching online, made easy.</h1>
      </section>
      <section>
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
                color="pink"
                label="Sprint →"
                src="/sprint.svg"
                alt="sprint"
              />
              <Button
                variant="bouncing"
                color="light"
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
            <Button color="light" label="Textbook →" />
          </div>
          <img src="./vocabulary.svg" alt="Vocabulary" className="imgContainer--full" />
        </section>
        <section className="statisticsSectionContainer">
          <img src="./progress.svg" alt="Statistics" className="imgContainer--full" />
          <div>
            <HeadingDescription
              headingContent="Watch your progress every day"
              descriptionContent="Save statistics on your achievements, words learned, and mistakes"
            />
            <Button color="light" label="Statistics →" />
          </div>
        </section>
      </section>
    </>
  );
}
