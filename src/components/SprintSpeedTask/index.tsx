import React from 'react';
import styles from './SprintSpeedTask.module.scss';
import Button from '../Shared/Buttons';
import Label from '../Shared/Label';
import Image from 'next/image';

const SprintSpeedTask = () => {
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
              <div className="flex gap-[24px]">
                <Button color="green" outline={true} size="round" label="A1" />
                <Button color="yellow" outline={true} size="round" label="A2" />
                <Button color="orange" outline={true} size="round" label="B1" />
                <Button color="red" outline={true} size="round" label="B2" />
                <Button color="pink" outline={true} size="round" label="C1" />
                <Button color="cyan" outline={true} size="round" label="C2" />
              </div>
            </div>
            <Button color="cyanDark" label="Get started" outline={false} />
          </div>
        </section>
      </section>
    </>
  );
};

export default SprintSpeedTask;
