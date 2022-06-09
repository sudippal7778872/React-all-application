import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>this is the user page here we try the useParam.</h1>
            <h1>Hi {fname} {lname}. Welcome to our Website.</h1>
            <h2>Your path is {location.pathname}</h2>
            {location.pathname === `/user/sudip/pal` ? (
                <button onClick={()=>window.alert("you are admin")}>Great You find me</button>
            ) : null}
        </div>
    )
}

export default User