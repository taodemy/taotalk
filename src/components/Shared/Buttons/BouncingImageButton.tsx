import React from 'react';
import { NormalButtonProps, btn, getButtonClass } from './NormalButton';
import styles from './Buttons.module.scss';

export interface BouncingImageButtonProps extends NormalButtonProps {
  src?: string;
  alt?: string;
  buttonWidthIncrease?: number;
}

const BouncingImageButton = ({
  color = 'primary',
  label = 'button',
  src,
  alt,
  buttonWidthIncrease,
  ...otherProps
}: BouncingImageButtonProps) => {
  return (
    <button className={`${getButtonClass(color)} ${btn} ${styles.buttonPopup}`} {...otherProps}>
      <img src={src} alt={alt} />
      <p
        style={
          buttonWidthIncrease
            ? {
                marginTop: '9px',
                marginLeft: `${buttonWidthIncrease / 2}px`,
                marginRight: `${buttonWidthIncrease / 2}px`,
              }
            : { marginTop: '9px' }
        }
      >
        {label}
      </p>
    </button>
  );
};

export default BouncingImageButton;
