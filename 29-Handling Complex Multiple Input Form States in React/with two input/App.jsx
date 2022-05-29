// form
// change useState variable with meaningful name.

import React, { useState } from 'react'



const App = () => {

  const [value, setValue] = useState({
    fname: "",
    lname: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully")
  }

  const inputEvent = (event) => {
    // console.log(event);
    console.log(event.target.value);
    console.log(event.target.name) // we can select through name attribute
    // console.log(event.target.placeholder) // we can select through placeholder attribute
    const data = event.target.value;
    const name = event.target.name;

    // condition
    if (name === "fname") {
      setValue((previousValue) => {  //comparing with name attribute
        // console.log("hello",previousValue);
        return {
          fname: data,
          lname: previousValue.lname,
        };
      })
    } else if (name === "lname") {   //comparing with name attribute
      setValue((previousValue) => {
        // console.log("hello",previousValue);
        return {
          fname: previousValue.fname,
          lname: data,
        };
      })
    }
  }

    return (
      <>
        <div>
          <h1>Hello {value.fname} {value.lname} </h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder='Enter your FirstName'
              name='fname'
              onChange={inputEvent}
            value={value.fname}
            />
            <br /> <br />
            <input
              type="text"
              placeholder='Enter your LastName'
              name='lname'
              onChange={inputEvent}
            value={value.lname}
            /> <br /> <br />
            <button type='submit'>Click Me</button>
          </form>
        </div>
      </>
    )
  }

  export default App