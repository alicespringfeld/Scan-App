import { NONAME } from 'dns';
import React from 'react';

function Styleguide() {
  return (
    <div
      style={{
        gap: 10,
      }}
    >
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <p>Paragraph/Text</p>

      <button
        style={{
          width: 30,
          height: 30,
          background: 'var(--color-secondary)',
          borderRadius: '50%',
        }}
      ></button>
      <p>
        <button
          style={{
            width: 104,
            height: 25,
            background: 'var(--color-secondary)',
            borderRadius: 15,
            border: 0,
          }}
        ></button>
      </p>
    </div>
  );
}

export default Styleguide;
