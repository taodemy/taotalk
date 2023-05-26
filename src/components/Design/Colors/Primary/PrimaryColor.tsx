import React from 'react';
import styled from 'styled-components';

import Colors from '../../Colors';

const pimaryColor = {
  'Cyan Dark': '#2B788B',
  'Cyan Light': '#C3DCE3',
  'Pink Dark': '#945069',
  'Pink Light': '#F2D4DC',
  Black: '#000000',
  'Grey Light': '#F6F5F4',
  'Grey Medium': '#E0E0E0',
  'Grey Icon': '#BABABA',
  'Grey Dark': '#757575',
};

const PrimaryColor = () => (
  <div>
    <h2>---Primary Color---</h2>
    {Object.entries(pimaryColor).map(([colorName, colorValue]) => (
      <Colors key={colorName} colorValue={colorValue}>
        {colorName}
      </Colors>
    ))}
  </div>
);

export default PrimaryColor;
