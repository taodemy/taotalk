import React from 'react';
import Styles from './textbook.module.scss';

const Textbook = () => {
  const dictionary = {};
  return (
    <article className={Styles.textbook}>
      <div className={Styles.heading}>
        <div className={Styles.icon}>
          <img src="hat.svg" alt="hat icon" />
          <h4 className="heading--h4">Textbook</h4>
        </div>

        <div className={Styles.buttons}>
          <button className={Styles.shoe}>
            <img src="shoe.svg" alt="shoe img" />
            <p className="paragraph--p2">Sprint</p>
          </button>
          <button className={Styles.speaker}>
            <img src="speaker.svg" alt="speaker img" />
            <p className="paragraph--p2">Audio-Call</p>
          </button>
          <button>
            <img src="setting.svg" alt="setting icon" />
          </button>
        </div>
      </div>

      <div className="subheading">A1</div>
    </article>
  );
};

export default Textbook;
