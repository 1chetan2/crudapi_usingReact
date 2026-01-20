import React from 'react'
import { GrandChild } from './GrandChild'


export const Child = ({ count, setcount }) => {
  return (
   <>
   <p>Child Component</p>
  <p>Passing props to GrandChild Component</p>
  <GrandChild count={count} setcount={setcount}/>
   </>
  )
}
