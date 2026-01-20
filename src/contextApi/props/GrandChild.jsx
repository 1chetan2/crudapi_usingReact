import React from 'react'


export const GrandChild = ({ count, setcount }) => {
  return (
    <div>
      <p>GrandChild Component</p>
      <p>Count: {count}</p>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <p>Props passed down through Parent and Child components - Props Drilling</p>
    </div>
  )
}
