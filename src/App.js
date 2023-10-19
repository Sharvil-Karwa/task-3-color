import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setIsColorListVisible] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button style={{ backgroundColor: selectedColor }} onClick={() => setIsColorListVisible(!isColorListVisible)}>
        Pick a color
      </button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
