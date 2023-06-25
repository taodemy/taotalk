import NormalButton, { NormalButtonProps } from './NormalButton';
import ImageButton from './ImageButton';

export type ButtonColor = 'cyanLight' | 'cyanDark' | 'pinkLight' | 'pinkDark' | 'greyIcon';

type ButtonProps = {
  variant?: 'normal' | 'image';
  isActive?: boolean;
  outline?: boolean;
  src?: string;
  alt?: string;
  imgType?: 'avatar' | 'profileCover';
} & React.ComponentProps<'button'> &
  NormalButtonProps;

const Button = ({
  variant = 'normal',
  color = 'cyanDark',
  outline,
  size = 'normal',
  label = 'button',
  src,
  imgType = 'avatar',
  ...otherProps
}: ButtonProps) => {
  return {
    normal: (
      <NormalButton color={color} outline={outline} label={label} size={size} {...otherProps} />
    ),
    image: src ? <ImageButton src={src} imgType={imgType} /> : <span>invalid img url</span>,
  }[variant];
};

export default Button;
