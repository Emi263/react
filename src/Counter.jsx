import React, {useState} from 'react'

function Counter() {

  const [value, setValue] = useState(0);
  function increment() {
    setValue(value + 1)
  }
  function decrement() {
    setValue(value - 1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>

  )
}

export default Counter;