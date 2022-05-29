// Ternary Operator
// condition?statement for true:statement for false
// if amazon we will show only Amazon card
// if netflix we will show only Netflix card

// after that make a part of two seperate component Netflix and Amazon.

import React from "react";
// import Card from "./Card";
// import Sdata from "./Sdata"
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const Favourite = "Amazon";

// const Fav = () => {
//     if (Favourite === "netflix") {
//         return (
//             <Netflix />
//         )
//     } else {
//         return (
//             <Amazon />
//         )
//     }
// }

//let use ternary oprator

const App = () => {
    return (
        <>
            <h1 className="heading_style">Top 5 Netflix web Series</h1>
            {/* <Fav/> */}
            { Favourite === "Amazon" ? <Amazon /> : <Netflix /> }
        </>
    )
}
export default App
