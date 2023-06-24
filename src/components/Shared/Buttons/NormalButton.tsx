import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

export type NormalButtonProps = {
  color?: ButtonColor;
  size?: 'normal';
  outline: boolean;
  label?: string;
  onClick?: () => void;
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

const NormalButton = ({
  color = 'cyanLight',
  outline,
  size = 'normal',
  onClick,
  label = 'button',
  ...otherProps
}: NormalButtonProps) => {
  const buttonSize = {
    tiny: styles.tinyButton,
    small: styles.smallButton,
    normal: styles.normalButton,
  };
  return (
    <button
      className={`${getButtonClass(color, outline)} ${buttonSize[size]} ${btn}`}
      {...otherProps}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NormalButton;
