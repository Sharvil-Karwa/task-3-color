import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './App';

const colors = ['#ff5733', '#33ff57', '#5733ff', '#33aaff']; // Example array of colors

ReactDOM.render(
  <React.StrictMode>
    <ColorPicker colors={colors} />
  </React.StrictMode>,
  document.getElementById('root')
);
