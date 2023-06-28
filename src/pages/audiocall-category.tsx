import React from 'react';
import AudioGame from '../../public/audiogame.svg';
import Label from '../components/Shared/Label';
import Button from '../components/Shared/Buttons';

export default function AudioCallCategoryPage() {
  return (
    <section className="bg-[#f6f5f4]">
      <div className="shadow-[0_23px_46px_-12px_rgba(52, 41, 39, 0.08)] mx-auto max-w-[737px] rounded-[14px] bg-white">
        <div className="flex gap-[10px] py-[20px] pl-[50px]">
          <AudioGame />
          <div className="my-auto pr-[51px]">
            <div className="flex gap-[10px] pb-[14px]">
              <h2 className="heading--h2 whitespace-nowrap">Audio-Call</h2>
              <div className="my-auto">
                <Label fontColor="#2b788b" bgColor="#c3dce3">
                  audition task
                </Label>
              </div>
            </div>
            <p className="paragraph--p2 max-w-[383px] pb-[30px]">
              The Audio-Call training develops vocabulary and improves listening comprehension.
            </p>
            <div className="pb-[30px]">
              <p className="paragraph--p3 pb-[8px]">Choose a level:</p>
              <div>
                {/* <Button color="cyanDark" outline={true} label="C2" className="px-[13px]" /> */}
                <Button color="cyanDark" outline={true} label="C2" />
              </div>
            </div>
            <Button color="cyanDark" outline={false} label="Get started" />
          </div>
        </div>
      </div>
    </section>
  );
}
