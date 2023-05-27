import React from 'react';

import styles from '../../Design/design.module.scss'

export interface StyledHeadingsProps {
  headingsize: string;
}

const fontSize = {
  Heading1: '56px',
  Heading2: '48px',
  Heading3: '32px',
  Heading4: '26px',
};

const Headings = () => (
  <div>
    <h2>---Heading---</h2>
    {Object.entries(fontSize).map(([headingName, headingSize]) => (
      <p key={headingName} className={styles.HeadingBasestyle} style={{fontSize:headingSize}}>
        {headingName}
      </p>
    ))}
  </div>
);

export default Headings;
