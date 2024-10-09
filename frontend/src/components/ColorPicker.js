import React from 'react';

//color picker for changing navbar and body color by user
const ColorPicker = ({ setNavbarColor, setBodyColor }) => {
  return (
    <div className="color-picker">
      <h5>Choose Navbar Color</h5>
      <input 
        type="color" 
        onChange={(e) => setNavbarColor(e.target.value)} 
        className="form-control mb-3"
      />
      
      <h5>Choose Body Color</h5>
      <input 
        type="color" 
        onChange={(e) => setBodyColor(e.target.value)} 
        className="form-control"
      />
    </div>
  );
};

export default ColorPicker;
