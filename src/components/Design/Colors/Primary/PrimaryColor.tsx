import React from 'react';

import Colors from '../../Colors';

const pimaryColor = {
  cyanDark: '#2B788B',
  cyanLight: '#C3DCE3',
  pinkDark: '#945069',
  pinkLight: '#F2D4DC',
  Black: '#000000',
  greyLight: '#F6F5F4',
  greyMedium: '#E0E0E0',
  greyIcon: '#BABABA',
  greyDark: '#757575',
};

const PrimaryColor = () => (
  <div>
    <h2>---Primary Color---</h2>
    {Object.entries(pimaryColor).map(([colorName, colorValue]) => (
      <Colors key={colorName} colorValue={colorValue}>
        {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
      </Colors>
    ))}
  </div>
);

export default PrimaryColor;
