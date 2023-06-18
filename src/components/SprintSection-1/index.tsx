import React from 'react';
import styles from './SprintSection-1.module.scss';
import Button from '../Shared/Buttons';
import Lable from '../Shared/Label';
import LevelSelector from './LevelSelector';
import Image from 'next/image';

const SprintSection = () => {
  return (
    <>
      <section className={styles.body_section}>
        <section className={styles.sprint_section}>
          <div className={styles.sprint_section__image_display}>
            <Image src="./running.svg" alt="running figure" />
          </div>
          <div className={styles.sprint_section__main_section}>
            <div className={styles.description}>
              <div className={styles.description__heading}>
                <h2 className="heading--h2">Sprint</h2>
                <Lable fontColor="#2b788b" bgColor="#C3DCE3">
                  speed task
                </Lable>
              </div>
              <p className="paragraph--p2">
                Trains the skill of fast translation. You have to choose if the translation
                corresponds to the suggested word
              </p>
            </div>
            <div className={styles.levels}>
              <p className="paragraph--p3">Choose a level:</p>
              <div className={styles.levels__list}>
                <LevelSelector level="A1 " color="green" active={false} />
                <LevelSelector level="A2" color="yellow" active={true} />
                <LevelSelector level="B1" color="orange" active={false} />
                <LevelSelector level="B2" color="red" active={false} />
                <LevelSelector level="C1" color="pink" active={false} />
                <LevelSelector level="C2" color="cyan" active={false} />
              </div>
            </div>
            <Button color="secondary" label="Get started" />
          </div>
        </section>
      </section>
    </>
  );
};

export default SprintSection;
