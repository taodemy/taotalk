import React from 'react';
import Button from '../Shared/Buttons';
import Styles from './textbook.module.scss';
const PageNumber = () => {
  return (
    <div className={Styles.pageNumber}>
      <Button outline={true} color={'cyan'} label="←" size="round" />
      <Button outline={true} color={'cyan'} label="1" size="round" />
      <Button outline={false} color={'cyanDark'} label="2" size="round" />
      <Button outline={true} color={'cyan'} label="3" size="round" />
      <p className="paragrahp--p1">...</p>
      <Button outline={true} color={'cyan'} label="27" size="round" />
      <Button outline={true} color={'cyan'} label="28" size="round" />
      <Button outline={true} color={'cyan'} label="29" size="round" />
      <Button outline={true} color={'cyan'} label="→" size="round" />
    </div>
  );
};

export default PageNumber;
