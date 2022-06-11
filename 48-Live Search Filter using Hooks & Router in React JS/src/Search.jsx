import React, { useState } from 'react'
import Sresult from './Sresult';

const Search = () => {
    const [img, setImg] = useState("");
    const handleChange = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return (
        <>
            <h1>Search Anything</h1>
            <div className='searchbar'>
                <input
                    type="text"
                    placeholder='Search Anything'
                    value={img}
                    name="image"
                    onChange={handleChange}
                />
                <Sresult imageName={img}/>
            </div>
        </>
    )
}

export default Search