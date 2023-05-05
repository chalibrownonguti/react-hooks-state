import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  function increment() {
     setCount(count + 1);
    setCount(count + 1);
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
