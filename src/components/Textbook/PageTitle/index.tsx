import React from 'react';
import Styles from './PageTitle.module.scss';
import Button from '../../Shared/Buttons';
import Setting from '../../../../public/setting.svg';
import Link from 'next/link';
import { useState } from 'react';

interface PageTitleProps {
  isListView: boolean;
  isButtonShow: boolean;
  handleButtonViewChange: () => void;
  handleListViewChange: () => void;
}
const PageTitle = ({
  isListView,
  isButtonShow,
  handleButtonViewChange,
  handleListViewChange,
}: PageTitleProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <section className={Styles.heading}>
      <div className={Styles.icon}>
        <img src="hat.svg" alt="textbook icon" />
        <h4 className="heading--h4">Textbook</h4>
      </div>

      <div className={Styles.buttons}>
        <div className={Styles.sprint}>
          <Link href="/sprint-summary">
            <button>
              <img src="shoe.svg" alt="sprint icon" />
              <p className="paragraph--p2">Sprint</p>
            </button>
          </Link>
        </div>
        <div className={Styles.audio}>
          <Link href="/audiocall-summary">
            <button>
              <img src="speaker.svg" alt="audio-call icon" />
              <p className="paragraph--p2">Audio-Call</p>
            </button>
          </Link>
        </div>
        <div
          className={Styles.icon}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <div className={Styles.setting}>
            <Setting alt="setting icon" />
          </div>

          {isDropdownOpen && (
            <div className={Styles.dropdownContainer}>
              <ul>
                <li>
                  <label className={Styles.container} htmlFor="listViewCheck">
                    <p className={`paragraph--p2 ${isListView && Styles.checked}`}>
                      Show words in a list
                    </p>
                    <input
                      type="checkbox"
                      id="listViewCheck"
                      name="listViewCheck"
                      value="true"
                      checked={isListView}
                      onChange={handleListViewChange}
                    />
                    <span className={Styles.checkmark}></span>
                  </label>
                </li>
                <li>
                  <label className={Styles.container} htmlFor="buttonViewCheck">
                    <p className={`paragraph--p2 ${isButtonShow && Styles.checked}`}>
                      Display the &apos;Add&apos; and &apos;Remove&apos; buttons
                    </p>
                    <input
                      type="checkbox"
                      id="buttonViewCheck"
                      name="buttonViewCheck"
                      value="true"
                      checked={isButtonShow}
                      onChange={handleButtonViewChange}
                    />
                    <span className={Styles.checkmark}></span>
                  </label>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
