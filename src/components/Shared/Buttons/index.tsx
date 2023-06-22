import NormalButton, { NormalButtonProps } from './NormalButton';
import BouncingImageButton from './BouncingImageButton';
import IconButton, { IconTypes } from './IconButton';
import ImageButton from './ImageButton';

export type ButtonColor = 'cyanLight' | 'cyanDark' | 'pinkLight' | 'pinkDark' | 'greyIcon';

type ButtonProps = {
  variant?: 'normal' | 'bouncing' | 'icon' | 'image';
  isActive?: boolean;
  outline?: boolean;
  src?: string;
  iconTypes?: IconTypes;
  alt?: string;
  buttonWidthIncrease?: number;
  InjectedComponent?: React.FC | null;
} & React.ComponentProps<'button'> &
  NormalButtonProps;

const Button = ({
  variant = 'normal',
  color = 'cyanDark',
  outline,
  size = 'normal',
  onClick,
  label = 'button',
  src,
  iconTypes = 'player',
  buttonWidthIncrease,
  InjectedComponent,
  ...otherProps
}: ButtonProps) => {
  return {
    normal: (
      <NormalButton
        color={color}
        outline={outline}
        label={label}
        size={size}
        onClick={onClick}
        {...otherProps}
      />
    ),
    bouncing: (
      <BouncingImageButton
        color={color}
        label={label}
        outline={outline}
        src={src}
        buttonWidthIncrease={buttonWidthIncrease}
        onClick={onClick}
        {...otherProps}
      />
    ),
    icon: <IconButton iconTypes={iconTypes} onClick={onClick} {...otherProps} />,
    image: (
      <ImageButton
        src={src}
        InjectedComponent={InjectedComponent}
        onClick={onClick}
        {...otherProps}
      />
    ),
  }[variant];
};

export default Button;
