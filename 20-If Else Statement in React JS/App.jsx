// if else statement in React.
// now we will ask user, what is choice there choice netflix or Amazon?
// if amazon we will show only Amazon card
// if netflix we will show only Netflix card

// after that make a part of two seperate component Netflix and Amazon.

import React from "react";
// import Card from "./Card";
// import Sdata from "./Sdata"
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const Favourite = "netflix";

const Fav = () => {
    if (Favourite === "netflix") {
        return (
            <Netflix />
        )
    } else {
        return (
            <Amazon />
        )
    }
}

const App = () => {
    return (
        <>
            <h1 className="heading_style">Top 5 Netflix web Series</h1>
            <Fav/>
        </>
    )
}
export default App
