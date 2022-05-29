import React, { useState } from 'react'

const App = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Your Form Submitted Successfully");
  }

  const [value, setValue] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const handleChange = (event) => {
    const data = event.target.value;
    const name = event.target.name;
    if (name === "fname") {
      setValue((previousValue) => {
        return {
          fname: data,
          lname: previousValue.lname,
          email: previousValue.email,
        };
      })
    } else if (name === "lname") {
      setValue((previousValue) => {
        return {
          fname: previousValue.fname,
          lname: data,
          email: previousValue.email,
        };
      })
    } else if (name === "email") {
      setValue((previousValue) => {
        return {
          fname: previousValue.fname,
          lname: previousValue.lname,
          email: data,
        };
      })
    }
  }
  return (
    <>
      <div>
        <h1>Hello {value.fname} {value.lname}  </h1>
        <h3>your mail id is: {value.email}</h3>
        <form onSubmit={onSubmit}>
          <input type="text"
            placeholder='Enter Your FirstName'
            name='fname'
            onChange={handleChange}
            value={value.fname}
          /> <br />
          <input type="text"
            placeholder='Enter Your LastName'
            name='lname'
            onChange={handleChange}
            value={value.lname}
          /> <br />
          <input type="text"
            placeholder='Enter Your Email Address'
            name='email'
            onChange={handleChange}
            value={value.email}
          /> <br />
          <button type='submit'> Click Me </button>
        </form>
      </div>
    </>
  )
}

export default App