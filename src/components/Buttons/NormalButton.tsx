import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

export type NormalButtonProps = {
  color?: ButtonColor;
  size?: 'tiny' | 'small' | 'normal' | 'large';
  label?: string;
  onClick?: () => void;
} & React.ComponentProps<'button'>;

export const btn = styles.button;
export const getButtonClass = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return styles.buttonPrimaryColor;
    case 'light':
      return styles.buttonLightColor;
    case 'pink':
      return styles.buttonPinkColor;
  }
};

const NormalButton = ({
  color = 'primary',
  size = 'normal',
  onClick,
  label = 'button',
  ...otherProps
}: NormalButtonProps) => {
  const buttonSize = {
    tiny: styles.tinyButton,
    small: styles.smallButton,
    normal: styles.normalButton,
    large: styles.largeButton,
  };
  return (
    <button
      className={`${getButtonClass(color)} ${buttonSize[size]} ${btn}`}
      {...otherProps}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default NormalButton;
