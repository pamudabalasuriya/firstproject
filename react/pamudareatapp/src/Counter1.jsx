import React, { useState } from 'react';

function Counter() {
  // Declare the state variable "count" and the function to update it
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  // Reset function
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={styles.button}>Increment</button>
      <button onClick={decrement} style={styles.button}>Decrement</button>
      <button onClick={reset} style={styles.button}>Reset</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
  },
};

export default Counter;
