import React, { useState } from 'react'
import "./Accordian.css";
import { question } from './api';
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const [data, setData] = useState(question);
    return (
        <>
            <section>
            <h1>Interview Question</h1>
            {
                data.map((value) => {
                    const {id, question, answer} = value;
                    return (<MyAccordian key={id}
                        question = {question}
                        answer = {answer}
                    />)
                })
            }
            </section>
        </>
    )
}

export default Accordian