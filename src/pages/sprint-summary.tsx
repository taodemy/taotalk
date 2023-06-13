import React from 'react';
import Button from '../components/Shared/Buttons';
import ScrollArea from '../components/Shared/ScrollArea';
import CircleDashboard from '../components/Shared/CircularDashboard';
import { PointsDash } from '../components/DashInfo';

export default function SprintSummaryPage() {
  return (
    <section className="sprintSummaryContainer">
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '60px 40px' }}>
        <div className="summaryDetails">
          <img src="./books.svg" alt="books" style={{ width: '100%', height: 'auto' }} />
          <div>
            <h3 className="heading--h3">Your Sprint</h3>
            <p className="paragraph--p2">You did pretty good!</p>
            <div style={{ display: 'flex' }}>
              <CircleDashboard progressValue={65} maxValue={100} DashInfoComponent={PointsDash} />
              <CircleDashboard progressValue={65} maxValue={100} DashInfoComponent={PointsDash} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ fontSize: '16px', fontWeight: '700' }}>Play it again</p>
            <img src="./refresh.svg" alt="refresh" />
          </div>
          <Button color="light" label="Go to textbook" />
        </div>
      </div>
      <div
        className="vocabularyList"
        style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '40px 40px' }}
      >
        <div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h3 className="heading--h3">I know</h3>
            <p>15 words</p>
          </div>
          <ScrollArea />
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h3 className="heading--h3">I don&apos;t know</h3>
            <p>15 words</p>
          </div>
          <ScrollArea />
        </div>
      </div>
    </section>
  );
}
