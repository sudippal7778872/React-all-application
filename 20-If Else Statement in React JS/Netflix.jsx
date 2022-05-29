import React from 'react'
import Card from "./Card";
import Sdata from "./Sdata"

const Netflix = () => {
  return (
        <Card
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            name={Sdata[1].name}
            link={Sdata[1].link}
        />
    )
}

export default Netflix