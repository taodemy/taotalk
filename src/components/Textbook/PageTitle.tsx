import React from 'react';
import Setting from '../../../public/setting.svg';
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
    <section className="flex w-[1180px] items-center justify-between rounded-[14px] bg-white p-5">
      <div className="flex gap-[10px]">
        <img src="hat.svg" alt="textbook icon" />
        <h4 className="heading--h4">Textbook</h4>
      </div>

      <div className="flex gap-[10px]">
        <div className="group">
          <Link href="/sprint-summary">
            <button className="flex items-center rounded-[14px] bg-tk_pinkLight group-hover:bg-tk_pinkDark">
              <img src="shoe.svg" alt="sprint icon" />
              <p className="paragraph--p2 ml-[9px] mr-[45px] font-bold text-tk_pinkDark group-hover:text-white">
                Sprint
              </p>
            </button>
          </Link>
        </div>
        <div className="group">
          <Link href="/audiocall-summary">
            <button className="flex items-center rounded-[14px] bg-tk_cyanLight group-hover:bg-tk_cyanDark">
              <img src="speaker.svg" alt="audio-call icon" />
              <p className="paragraph--p2 ml-[15px] mr-[37px] font-bold text-tk_cyanDark group-hover:text-white">
                Audio-Call
              </p>
            </button>
          </Link>
        </div>
        <div
          className="relative flex items-center"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <div className="group flex h-[40px] w-[40px] items-center rounded-[4px] bg-tk_greyLight hover:bg-tk_cyanDark">
            <Setting
              className="mx-auto text-tk_greyIcon group-hover:text-white"
              alt="setting icon"
            />
          </div>

          {isDropdownOpen && (
            <div className="shadow-[0_23px_46px_-11px_rgba(52, 41, 39, 0.08)] absolute right-0 top-[42px] flex w-max rounded-[14px] border border-tk_greyLight bg-white p-5">
              <ul className="flex flex-col gap-5">
                <li className="group flex gap-[10px]">
                  <label className="relative cursor-pointer pl-[30px]" htmlFor="listViewCheck">
                    <p className={`paragraph--p2 ${isListView && 'text-black'}`}>
                      Show words in a list
                    </p>
                    <input
                      className="absolute cursor-pointer opacity-0"
                      type="checkbox"
                      id="listViewCheck"
                      name="listViewCheck"
                      value="true"
                      checked={isListView}
                      onChange={handleListViewChange}
                    />
                    <span
                      className={`absolute left-0 top-0 h-[20px] w-[20px] rounded-[4px] border border-tk_greyIcon bg-tk_check${
                        !isListView && 'group-hover:bg-tk_greyLight'
                      } ${
                        isListView &&
                        'after:contents-[] border-white bg-tk_cyanDark after:ml-[2px] after:mt-1 after:block after:h-[6px] after:w-[12px] after:rotate-[135deg] after:transform after:border-0 after:border-r-[2px] after:border-t-[2px] after:border-white'
                      }`}
                    ></span>
                  </label>
                </li>
                <li className="group flex gap-[10px]">
                  <label className="relative cursor-pointer pl-[30px]" htmlFor="buttonViewCheck">
                    <p className={`paragraph--p2 ${isButtonShow && 'text-black'}`}>
                      Display the &apos;Add&apos; and &apos;Remove&apos; buttons
                    </p>
                    <input
                      className="absolute cursor-pointer opacity-0"
                      type="checkbox"
                      id="buttonViewCheck"
                      name="buttonViewCheck"
                      value="true"
                      checked={isButtonShow}
                      onChange={handleButtonViewChange}
                    />
                    <span
                      className={`absolute left-0 top-0 h-[20px] w-[20px] rounded-[4px] border border-tk_greyIcon bg-tk_check ${
                        !isButtonShow && 'group-hover:bg-tk_greyLight'
                      } ${isButtonShow && 'border border-white bg-tk_cyanDark'}
                      ${
                        isButtonShow &&
                        'after:contents-[] border-white bg-tk_cyanDark after:ml-[2px] after:mt-1 after:block after:h-[6px] after:w-[12px] after:rotate-[135deg] after:transform after:border-0 after:border-r-[2px] after:border-t-[2px] after:border-white'
                      }`}
                    ></span>
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
