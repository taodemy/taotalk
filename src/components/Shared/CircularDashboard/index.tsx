import React from 'react';
import styles from './CircularDash.module.scss';

interface CircularDashboardProps {
  radius: number;
  progressColor: string;
  maxColor: string;
  progressValue: number;
  maxValue: number;
  strokeWidth: number;
  startPoint: number;
  DashInfoComponent: React.FC;
}

const CircularDashboard: React.FC<CircularDashboardProps> = ({
  radius,
  progressColor,
  maxColor,
  progressValue,
  maxValue,
  strokeWidth,
  startPoint,
  DashInfoComponent,
}) => {
  const circumference = 2 * Math.PI * radius;
  const percentage = (progressValue / maxValue) * 100;
  const progress = (circumference * (percentage / 102)).toFixed(2);
  const remaining = (circumference - parseFloat(progress)).toFixed(2);

  return (
    <div className={styles.circularDash}>
      <svg width={radius * 2} height={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={maxColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${remaining}`}
          transform={`rotate(${startPoint} ${radius} ${radius})`}
        />
      </svg>
      <div className={styles.dashInfoContainer}>
        <DashInfoComponent />
      </div>
    </div>
  );
};

export default CircularDashboard;
