import React from 'react';

import Styles from './textbook.module.scss';
import Button from '../Shared/Buttons';
import Setting from '../../../public/setting.svg';

const heading = () => {
  return (
    <section className={Styles.textbook}>
      <div className={Styles.heading}>
        <div className={Styles.icon}>
          <img src="hat.svg" alt="hat icon" />
          <h4 className="heading--h4">Textbook</h4>
        </div>

        <div className={Styles.buttons}>
          <div className={Styles.sprint}>
            <div>
              <img src="shoe.svg" alt="sprint icon" />
            </div>
            <Button outline={false} color="pinkLight" label="Sprint"></Button>
          </div>
          <div className={Styles.audio}>
            <div>
              <img src="speaker.svg" alt="sprint icon" />
            </div>
            <Button outline={false} color="cyanLight" label="Audio-Call"></Button>
          </div>
          <div className={Styles.setting}>
            <Setting alt="setting icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heading;
