import React from 'react';
import Button from '../Shared/Buttons';
import styles from './DashInfo.module.scss';
import { useRouter } from 'next/router';

export interface DashProps {
  progressValue: number;
  maxValue?: number;
}

const SummaryDash: React.FC<DashProps> = ({ progressValue, maxValue }) => {
  return (
    <div className={styles.summaryDash}>
      <p className="paragraph--p3">{maxValue ? `${maxValue}/` : 'retrieved'}</p>
      <h3 className="heading--h3">{progressValue}</h3>
      <p className="paragraph--p2">{maxValue ? 'Words' : 'points'}</p>
    </div>
  );
};
export const PointsDash: React.FC<DashProps> = ({ progressValue }) => {
  return <SummaryDash progressValue={progressValue} />;
};

export const WordsDash: React.FC<DashProps> = ({ progressValue, maxValue }) => {
  return <SummaryDash progressValue={progressValue} maxValue={maxValue} />;
};

export const LearningDash: React.FC<DashProps> = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sprint-summary');
  };
  return (
    <>
      <div className={styles.learningDashTop}>
        <div className={styles.divider}></div>
        <div className={styles.sideDivider}>
          <p>x2</p>
          <p className="paragraph--p2">multiplier</p>
        </div>
        <div className={styles.sideDivider}>
          <p>30</p>
          <p className="paragraph--p2">points</p>
        </div>
      </div>
      <div className={styles.learningDashBottom}>
        <img src="./stars.svg" />
        <h2 className="heading--h2">negative</h2>
        <h2 className={`heading--h2 ${styles.translation}`}>perdre</h2>
        <div>
          <Button color="primary" label="Right" alt="Right" onClick={handleClick} />
          <Button color="pink" label="Wrong" alt="Wrong" onClick={handleClick} />
        </div>
      </div>
    </>
  );
};
