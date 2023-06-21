import React from 'react';
import ScrollRow from './ScrollRow';
import styles from './ScrollArea.module.scss';

const ScrollArea = () => {
  const items = [
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
    ['lone', '- solitaire'],
    ['anniversary', '- anniversaire'],
  ];
  return (
    <div className={styles.scrollArea}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <ScrollRow itemOne={item[0]} itemTwo={item[1]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollArea;
