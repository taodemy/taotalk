import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';
import styles from './OtherSections.module.scss';

const OtherSections = () => {
  return (
    <>
      <section className="mx-auto grid sm:px-[8px] sm:py-[16px] lg:max-w-[1180px] lg:grid-cols-2 lg:gap-[120px] lg:py-[78px]">
        <img
          src="/language.svg"
          alt="Language"
          className="sm:hidden md:mx-auto md:block lg:my-auto lg:max-h-[445px] lg:max-w-[580px]"
        />
        <div className="flex flex-col sm:items-center sm:py-[60px] md:order-first md:py-[115px] lg:order-last lg:my-auto lg:items-start">
          <HeadingDescription
            headingContent="Learn a language in a playful way"
            descriptionContent="Make learning words more fun with mini-games"
          />
          <div className="flex sm:min-h-[150px] sm:gap-[20px] lg:gap-[21px]">
            <div className="flex flex-col">
              <img
                className="z-10 hover:translate-y-[-3px] sm:h-[112px] sm:w-[134px] lg:z-10 lg:h-[106px]"
                src="/sprint.svg"
                alt="sprint"
              />
              <div>
                <span className="p2 rounded-[14px] bg-tk_pinkLight px-[34px] pb-[14px] pt-[82px] font-bold text-tk_pinkDark">
                  Sprint →
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="z-10 hover:translate-y-[-3px] sm:h-[112px] sm:w-[112px] lg:h-[106px]"
                src="/audio-call.svg"
                alt="video call"
              />
              <div>
                <span className="p2 rounded-[14px] bg-tk_cyanLight font-bold text-tk_cyanDark sm:px-[18px] sm:pb-[14px] sm:pt-[82px] lg:px-[34px] lg:pb-[14px] lg:pt-[82px]">
                  Audio-call →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-tk_greyLight">
        <div className="mx-auto grid px-2 py-4 md:px-8 md:py-10 lg:max-w-[1180px] lg:grid-cols-2 lg:px-0 lg:pb-0 lg:pt-[26px]">
          <div className="mx-0 ml-0 flex flex-col py-4 md:py-[60px] lg:my-auto lg:ml-[100px] lg:block">
            <HeadingDescription
              headingContent="Increase your vocabulary"
              descriptionContent="Traditional and new effective approaches to word study"
            />
            <Button outline={false} color="cyanLight" label="Textbook →" />
          </div>
          <img
            src="/vocabulary.svg"
            alt="Vocabulary"
            className="mx-auto my-auto h-[200px] md:h-[363px] lg:h-auto
            "
          />
        </div>
      </section>
      <section className="mx-auto grid px-2 py-4 md:px-8 md:py-0 lg:max-w-[1180px] lg:grid-cols-2 lg:px-0 lg:py-[95px] xl:gap-[20px] xl:px-0 ">
        <img
          src="/progress.svg"
          alt="Statistics"
          className="mx-auto my-auto mb-[60px] h-[200px] md:mb-0 md:h-[373px] lg:h-auto"
        />
        <div className="mx-0 flex flex-col pb-[60px] md:pb-[120px] md:pt-[60px] lg:my-auto lg:ml-auto lg:block lg:py-0 xl:max-w-[475px]">
          <HeadingDescription
            headingContent="Watch your progress every day"
            descriptionContent="Save statistics on your achievements, words learned, and mistakes"
          />
          <Button outline={false} color="cyanLight" label="Statistics →" />
        </div>
      </section>
    </>
  );
};

export default OtherSections;
