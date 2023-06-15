import React from 'react';
import styles from './SprintDash.module.scss';
import '../../styles/color.scss';
import CircularDashboard from '../../components/Shared/CircularDashboard';
import { LearningDash } from '../../components/DashInfo';

const SprintDash = () => {
  return (
    <section className={styles.sprintDashContainer}>
      <CircularDashboard
        radius={300}
        progressValue={65}
        progressColor={'#2b788b'}
        maxValue={100}
        maxColor={'#c3dce3'}
        strokeWidth={10}
        DashInfoComponent={() => <LearningDash progressValue={65} />}
      />
      <div className={styles.directionInstruction}>
        <label className="paragraph--p4">*You can also use the</label>
        <div>
          <label className="paragraph--p3">← →</label>
        </div>
        <label className="paragraph--p4">keys on the keyboard</label>
      </div>
    </section>
  );
};

export default SprintDash;
