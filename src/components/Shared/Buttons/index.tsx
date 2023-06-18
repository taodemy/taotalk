import NormalButton, { NormalButtonProps } from './NormalButton';
import BouncingImageButton from './BouncingImageButton';
import OutlineButton from './OutlineButton';

export type ButtonColor = 'primary' | 'light' | 'pink' | 'grey';

type ButtonProps = {
  variant?: 'normal' | 'bouncing' | 'outline';
  isActive?: boolean;
  src?: string;
  alt?: string;
  buttonWidthIncrease?: number;
} & React.ComponentProps<'button'> &
  NormalButtonProps;

const Button = ({
  variant = 'normal',
  color = 'primary',
  size = 'large',
  onClick,
  label = 'button',
  src,
  buttonWidthIncrease,
  ...otherProps
}: ButtonProps) => {
  return {
    normal: (
      <NormalButton color={color} label={label} size={size} onClick={onClick} {...otherProps} />
    ),
    bouncing: (
      <BouncingImageButton
        color={color}
        label={label}
        src={src}
        buttonWidthIncrease={buttonWidthIncrease}
        onClick={onClick}
        {...otherProps}
      />
    ),
    outline: (
      <OutlineButton color={color} label={label} size={size} onClick={onClick} {...otherProps} />
    ),
  }[variant];
};

export default Button;
