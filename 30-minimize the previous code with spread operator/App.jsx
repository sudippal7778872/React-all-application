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
    console.log(event)
    const name = event.target.name;  
    const data = event.target.value; 
    // const { name, data } = event.target;  // object destructuring. // not working
    

    setValue((previousValue) => {
      return{
      ...previousValue,
      [name]: data,   // line number 17 and 18 name and data,
      }
    })
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
            autoComplete="off"
          /> <br />
          <button type='submit'> Click Me </button>
        </form>
      </div>
    </>
  )
}

export default App