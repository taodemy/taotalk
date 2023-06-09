import React from 'react';
import styles from './SprintDash.module.scss';
import CircularDashboard from '../../Shared/CircularDashboard';
import { LearningDash } from '../../DashInfo';
import DirectionGuide from '../../Shared/DirectionGuide';

const SprintDash = () => {
  return (
    <section className={styles.sprintDashContainer}>
      <CircularDashboard
        radius={250}
        progressValue={65}
        progressColor={'#2b788b'}
        maxValue={100}
        maxColor={'#c3dce3'}
        strokeWidth={8}
        startPoint={0}
        DashInfoComponent={() => <LearningDash progressValue={65} />}
      />
      <DirectionGuide guideDetails="← →" />
    </section>
  );
};

export default SprintDash;
