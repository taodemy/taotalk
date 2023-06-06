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
      <section style={{ width: '100%' }}>
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#FFFFF',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '380px', border: '3px solid red' }}>
              <Image src={LanguageImage} width={280} alt="Language" />
            </div>
            <div style={{ width: '380px', border: '3px solid red' }}>
              <HeadingDescription />
            </div>
          </div>
          {/* <h2>Learn a language in a playful way</h2> */}
        </section>
        <section style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#F6F5F4' }}>
          {/* <h2>Increase your vocabulary</h2> */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '380px', border: '3px solid red' }}>
              <HeadingDescription />
              <Button color="light" label="Textbook->" />
            </div>
            <div style={{ width: '380px', border: '3px solid red', position: 'relative' }}>
              <Image
                src={VocabularyImage}
                width={280}
                alt="Vocabulary"
                style={{ marginLeft: '-50px' }}
              />
            </div>
          </div>
        </section>
        <section style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFF' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '380px', border: '3px solid red' }}>
              <Image src={ProgressImage} height={230} alt="Language" />
            </div>
            <div style={{ width: '380px', border: '3px solid red' }}>
              <HeadingDescription />
              <Button color="light" label="Statistics->" />
            </div>
          </div>
          {/* <h2>Watch your progress everyday</h2> */}
        </section>
      </section>
    </>
  );
}
