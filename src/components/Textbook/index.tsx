import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './textbook.module.scss';
import Heading from './Heading';
import Button from '../Shared/Buttons';
import Subheading from './Subheading';
const Dictionary = () => {
  const [dictionaries, setDictionaries] = useState<{
    [key: string]: { level: string; isSelected: boolean; dictionary: {} };
  }>({
    A1: {
      level: 'Easy',
      isSelected: true,
      dictionary: {},
    },
    A2: {
      level: 'Easy',
      isSelected: false,
      dictionary: {},
    },
    B1: {
      level: 'Medium',
      isSelected: false,
      dictionary: {},
    },
    B2: {
      level: 'Medium',
      isSelected: false,
      dictionary: {},
    },
    C1: {
      level: 'Hard',
      isSelected: false,
      dictionary: {},
    },
    C2: {
      level: 'Hard',
      isSelected: false,
      dictionary: {},
    },
  });

  return (
    <article className={Styles.textbook}>
      <Heading />
      <section className={Styles.subheading}>
        {Object.keys(dictionaries).map((key) => (
          <Subheading
            key={key}
            name={key}
            level={dictionaries[key].level}
            isSelected={dictionaries[key].isSelected} // Set the isSelected value based on your logic
          />
        ))}
      </section>
    </article>
  );
};

export default Dictionary;
