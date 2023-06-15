import React from 'react';
import Button from '../../components/Shared/Buttons';
import ScrollArea from '../../components/Shared/ScrollArea';
import Label from '../../components/Shared/Label';
import CircularDashboard from '../../components/Shared/CircularDashboard';
import { PointsDash, WordsDash } from '../../components/DashInfo';
import styles from './SprintSummary.module.scss';

interface TitleListProps {
  titleName: string;
  labelName: string;
  labelColor: string;
  labelBgColor: string;
}
const TitleList: React.FC<TitleListProps> = ({
  titleName,
  labelName,
  labelColor,
  labelBgColor,
}) => {
  return (
    <div>
      <div className={styles.titleListContainer}>
        <h3 className="heading--h3">{titleName}</h3>
        <Label fontColor={`${labelColor}`} bgColor={`${labelBgColor}`}>
          {labelName}
        </Label>
      </div>
      <ScrollArea />
    </div>
  );
};

const SprintSummary = () => {
  return (
    <section className={styles.sprintSummaryConatiner}>
      <div>
        <div className={styles.summaryDetails}>
          <img src="./books.svg" alt="books" />
          <div>
            <h3 className="heading--h3">Your Sprint</h3>
            <p className={`paragraph--p2 ${styles.summaryComment}`}>You did pretty good!</p>
            <div className={styles.summaryDashGroup}>
              <CircularDashboard
                radius={60}
                progressValue={240}
                progressColor={'#2b788b'}
                maxValue={500}
                maxColor={'#c3dce3'}
                strokeWidth={5}
                DashInfoComponent={() => <PointsDash progressValue={65} />}
              />
              <CircularDashboard
                radius={60}
                progressValue={30}
                progressColor={'#639B6D'}
                maxValue={40}
                maxColor={'#c3dce3'}
                strokeWidth={5}
                DashInfoComponent={() => <WordsDash progressValue={30} maxValue={40} />}
              />
            </div>
          </div>
        </div>
        <div className={styles.summaryButtonGroup}>
          <button>
            <img src="./refresh.svg" alt="refresh" />
            <p>Play it again</p>
          </button>
          <Button color="light" label="Go to textbook" />
        </div>
      </div>

      <div className={styles.vocabularyListContainer}>
        <div>
          <TitleList
            titleName="I know"
            labelName="15 words"
            labelColor="#2B788B"
            labelBgColor="#C3DCE3"
          />
          <TitleList
            titleName="I don't know"
            labelName="15 words"
            labelColor="#945069"
            labelBgColor="#F2D4DC"
          />
        </div>
      </div>
    </section>
  );
};

export default SprintSummary;
