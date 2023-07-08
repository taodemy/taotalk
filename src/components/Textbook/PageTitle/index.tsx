import React from 'react';
import Styles from './PageTitle.module.scss';
import Button from '../../Shared/Buttons';
import Setting from '../../../../public/setting.svg';
import Link from 'next/link';

interface TitleProps {
  handleDropdown: () => void;
  isDropdownOpen: boolean;
}

const PageTitle = (props: TitleProps) => {
  return (
    <div className={Styles.heading}>
      <div className={Styles.icon}>
        <img src="hat.svg" alt="textbook icon" />
        <h4 className="heading--h4">Textbook</h4>
      </div>

      <div className={Styles.buttons}>
        <div className={Styles.sprint}>
          <div>
            <img src="shoe.svg" alt="sprint icon" />
          </div>
          <Link href="/sprint-summary">
            <Button outline={false} color="pinkLight" label="Sprint" />
          </Link>
        </div>
        <div className={Styles.audio}>
          <div>
            <img src="speaker.svg" alt="audio-call icon" />
          </div>
          <Link href="/audiocall-summary">
            <Button outline={false} color="cyanLight" label="Audio-Call" />
          </Link>
        </div>
        <div
          className={Styles.icon}
          onMouseEnter={props.handleDropdown}
          onMouseLeave={props.handleDropdown}
        >
          <div className={Styles.setting}>
            <Setting alt="setting icon" />
          </div>

          {props.isDropdownOpen && (
            <div className={Styles.dropdownContainer}>
              <ul>
                <li>
                  <label className={Styles.container} htmlFor="viewCheck">
                    <p className="paragraph--p2 ">Show words in a list</p>
                    <input type="checkbox" id="viewCheck" name="viewCheck" value="true" />
                    <span className={Styles.checkmark}></span>
                  </label>
                </li>
                <li>
                  <label className={Styles.container} htmlFor="buttonCheck">
                    <p className="paragraph--p2">
                      Display the &apos;Add&apos; and &apos;Remove&apos; buttons
                    </p>
                    <input type="checkbox" id="buttonCheck" name="buttonCheck" value="true" />
                    <span className={Styles.checkmark}></span>
                  </label>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
