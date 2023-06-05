import { ButtonColor } from './index';
import styles from './Buttons.module.scss';

export type NormalButtonProps = {
  color?: ButtonColor;
  label?: string;
} & React.ComponentProps<'button'>;

const btn = styles.button;
const getButtonClass = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return styles.buttonPrimaryColor;
    case 'light':
      return styles.buttonLightColor;
  }
};

const NormalButton = ({
  color = 'primary',
  label = 'button',
  ...otherProps
}: NormalButtonProps) => {
  return (
    <button className={`${getButtonClass(color)} ${btn} `} {...otherProps}>
      {label}
    </button>
  );
};

export default NormalButton;
