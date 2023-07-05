import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

export type RegularButtonProps = {
  color?: ButtonColor;
  size?: 'normal' | 'round';
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
      return outline ? styles.outlineButtonGreenColor : '';
    case 'pink':
      return outline ? styles.outlineButtonPinkColor : '';
    case 'red':
      return outline ? styles.outlineButtonRedColor : '';
    case 'yellow':
      return outline ? styles.outlineButtonYellowColor : '';
    case 'orange':
      return outline ? styles.outlineButtonOrangeColor : '';
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
    normal: styles.regularButton,
    round: styles.roundButton,
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
