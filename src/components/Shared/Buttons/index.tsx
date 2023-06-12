import NormalButton, { NormalButtonProps } from './NormalButton';
import BouncingImageButton, { BouncingImageButtonProps } from './BouncingImageButton';

export type ButtonColor = 'primary' | 'light' | 'pink';

type ButtonProps = {
  variant?: 'normal' | 'bouncing';
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
  }[variant];
};

export default Button;
