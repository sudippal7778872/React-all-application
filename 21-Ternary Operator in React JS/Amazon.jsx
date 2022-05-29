import React from 'react'
import Card from "./Card";
import Sdata from "./Sdata"

const Amazon = () => {
    return (
        <Card
            key={Sdata[4].id}
            imgsrc={Sdata[4].imgsrc}
            title={Sdata[4].title}
            name={Sdata[4].name}
            link={Sdata[4].link}
        />
    )
}

export default Amazon