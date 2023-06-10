import Image from 'next/image';
import LanguageImage from '../../public/language.svg';
import VocabularyImage from '../../public/vocabulary.svg';
import ProgressImage from '../../public/progress.svg';
import HeadingDescription from '../components/HeadingDescription';
import Button from '../components/Buttons';

export default function Home() {
  return (
    <>
      <section>
        <h1>Learning and teaching online, made easy.</h1>
      </section>
      <section>
        <section className="grid-t grid-t-cols-1 m-x-50 md:grid-t-cols-2 md:p-x-370 languageSectionContainer">
          <div className="p-y-77.5">
            <Image src={LanguageImage} alt="Language" className="ImgInContainer--full" />
          </div>
          <div className="verticalCentered">
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
        <div className="bgColor--GreyLight">
          <section className="grid-t grid-t-cols-1 bgColor--GreyLight m-x-50 md:grid-t-cols-2 md:p-x-370 vocabularySectionContainer">
            <div className="verticalCentered" style={{ marginLeft: '80px' }}>
              <HeadingDescription
                headingContent="Increase your vocabulary"
                descriptionContent="Traditional and new effective approaches to word study"
              />
              <Button color="light" label="Textbook →" />
            </div>
            <div className="p-t-26.03">
              <Image src={VocabularyImage} alt="Vocabulary" className="ImgInContainer--full" />
            </div>
          </section>
        </div>
        <section className="grid-t grid-t-cols-1 m-x-50 md:grid-t-cols-2 md:p-x-370 statisticsSectionContainer">
          <div className="p-y-95.37">
            <Image src={ProgressImage} alt="Language" className="ImgInContainer--full" />
          </div>
          <div className="verticalCentered">
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
