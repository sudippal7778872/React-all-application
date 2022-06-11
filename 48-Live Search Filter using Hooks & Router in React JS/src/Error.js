import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from '@mui/material';


const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Error 404 page not found</div>
            <NavLink to="/">Home</NavLink>
            <button onClick={()=> navigate('/')}>click me</button>
            {/* <Button variant='outlined' color='success' onClick={()=> navigate('/')}>Home</Button> */}
        </>
    )
}

export default Error