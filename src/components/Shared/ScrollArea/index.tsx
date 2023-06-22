import React from 'react';
import ScrollRow from './ScrollRow';
import styles from './ScrollArea.module.scss';
import { scrollAreaItems } from '../../../../mockData/mockData';

const ScrollArea = () => {
  return (
    <div className={styles.scrollArea}>
      <ul>
        {scrollAreaItems.map((item, index) => (
          <li key={index}>
            <ScrollRow itemOne={item[0]} itemTwo={item[1]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollArea;
