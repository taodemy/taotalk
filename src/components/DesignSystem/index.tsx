import React, { ReactNode } from 'react';
import styles from './design-system.module.scss';

const headings = ['h1', 'h2', 'h3', 'h4'];
const primaryColors = [
  'cyanDark',
  'cyanLight',
  'pinkDark',
  'pinkLight',
  'black',
  'greyLight',
  'greyMedium',
  'greyIcon',
  'greyDark',
];
const secondaryColors = ['cyan', 'green', 'pink', 'red', 'yellow', 'orange'];

export interface HeadingProps {
  headings: string[];
}

export interface ColorProps {
  colors: string[];
  colorType: string;
}

type TagComponentProps<T extends keyof JSX.IntrinsicElements> = {
  tag: T;
  children: ReactNode;
} & JSX.IntrinsicElements[T];

const TagComponent = <T extends keyof JSX.IntrinsicElements>({
  tag,
  children,
  className,
}: TagComponentProps<T>) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};

const HeadingMapping = ({ headings }: HeadingProps) => {
  return (
    <div className={styles.headingColumn}>
      {headings.map((value, index) => {
        return (
          <TagComponent
            tag={value as keyof JSX.IntrinsicElements}
            key={index}
            className={styles[`heading--${value}`]}
          >
            Heading{index + 1}
          </TagComponent>
        );
      })}
    </div>
  );
};

const ColorMapping = ({ colors, colorType }: ColorProps) => {
  return (
    <div className={styles.headingColumn}>
      {colors.map((value, index) => {
        return (
          <h2
            key={index}
            className={
              colorType === 'primary'
                ? styles[`fontPrimaryColor--${value}`]
                : styles[`fontSecondaryColor--${value}`]
            }
          >
            {value}
          </h2>
        );
      })}
    </div>
  );
};

const DesignSystem = () => {
  return (
    <div className={styles.designContainer}>
      <HeadingMapping headings={headings} />
      <ColorMapping colors={primaryColors} colorType="primary" />
      <ColorMapping colors={secondaryColors} colorType="secondary" />
    </div>
  );
};

export default DesignSystem;
