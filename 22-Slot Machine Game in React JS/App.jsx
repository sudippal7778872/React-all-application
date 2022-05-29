// Slot machine game
import React from "react";

const SlotM = (props) => {
    // let x = "s";
    // let y = "s";
    // let z = "v";
    const {x,y,z} = props;


    if (x === y && y === z) {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z} </h1>
                    <h1>This is matching</h1>
                    <hr />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z} </h1>
                    <h1>This is Not matching</h1>
                    <hr />
                </div>
            </>
        )
    }
}



const App = () => {
    return (
        <div>
            <h1>Welcome to  Slot Machine Game</h1>
            <div>
                <SlotM x='s' y='s' z='s' />
                <SlotM x='s' y='v' z='s' />
                <SlotM x='s' y='s' z='z'/>
            </div>
        </div>
    )
}

export default App
