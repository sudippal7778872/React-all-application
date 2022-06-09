import React from 'react'
import { FullName } from '../App'

// 1st way 
// const Comp3 = () => {
//     const name = useContext(FullName);
//     return (
//         <div>
//             <h1>Hi my name is {name} </h1>
//         </div>
//     )
// }


// 2nd way
const Comp3 = () => {

    return (
        <>
            <FullName.Consumer>
                {(value) => {
                    return (
                        <h1>my name is { value }</h1>
                    )
                }}

            </FullName.Consumer>
        </>
    )
}

export default Comp3