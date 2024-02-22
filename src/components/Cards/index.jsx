import React from 'react';
import { fonts } from '../../utils/constants.json';
import { Card } from '../Card/index';

export const Cards = (props) => {
  const { inputValue } = props;
  return (
    <ul>
      {fonts.map((font) => {
        return <Card inputValue={inputValue} font={font} key={font} />;
      })}
    </ul>
  );
};
