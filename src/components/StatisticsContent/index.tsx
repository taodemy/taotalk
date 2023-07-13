import React from 'react';
import styles from './SprintSpeedTask.module.scss';
import Label from '../Shared/Label';
import type { ButtonColor } from '../Shared/Buttons';
import Image from 'next/image';
import Button from '../Shared/Buttons';

const StatisticsContent = () => {
  return (
    <main className="flex h-[791px] flex-col items-center justify-center gap-[40px] bg-tk_greyLight">
      <section className="flex gap-[40px]">
        <h4 className="underline underline-offset-[16px]">For the day</h4>
        <h4 className="text-tk_greyDark">For all the time</h4>
      </section>
      <section className="flex gap-[10px]">
        <div className="flex h-[511px] w-[583px] flex-col gap-[20px]  rounded-[14px] bg-white p-[40px]">
          <div className="flex flex-col gap-[12px]">
            <h3>Today&apos;s Statistics</h3>
            <p className="p2">Your statistics on all activities</p>
          </div>
          <div className="g-[49px] flex">
            <div className="flex w-[203px] flex-col gap-[3px] text-center">
              <h3>
                0<span className="text-tk_cyanDark">+</span>
              </h3>
              <p className="p2">words studied</p>
            </div>
            <div>|</div>
            <div className="flex w-[203px] flex-col gap-[3px] text-center">
              <h3>
                0<span className="text-tk_cyanDark">%</span>
              </h3>
              <p className="p2">correct answers</p>
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="flex w-[503px] gap-[20px]">
              <Image src="/running.svg" alt="sprint" width={70} height={112} />
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[8px]">
                  <h4>Sprint</h4>
                  <p className="p4 rounded-[6px] bg-tk_cyanLight px-[8px] py-[4px] text-tk_cyanDark">
                    speed task
                  </p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="p3">
                    <span className="font-bold text-black">0</span> words studied
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">0%</span> correct answers
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">0</span> best series of correct answers
                  </p>
                </div>
              </div>
            </div>
            <div>-----------------</div>
            <div className="flex w-[503px] gap-[20px]">
              <Image src="/audiogame.svg" alt="Audio-Call" width={70} height={112} />
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[8px]">
                  <h4>Audio-Call</h4>
                  <p className="p4 rounded-[6px] bg-tk_cyanLight px-[8px] py-[4px] text-tk_cyanDark">
                    action task
                  </p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="p3">
                    <span className="font-bold text-black">0</span> words studied
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">0%</span> correct answers
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">0</span> best series of correct answers
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex h-[511px] w-[932px] items-center justify-center rounded-[14px]  bg-white">
          <Image src="/lineChart1.svg" width={852} height={421} alt="Line Chart" />
        </div>
      </section>
    </main>
  );
};

export default StatisticsContent;
