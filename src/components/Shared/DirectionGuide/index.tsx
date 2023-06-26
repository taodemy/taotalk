import React from 'react';
import styles from './DirectionGuide.module.scss';

interface DirectionGuideProps {
  guideDetails: string;
}
const DirectionGuide: React.FC<DirectionGuideProps> = ({ guideDetails }) => {
  return (
    <div className={styles.directionInstruction}>
      <label className="paragraph--p4">
        <span>*</span>You can also use the
      </label>
      <div>
        <label className="paragraph--p3">{guideDetails}</label>
      </div>
      <label className="paragraph--p4">keys on the keyboard</label>
    </div>
  );
};

export default DirectionGuide;
