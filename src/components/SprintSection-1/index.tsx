import React from 'react';
import { useState } from 'react';
import styles from './SprintSection-1.module.scss';
import Button from '../Shared/Buttons';
import Label from '../Shared/Label';
import LevelSelector from './LevelSelector';
import Image from 'next/image';

const SprintSection = () => {
  const levels = [
    { name: 'A1', color: 'green' },
    { name: 'A2', color: 'yellow' },
    { name: 'B1', color: 'orange' },
    { name: 'B2', color: 'red' },
    { name: 'C1', color: 'pink' },
    { name: 'C2', color: 'cyan' },
  ];

  const [isActive, setIsActive] = useState(Array(levels.length).fill(false));

  return (
    <>
      <section className={styles.body_section}>
        <section className={styles.sprint_section}>
          <Image src="/running.svg" alt="running figure" width={250} height={400} />

          <div className={styles.sprint_section__main_section}>
            <div className={styles.description}>
              <div className={styles.description__heading}>
                <h2 className="heading--h2">Sprint</h2>
                <Label fontColor={styles.cyanDark} bgColor={styles.cyanLight}>
                  speed task
                </Label>
              </div>
              <p className="paragraph--p2">
                Trains the skill of fast translation. You have to choose if the translation
                corresponds to the suggested word
              </p>
            </div>
            <div className={styles.levels}>
              <p className="paragraph--p3">Choose a level:</p>
              <div className={styles.levels__list}>
                {levels.map((level, index) => (
                  <LevelSelector
                    key={index}
                    level={level.name}
                    color={level.color}
                    active={isActive[index]}
                    handleClick={() => {
                      let newActives = Array(levels.length).fill(false);
                      newActives[index] = true;
                      setIsActive(newActives);
                    }}
                  />
                ))}
              </div>
            </div>
            <Button color="cyanDark" label="Get started" outline={false} />
          </div>
        </section>
      </section>
    </>
  );
};

export default SprintSection;
