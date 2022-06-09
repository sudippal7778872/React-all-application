import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { fname,lname } = useParams();
  return (
    <div>
        <h1>this is the user page here we try the useParam.</h1>
        <h1>Hi {fname} {lname}. Welcome to our Website.</h1>
    </div>
  )
}

export default User