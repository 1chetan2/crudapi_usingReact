import React from 'react'
import { CounterContext } from './CounterContext'

export const GrandChild = () => {
    const {count,setcount}=React.useContext(CounterContext);
  return (
    <div>
      <p>GrandChild Component</p>
      <p>Count: {count}</p>
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  )
}
