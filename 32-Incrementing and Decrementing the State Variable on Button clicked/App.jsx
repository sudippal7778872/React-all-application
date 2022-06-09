import React, { useState } from 'react'


const App = () => {
  const [value, setValue] =  useState(0);

  const dec = () => {
    if(value <= 0){
      window.alert("it's already less that zero");
    }
    else{
      setValue(value-1);
    }
  }

  return (
    <>
      <div className='container'>
        <h1> {value} </h1>
        <button onClick={()=>{ setValue(value+1)}}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    </>
  )
}

export default App