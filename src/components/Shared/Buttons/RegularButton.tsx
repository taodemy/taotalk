import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

export type RegularButtonProps = {
  color?: ButtonColor;
  size?: 'normal' | 'round' | 'rectangle';
  outline: boolean;
  label?: string;
} & React.ComponentProps<'button'>;

export const btn = styles.button;
export const getButtonClass = (color: ButtonColor, outline: boolean) => {
  switch (color) {
    case 'cyanLight':
      return outline ? '' : styles.buttonCyanDarkColor;
    case 'cyanDark':
      return outline ? styles.outlineButtonCyanDarkColor : styles.buttonCyanLightColor;
    case 'pinkLight':
      return outline ? '' : styles.buttonPinkLightColor;
    case 'pinkDark':
      return outline ? styles.outlineButtonPinkDarkColor : '';
    case 'greyIcon':
      return outline ? styles.outlineButtonGreyIconColor : '';
    case 'cyan':
      return outline ? styles.outlineButtonCyanColor : '';
    case 'green':
      return outline ? styles.outlineButtonGreenColor : styles.buttonGreenColor;
    case 'pink':
      return outline ? styles.outlineButtonPinkColor : '';
    case 'red':
      return outline ? styles.outlineButtonRedColor : '';
    case 'yellow':
      return outline ? styles.outlineButtonYellowColor : styles.buttonYellowColor;
    case 'orange':
      return outline ? styles.outlineButtonOrangeColor : styles.buttonOrangeColor;
    case 'greenLight':
      return outline ? '' : styles.buttonGreenLightColor;
    case 'yellowLight':
      return outline ? '' : styles.buttonYelloLightColor;
    case 'orangeLight':
      return outline ? '' : styles.buttonOrangeLightColor;
  }
};

const RegularButton = ({
  color = 'cyanLight',
  outline,
  size = 'normal',
  label = 'button',
  ...otherProps
}: RegularButtonProps) => {
  const buttonSize = {
    normal: styles.normalButton,
    round: styles.roundButton,
    rectangle: styles.rectangleButton,
  };
  return (
    <button
      className={`${getButtonClass(color, outline)} ${buttonSize[size]} ${btn}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default RegularButton;
