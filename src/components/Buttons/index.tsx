import NormalButton, { NormalButtonProps } from './NormalButton';

export type ButtonColor = 'primary' | 'light';

type ButtonProps = {
  variant?: 'normal';
  isActive?: boolean;
  src?: string;
} & React.ComponentProps<'button'> &
  NormalButtonProps;

const Button = ({
  variant = 'normal',
  color = 'primary',
  label = 'button',
  isActive,
  src,
  ...otherProps
}: ButtonProps) => {
  return {
    normal: <NormalButton color={color} label={label} {...otherProps} />,
  }[variant];
};

export default Button;
