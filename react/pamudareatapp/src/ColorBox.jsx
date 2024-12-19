// src/ColorBox.js
import React, { useState } from 'react';
import './ColorBox.css';

function ColorBox() {
  // Array of colors to choose from
  const colors = ["#FF6347", "#4CAF50", "#1E90FF", "#FF1493", "#FFD700", "#800080"];

  // State to hold the current color of the box
  const [color, setColor] = useState("#FFFFFF");

  // Function to randomly change the color
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor); // Update the state with a new color
  };

  return (
    <div>
      {/* Color changing box */}
      <div
        className="color-box"
        style={{ backgroundColor: color }}
      >
        Click the button to change color
      </div>

      {/* Button to change color */}
      <button onClick={changeColor} className="color-button">
        Change Color
      </button>
    </div>
  );
}

export default ColorBox;
