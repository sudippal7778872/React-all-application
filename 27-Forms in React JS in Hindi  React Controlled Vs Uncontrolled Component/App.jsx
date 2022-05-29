// controlled element and uncontrolled

// onChange

import React, { useState } from 'react'



const App = () => {

  const [fullname, setFullname] = useState();
  const onSubmit = () => {
    setFullname(name);
  }

  const [name, setName] = useState();
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  return (
    <>
      <div>
        <h1>Hello {fullname}</h1>
        {/* <input type="text" placeholder='enter your name' value="" /> // controlled componenet*/}
        <input
          type="text"
          placeholder='Enter your Name'
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onSubmit}>Click Me</button>
      </div>
    </>
  )
}

export default App