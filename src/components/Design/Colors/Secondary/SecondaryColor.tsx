import React from 'react';

import Colors from '../../Colors';

const secondaryColor = {
  Cyan: '#5996A5',
  Green: '#639B6D',
  Pink: '#A15993',
  Red: '#A95151',
  Yellow: '#C4A24C',
  Orange: '#CB5B43',
};

const SecondaryColor = () => {
  return (
    <div>
      <h2>---Secondary Color---</h2>
      {Object.entries(secondaryColor).map(([colorName, colorValue]) => (
        <Colors key={colorName} colorValue={colorValue}>
          {colorName}
        </Colors>
      ))}
    </div>
  );
};

export default SecondaryColor;
