import React from 'react';

import Colors from '..';

const secondaryColor = {
  cyan: '#5996A5',
  green: '#639B6D',
  pink: '#A15993',
  red: '#A95151',
  yellow: '#C4A24C',
  orange: '#CB5B43',
};

const SecondaryColor = () => {
  return (
    <div>
      <h2>---Secondary Color---</h2>
      {Object.entries(secondaryColor).map(([colorName, colorValue]) => (
        <Colors key={colorName} colorValue={colorValue}>
          {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
        </Colors>
      ))}
    </div>
  );
};

export default SecondaryColor;
