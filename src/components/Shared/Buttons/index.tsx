import NormalButton, { NormalButtonProps } from './NormalButton';
import BouncingImageButton from './BouncingImageButton';
import OutlineButton from './OutlineButton';
import IconButton, { IconTypes } from './IconButton';
import ImageButton from './ImageButton';

export type ButtonColor = 'primary' | 'secondary' | 'pink' | 'grey';

type ButtonProps = {
  variant?: 'normal' | 'bouncing' | 'outline' | 'icon' | 'image';
  isActive?: boolean;
  src?: string;
  iconTypes?: IconTypes;
  alt?: string;
  buttonWidthIncrease?: number;
  InjectedComponent?: React.FC | null;
} & React.ComponentProps<'button'> &
  NormalButtonProps;

const Button = ({
  variant = 'normal',
  color = 'secondary',
  size = 'large',
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
