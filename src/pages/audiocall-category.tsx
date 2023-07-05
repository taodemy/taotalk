import React from 'react';
import AudioGame from '../../public/audiogame.svg';
import Label from '../components/Shared/Label';
import Button from '../components/Shared/Buttons';

export default function AudioCallCategoryPage() {
  return (
    <section className="bg-tk_greyLight py-[100px]">
      <div className="shadow-[0_23px_46px_-12px_rgba(52, 41, 39, 0.08)] mx-auto max-w-[737px] rounded-[14px] bg-white">
        <div className="flex gap-[10px] py-[20px] pl-[50px]">
          <div className="hidden min-w-[250px] md:block">
            <AudioGame />
          </div>
          <div className="mx-auto pr-[51px] sm:my-[63px] md:my-auto">
            <div className="flex gap-[10px] pb-[14px]">
              <h2 className="whitespace-nowrap">Audio-Call</h2>
              <div className="my-auto">
                <Label fontColor="#2b788b" bgColor="#c3dce3">
                  audition task
                </Label>
              </div>
            </div>
            <p className="p2 max-w-[383px] pb-[30px]">
              The Audio-Call training develops vocabulary and improves listening comprehension.
            </p>
            <div className="pb-[30px]">
              <p className="p3 pb-2">Choose a level:</p>
              <div className="flex gap-[24px]">
                <Button color="green" outline={true} size="round" label="A1" />
                <Button color="yellow" outline={true} size="round" label="A2" />
                <Button color="orange" outline={true} size="round" label="B1" />
                <Button color="red" outline={true} size="round" label="B2" />
                <Button color="pink" outline={true} size="round" label="C1" />
                <Button color="cyan" outline={true} size="round" label="C2" />
              </div>
            </div>
            <Button color="cyanDark" outline={false} label="Get started" />
          </div>
        </div>
      </div>
    </section>
  );
}
