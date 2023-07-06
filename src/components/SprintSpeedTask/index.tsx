import React from 'react';
import styles from './SprintSpeedTask.module.scss';
import RoundButtonArray from './RoundButtonArray';
import Label from '../Shared/Label';
import type { ButtonColor } from '../Shared/Buttons';
import Image from 'next/image';
import Button from '../Shared/Buttons';

const SprintSpeedTask = () => {
  const levels: { color: ButtonColor; label: string }[] = [
    { color: 'green', label: 'A1' },
    { color: 'yellow', label: 'A2' },
    { color: 'orange', label: 'B1' },
    { color: 'red', label: 'B2' },
    { color: 'pink', label: 'C1' },
    { color: 'cyan', label: 'C2' },
  ];

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
              <RoundButtonArray levels={levels} />
            </div>
            <Button color="cyanDark" label="Get started" outline={false} />
          </div>
        </section>
      </section>
    </>
  );
};

export default SprintSpeedTask;
