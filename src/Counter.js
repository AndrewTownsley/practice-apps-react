import './App.css';
import React, { useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const addCount = (e) => {
    setCount(count + 1);
  }

  const subtractCount = (e) => {
    setCount(count - 1);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <button onClick={addCount}>Count Up</button>
      <button onClick={subtractCount}>Count Down</button>
      <p>Count={count}</p>
    </div>
  );
}

export default Counter;
