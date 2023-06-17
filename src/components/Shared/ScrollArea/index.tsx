import React from 'react';
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
            {index == 1 ? (
              <img src="./activeplayer.svg" alt="activePlayer" />
            ) : (
              <img src="./player.svg" alt="player" />
            )}
            <div>
              <p className={`paragraph--p2 ${styles.scrollFontBlack}`}>{item[0]}</p>
              <p className={`paragraph--p2 ${styles.translation}`}>{item[1]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollArea;
