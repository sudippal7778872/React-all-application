import React from 'react'
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="selected" to="/about" style={{margin:'30px'}}>About Us </NavLink>
            <NavLink exact activeClassName="selected" to="/contact" style={{margin:'30px'}}>Contact Us</NavLink>
            <NavLink exact activeClassName="selected" to="/user/sudip/pal" style={{margin:'30px'}}>User</NavLink>
            <NavLink exact activeClassName="selected" to="/search" style={{margin:'30px'}}>Serach</NavLink>
        </>
    )
}

export default Menu