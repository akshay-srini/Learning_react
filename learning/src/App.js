import React, {useState} from 'react'

export default function App() {
  const [count1, setCount] = useState(0)
  function handleIncrease() {
    setCount(prevCount => prevCount + 1)
  }

  function handleDecrease() {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <>
      <h1>Count: {count1}</h1>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </>
  )
}