import React, { useState, useEffect } from 'react';
// Components
import Slide from "./Slide";

const MainCarousel = () => {
  const [current, setCurrent] = useState(0);

  

  return (
    <div>
      <Slide />
    </div>
  )
}

export default MainCarousel;