import React from 'react';
import Styles from './textbook.module.scss';
import Button from '../Shared/Buttons';
interface SubTitleProps {
  name: string;
  level: string;
  selected: string;
  onLevelSelect: (selectedLevel: string) => void;
}

const Subheading = (props: SubTitleProps) => {
  const handleLevelSelection = () => {
    props.onLevelSelect(props.name);
  };
  const getColor = () => {
    if (props.selected === props.name) {
      return props.level === 'Easy' ? 'green' : props.level === 'Medium' ? 'yellow' : 'orange';
    } else {
      return props.level === 'Easy'
        ? 'greenLight'
        : props.level === 'Medium'
        ? 'yellowLight'
        : 'orangeLight';
    }
  };

  return (
    <div className={props.selected === props.name ? Styles.selectedLevel : Styles.level}>
      <h4 className="heading--h4">{props.name}</h4>
      <Button
        outline={false}
        color={getColor()}
        label={props.level}
        onClick={handleLevelSelection}
      ></Button>
    </div>
  );
};

export default Subheading;
