import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"


const App = () => {
    return (
    <>
        <h1 className="heading_style">Top 5 Netflix web Series</h1>
        {
            Sdata.map((value) => {
            return (<Card
                key={value.id}
                imgsrc={value.imgsrc}
                title={value.title}
                name={value.name}
                link={value.link}
            />)
        })}
    </>
  )
    }
    export default App
