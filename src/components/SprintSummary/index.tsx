import React from 'react';
import CircularDashboard from '../../components/Shared/CircularDashboard';
import { PointsDash, WordsDash } from '../../components/DashInfo';
import styles from './SprintSummary.module.scss';
import SummaryFrame from '../Shared/SummaryFrame';

const SprintSummary = () => {
  return (
    <SummaryFrame summaryHeader="Your Sprint">
      <div className={styles.summaryDashGroup}>
        <CircularDashboard
          radius={60}
          progressValue={240}
          progressColor={'#2b788b'}
          maxValue={320}
          maxColor={'#c3dce3'}
          strokeWidth={5}
          startPoint={-90}
          DashInfoComponent={() => <PointsDash progressValue={240} />}
        />
        <CircularDashboard
          radius={60}
          progressValue={30 + 10}
          progressColor={'#639B6D'}
          maxValue={40}
          maxColor={'#c3dce3'}
          strokeWidth={5}
          startPoint={-90}
          DashInfoComponent={() => <WordsDash progressValue={30} maxValue={40} />}
        />
      </div>
    </SummaryFrame>
  );
};

export default SprintSummary;
