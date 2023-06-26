import React from 'react';
import styles from './AudioCallSummary.module.scss';
import SummaryFrame from '../../Shared/SummaryFrame';
import CircularDashboard from '../../Shared/CircularDashboard';
import { WordsDash, LikeDash } from '../../DashInfo';

const AudioCallSummary = () => {
  return (
    <SummaryFrame summaryHeader="Your Audio-Call">
      <div className={styles.summaryDashGroup}>
        <CircularDashboard
          radius={60}
          progressValue={4}
          progressColor={'#945069'}
          maxValue={4}
          maxColor={'#945069'}
          strokeWidth={5}
          startPoint={-90}
          DashInfoComponent={() => <LikeDash progressValue={4} />}
        />
        <CircularDashboard
          radius={60}
          progressValue={10 + 10}
          progressColor={'#639B6D'}
          maxValue={20}
          maxColor={'#c3dce3'}
          strokeWidth={5}
          startPoint={-90}
          DashInfoComponent={() => <WordsDash progressValue={10} maxValue={20} />}
        />
      </div>
    </SummaryFrame>
  );
};

export default AudioCallSummary;
