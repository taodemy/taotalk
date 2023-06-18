import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

type OutlineButtonProps = {
  color?: ButtonColor;
  size?: 'tiny' | 'small' | 'normal' | 'large';
  label?: string;
} & React.ComponentProps<'button'>;

const btn = styles.button;
const getButtonClass = (color: ButtonColor) => {
  switch (color) {
    case 'grey':
      return styles.buttonGreyColor;
  }
};

const OutlineButton = ({
  color = 'primary',
  size = 'normal',
  onClick,
  label = 'button',
  ...otherProps
}: OutlineButtonProps) => {
  const buttonSize = {
    tiny: styles.tinyButton,
    small: styles.smallButton,
    normal: styles.normalButton,
    large: styles.largeButton,
  };
  return (
    <button className={`${getButtonClass(color)} ${buttonSize[size]} ${btn}`} {...otherProps}>
      {label}
    </button>
  );
};

export default OutlineButton;
