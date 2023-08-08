import React from 'react';
import HeadingDescription from './HeadingDescription';
import Button from '../../Shared/Buttons';
import { IIndexSectionsProps } from '@/src/pages';

const OtherSections: React.FC<IIndexSectionsProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  const { language, vocabulary, progress } = data;
  return (
    <>
      <section className="mx-auto grid px-[8px] py-[16px] lg:max-w-[1180px] lg:grid-cols-2 lg:gap-[120px] lg:py-[78px]">
        <img
          src="/language.svg"
          alt="Language"
          className="hidden md:visible md:mx-auto md:block md:h-[500px] lg:my-auto lg:h-[445px]"
        />
        <div className="flex flex-col items-center py-[60px] md:order-first md:py-[115px] lg:order-last lg:my-auto lg:items-start">
          <HeadingDescription
            headingContent={language.heading}
            descriptionContent={language.description}
          />
          <div className="flex min-h-[150px] gap-[20px] lg:gap-[21px]">
            <div className="flex flex-col">
              <img
                className="z-10 h-[112px] w-[134px] hover:translate-y-[-3px] lg:z-10 lg:h-[106px]"
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
                className="z-10 h-[112px] w-[112px] hover:translate-y-[-3px] lg:h-[106px]"
                src="/audio-call.svg"
                alt="video call"
              />
              <div>
                <span className="p2 rounded-[14px] bg-tk_cyanLight px-[18px] pb-[14px] pt-[82px] font-bold text-tk_cyanDark lg:px-[34px] lg:pb-[14px] lg:pt-[82px]">
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
              headingContent={vocabulary.heading}
              descriptionContent={vocabulary.description}
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
            headingContent={progress.heading}
            descriptionContent={progress.description}
          />
          <Button outline={false} color="cyanLight" label="Statistics →" />
        </div>
      </section>
    </>
  );
};

export default OtherSections;
