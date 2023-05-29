import React from 'react';

import styles from '../../DesignPage/DesignPage.module.scss';

const fontSize = {
  heading1: '56px',
  heading2: '48px',
  heading3: '32px',
  heading4: '26px',
};

const Headings = () => (
  <div>
    <h2>---Heading---</h2>
    {Object.entries(fontSize).map(([headingName, headingSize]) => (
      <p key={headingName} className={styles.HeadingBaseStyle} style={{ fontSize: headingSize }}>
        {headingName.charAt(0).toUpperCase() + headingName.slice(1)}
      </p>
    ))}
  </div>
);

export default Headings;
