import React from 'react';
import styles from './DirectionGuide.module.scss';

const DirectionGuide = () => {
  return (
    <div className={styles.directionInstruction}>
      <label className="paragraph--p4">
        <span>*</span>You can also use the
      </label>
      <div>
        <label className="paragraph--p3">← →</label>
      </div>
      <label className="paragraph--p4">keys on the keyboard</label>
    </div>
  );
};

export default DirectionGuide;
