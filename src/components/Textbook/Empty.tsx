import React from 'react';
import Button from '../Shared/Buttons';
import Styles from './textbook.module.scss';

const Empty = () => {
  return (
    <div className={Styles.empty}>
      <img src="empty.svg" alt="empty image" />
      <div className={Styles.right}>
        <div className={Styles.text}>
          <h3 className="heading--h3">No words in this section yet</h3>
          <p className="paragraph--p2">
            To save difficult words for further study, go to the textbook and select &apos;add to
            dictionary&apos;
          </p>
        </div>
        <div>
          <Button outline={false} color="cyanDark" label="To textbook" />
        </div>
      </div>
    </div>
  );
};

export default Empty;
