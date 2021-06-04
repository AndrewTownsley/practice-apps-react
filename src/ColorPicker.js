import React, { useState } from 'react';
import "./index.css";
// Components
import Header from "./Header";
import ColorButton from "./ColorButtons";

const ColorPicker = () => {
  const[color,setColor] = useState("");
  
  return (
    <main className={`app-background bg-${color}`}>
      <Header/>
      <ColorButton className={`color-button${color}`} color="purple" setColor={setColor}/>
      <ColorButton className={`color-button${color}`} color="orange" setColor={setColor}/>
      <ColorButton className={`color-button${color}`} color="yellow" setColor={setColor}/>
    </main>
  )
}

export default ColorPicker;