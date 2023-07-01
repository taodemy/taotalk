import RegularButton, { RegularButtonProps } from './RegularButton';
import ImageButton from './ImageButton';

export type ButtonColor =
  | 'cyanLight'
  | 'cyanDark'
  | 'pinkLight'
  | 'pinkDark'
  | 'greyIcon'
  | 'greenLight'
  | 'yellowLight'
  | 'orangeLight';

type ButtonProps = {
  variant?: 'regular' | 'image';
  isActive?: boolean;
  outline?: boolean;
  src?: string;
  alt?: string;
  imgType?: 'avatar' | 'profileCover';
} & React.ComponentProps<'button'> &
  RegularButtonProps;

const Button = ({
  variant = 'regular',
  color = 'cyanDark',
  outline,
  size = 'normal',
  label = 'button',
  src,
  imgType = 'avatar',
  ...otherProps
}: ButtonProps) => {
  return {
    regular: (
      <RegularButton color={color} outline={outline} label={label} size={size} {...otherProps} />
    ),
    image: src ? <ImageButton src={src} imgType={imgType} /> : <span>invalid img url</span>,
  }[variant];
};

export default Button;
