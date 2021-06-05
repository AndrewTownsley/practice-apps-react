import React from 'react';
import './index.css';


const ColorButton = (props) => {

  return (
    <div className="color-button-container">
      <button onClick={() => props.setColor(props.color)} className={`color-button ${props.color}`}>{props.color}</button>
    </div>
  )
}
export default ColorButton;