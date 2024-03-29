import React from 'react';
import Button from '../Shared/Buttons';

const Empty = () => {
  return (
    <div className="shadow-[0_23px_46px_-11px_rgba(52, 41, 39, 0.08)] flex gap-[30px] rounded-[14px] bg-white p-10">
      <img className="w-200 h-200" src="empty.svg" alt="empty image" />
      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-3.5">
          <h3>No words in this section yet</h3>
          <p className="p2">
            To save difficult words for further study, go to the textbook and select &apos;add to
            dictionary &apos;
          </p>
        </div>
        <div>
          <Button outline={false} color="cyanDark" label="To textbook" />
        </div>
      </div>
    </div>
  );
};

export default Empty;
