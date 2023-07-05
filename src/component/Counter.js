import React, { useState } from 'react'

const Counter = () => {
    const[value,setValue]=useState(0);
    const handelincrement=()=>{
        setValue(value+1);
    }
    const handeldecrement=()=>{
       setValue(value-1);
    }
  return (
    <div className='App'>
      <button onClick={(e)=>handelincrement(e)}  className='btn btn-primary'>Increment</button>
       <h1>counter:{value}</h1>
      <button onClick={(e)=>handeldecrement(e)}  className='btn btn-dark'>decrement</button>
    </div>
  )
}

export default Counter

