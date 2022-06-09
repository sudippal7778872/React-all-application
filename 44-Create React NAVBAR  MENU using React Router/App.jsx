import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';


const App = () => {
  return (
    <>
    
      <Router>
      <Menu/>
        <Routes>
          <Route exact path='/' element={<About/>} />
          <Route exact path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App