import React from 'react'
import { CounterContext } from './CounterContext'
import { Child } from './Child'

export const Parent = () => {
    const[count,setcount]=React.useState(0);

  return (
         <CounterContext.Provider value={{count,setcount}}>
            <div>Parent Component</div>
            <Child />
        </CounterContext.Provider>
 
  )
}
