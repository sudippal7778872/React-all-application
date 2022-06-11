import React from "react";

const Sresult = (props) => {
    const image = `https:source.unsplash.com/random/600x400/?${props.imageName}`
    return (
        <>
            <img src={image} alt="not loaded" />
        </>
    )
}

export default Sresult