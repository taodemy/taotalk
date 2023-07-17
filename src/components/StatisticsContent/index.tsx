import React, { useState } from 'react';
import Image from 'next/image';

const StatisticsContent = () => {
  /* focus = 'day' leading to 'For the day' page, 'all the time' to 'For all the time' page*/
  const [focus, setFocus] = useState('day');

  const today_statistics = {
    all_words_studied: 0,
    all_correct_answers: 0,
    sprint_words_studied: 0,
    sprint_correct_answers: 0,
    sprint_best_series: 0,
    'audio-call_words_studied': 0,
    'audio-call_correct_answers': 0,
    'audio-call_best_series': 0,
  };

  const all_time_statistics = {
    all_words_studied: 10,
    all_correct_answers: 43,
    sprint_words_studied: 5,
    sprint_correct_answers: 90,
    sprint_best_series: 7,
    'audio-call_words_studied': 5,
    'audio-call_correct_answers': 90,
    'audio-call_best_series': 7,
  };

  const page_data = focus === 'day' ? today_statistics : all_time_statistics;

  return (
    <main className="flex flex-col items-center justify-center gap-[40px] bg-tk_greyLight py-[100px]">
      <section className="flex gap-[40px]">
        <h4
          className={focus === 'day' ? 'underline underline-offset-[16px]' : 'text-tk_greyDark'}
          onMouseEnter={() => setFocus('day')}
        >
          For the day
        </h4>
        <h4
          className={
            focus === 'all the time' ? 'underline underline-offset-[16px]' : 'text-tk_greyDark'
          }
          onMouseEnter={() => setFocus('all the time')}
        >
          For all the time
        </h4>
      </section>
      <section className="flex gap-[10px]">
        <div className="flex h-[511px] w-[583px] flex-col gap-[20px]  rounded-[14px] bg-white p-[40px]">
          <div className="flex flex-col gap-[12px]">
            {focus === 'day' ? (
              <h3>Today&apos;s Statistics</h3>
            ) : focus === 'all the time' ? (
              <h3>All-time Statistics</h3>
            ) : (
              ''
            )}
            <p className="p2">Your statistics on all activities</p>
          </div>
          <div className="flex justify-center gap-[60px]">
            <div className="flex w-[203px] flex-col gap-[3px] text-center">
              <h3>
                {page_data['all_words_studied']}
                <span className="text-tk_cyanDark">+</span>
              </h3>
              <p className="p2">words studied</p>
            </div>
            <div className="border-1 relative border-l"></div>
            <div className="flex w-[203px] flex-col gap-[3px] text-center">
              <h3>
                {page_data['all_correct_answers']}
                <span className="text-tk_cyanDark">%</span>
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
                    <span className="font-bold text-black">
                      {page_data['sprint_words_studied']}
                    </span>{' '}
                    words studied
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">
                      {page_data['sprint_correct_answers']}%
                    </span>{' '}
                    correct answers
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">{page_data['sprint_best_series']}</span>{' '}
                    best series of correct answers
                  </p>
                </div>
              </div>
            </div>
            <hr />
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
                    <span className="font-bold text-black">
                      {page_data['audio-call_words_studied']}
                    </span>{' '}
                    words studied
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">
                      {page_data['audio-call_correct_answers']}%
                    </span>{' '}
                    correct answers
                  </p>
                  <p className="p3">
                    <span className="font-bold text-black">
                      {page_data['audio-call_best_series']}
                    </span>{' '}
                    best series of correct answers
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex h-[511px] w-[932px] items-center justify-center rounded-[14px]  bg-white">
          <Image
            src={
              focus === 'day'
                ? '/lineChart1.svg'
                : focus === 'all the time'
                ? '/lineChart2.svg'
                : ''
            }
            width={852}
            height={421}
            alt="Line Chart"
          />
        </div>
      </section>
    </main>
  );
};

export default StatisticsContent;
