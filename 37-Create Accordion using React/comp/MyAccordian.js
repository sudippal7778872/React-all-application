import React, { useState } from 'react'

const MyAccordian = (props) => {
    const [show, setShow] =useState(false);
    const { question, answer } = props
    return (
        <>
            <div className='div-1'>
                <button onClick={()=> setShow(!show)}> {show? "—":"+"} </button>
                <h3> {question} </h3>
            </div>
            {show && <p> {answer} </p>}
            
        </>
    )
}

export default MyAccordian