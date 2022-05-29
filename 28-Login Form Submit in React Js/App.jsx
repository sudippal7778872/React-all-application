// form

import React, { useState } from 'react'



const App = () => {

  const [fullname, setFullname] = useState('');
  const [countryName, setcountryName] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();  // to prevent form another page or default action.
    setFullname(name);
    setcountryName(country);
  }

  const [name, setName] = useState('');
  const inputEvent = (event) => {
    console.log(event);
    setName(event.target.value);
  }

  const [country,setCountry] = useState('');
  const inputEvent2 = (event) => {
    console.log(event);
    setCountry(event.target.value);
  }
  return (
    <>
      <div>
        <h1>Hello {fullname} {countryName} </h1>
        <form onSubmit={onSubmit}>
          {/* <input type="text" placeholder='enter your name' value="" /> // controlled componenet*/}
          <input
            type="text"
            placeholder='Enter your Name'
            onChange={inputEvent}
            value={name}
          />
          <br /> <br />
          <input
            type="text"
            placeholder='Enter your country'
            onChange={inputEvent2}
            value={country}
          /> <br /> <br />
          <button type='submit'>Click Me</button>
        </form>
      </div>
    </>
  )
}

export default App