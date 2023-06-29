import RegularButton, { RegularButtonProps } from './RegularButton';
import ImageButton from './ImageButton';

export type ButtonColor =
  //primary color
  | 'cyanLight'
  | 'cyanDark'
  | 'pinkLight'
  | 'pinkDark'
  | 'greyIcon'
  //secondary color
  | 'cyan'
  | 'green'
  | 'pink'
  | 'red'
  | 'yellow'
  | 'orange';

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
  size,
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
