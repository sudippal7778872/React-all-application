import React, { useEffect, useState } from 'react';
import axios from "axios";

const ComA = () => {
    const [num, setNum]=useState(1);
    const [name,setName] =useState();
    const [move,setMove] = useState();

    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(response.data);
            setName(response.data.name);
            setMove(response.data.moves.length);
            console.log(response.data.moves[0].move.name);
        }
        getData();
    })
  return (
    <>
    <h1>you select <span color='green'>{num}</span></h1>
    <h1>name is  <span color='green'>{name}</span></h1>
    <h1>i have <span color='green'>{move}</span></h1>
        <select value={num} onChange={(event) => {
            setNum(event.target.value);
        }} >
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </>
  )
}

export default ComA