import React, { ReactNode } from 'react';
import Button from '../../../components/Shared/Buttons';
import ScrollArea from '../../../components/Shared/ScrollArea';
import Label from '../../../components/Shared/Label';
import styles from './SummaryFrame.module.scss';

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

interface SummaryFrameProps {
  summaryHeader: string;
  children: ReactNode;
}

const SummaryFrame: React.FC<SummaryFrameProps> = ({ summaryHeader, children }) => {
  return (
    <section className={styles.sprintSummaryContainer}>
      <div>
        <div className={styles.summaryDetails}>
          <img src="./books.svg" alt="books" />
          <div>
            <h3 className="heading--h3">{summaryHeader}</h3>
            <p className={`paragraph--p2 ${styles.summaryComment}`}>You did pretty good!</p>
            {children}
          </div>
        </div>
        <div className={styles.summaryButtonGroup}>
          <button>
            <img src="./refresh.svg" alt="refresh" />
            <p className="paragraph--p2">Play it again</p>
          </button>
          <Button color="cyanLight" label="Go to textbook" />
        </div>
      </div>

      <div className={styles.vocabularyListContainer}>
        <div className="knowList">
          <TitleList
            titleName="I know"
            labelName="15 words"
            labelColor="#2B788B"
            labelBgColor="#C3DCE3"
          />
        </div>
        <div className="unKnowList">
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

export default SummaryFrame;
