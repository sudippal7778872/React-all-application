import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import User from './User';


const App = () => {
  return (
    <>
    
      <Router>
      <Menu/>
        <Routes>
          <Route exact path='/' element={<About/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/user/:fname/:lname' element={<User/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App