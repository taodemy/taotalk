import React from 'react';
import Button from '../Shared/Buttons';

interface SubTitleProps {
  name: string;
  level: string;
  selected: string;
  onLevelSelect: (selectedLevel: string) => void;
}

const SubTitle = (props: SubTitleProps) => {
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

  const handleContainerClick = () => {
    handleLevelSelection();
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleLevelSelection();
  };

  return (
    <div
      className={`flex items-center gap-3 pb-3 ${
        props.selected === props.name && 'border-b-2 border-black'
      }`}
      onClick={handleContainerClick}
    >
      <h4 className={`heading--h4 ${props.selected !== props.name && 'text-tk_greyDark'}`}>
        {props.name}
      </h4>
      <Button
        outline={false}
        color={getColor()}
        label={props.level}
        onClick={handleButtonClick}
        size="rectangle"
      ></Button>
    </div>
  );
};

export default SubTitle;
