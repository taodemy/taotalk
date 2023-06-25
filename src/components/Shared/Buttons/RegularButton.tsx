import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

export type RegularButtonProps = {
  color?: ButtonColor;
  size?: 'normal';
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
