// useState hook


import React from "react";
import ReactDom from "react-dom";
import App from "./App"
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error'


ReactDom.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  </>
  ,
  document.getElementById("root")
)




