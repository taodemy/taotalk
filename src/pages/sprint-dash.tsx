import React from 'react';
import CircleDashboard from '../components/Shared/CircularDashboard';

export default function SprintDashboardPage() {
  // return <CircleDashboard progress={60}/>
  const fixedValue = 65;
  const maxValue = 100;
  return (
    <div>
      <CircleDashboard fixedValue={fixedValue} maxValue={maxValue} />
    </div>
  );
}
