import React from 'react';
import Styles from './textbook.module.scss';
import Button from '../Shared/Buttons';
interface subheadingProps {
  name: string;
  level: string;
  isSelected: boolean;
}
const Subheading = (props: subheadingProps) => {
  return (
    <div className={props.isSelected ? Styles.selectedLevel : Styles.level}>
      <h4 className="heading--h4">{props.name}</h4>
      <Button
        outline={false}
        color={
          props.level === 'Easy'
            ? 'greenLight'
            : props.level === 'Medium'
            ? 'yellowLight'
            : 'orangeLight'
        }
        label={props.level}
      ></Button>
    </div>
  );
};

export default Subheading;
