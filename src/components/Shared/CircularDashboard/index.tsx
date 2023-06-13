import React from 'react';

interface CircularDashboardProps {
  progressValue: number;
  maxValue: number;
  DashInfoComponent: React.FC;
}

const CircularDashboard: React.FC<CircularDashboardProps> = ({
  progressValue,
  maxValue,
  DashInfoComponent,
}) => {
  const radius = 55;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const percentage = (progressValue / maxValue) * 100;
  const progress = (circumference * (percentage / 102)).toFixed(2);
  const remaining = (circumference - parseFloat(progress)).toFixed(2);

  return (
    <div style={{ position: 'relative', width: `${radius * 2}px`, height: `${radius * 2}px` }}>
      <svg width={radius * 2} height={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#c3dce3"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#2b788b"
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${remaining}`}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '5px 11px' }}>
          <DashInfoComponent />
        </div>
      </div>
    </div>
  );
};

export default CircularDashboard;
