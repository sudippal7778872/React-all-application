import React from 'react'
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
      <>
    <NavLink exact activeClassName="selected"  to="/about">About Us </NavLink>
    <NavLink exact activeClassName="selected" to="/contact">Contact Us</NavLink>
    </>
  )
}

export default Menu