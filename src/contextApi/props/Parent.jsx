import React from 'react'
import { Child } from './Child'

export const Parent = () => {

    const[count,setcount]=React.useState(0);
  return (
    <>
    <p>Parent Component</p>
    <p>Passing props to Child Component</p>
    <Child count={count} setcount={setcount}/>
    </>
  )
}
