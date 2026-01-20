import React from 'react'
import { GrandChild } from './GrandChild'

export const Child = () => {
    function search(e) {
    const query = e.get("query");
    alert(`You searched for '${query}'`);
    e.preventDefault();
    console.log(e); 
  }

  return (
    <div>
    <p>Child component</p>
    <GrandChild />
    <form action={search}>
        <input type="text" name='query' placeholder='Enter something'/>
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
