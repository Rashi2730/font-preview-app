import React from 'react';

export const Card = (props) => {
  const { font, inputValue } = props;
  const style = { fontFamily: `${font},sans serif` };
  return (
    <li>
      <h2>{font}</h2>
      <p style={style}>{inputValue || 'Welcome to my Font Tester App'}</p>
    </li>
  );
};
