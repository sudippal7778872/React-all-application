import React, { useState } from 'react'

const Statewise = () => {
    const [data, setData] = useState();
    const URL = "https://data.covid19india.org/v4/min/data.min.json";
    const getPost = async () => {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const data = await response.json();
        return data;
    }
    const WB="";
    getPost()
        .then((mydata) => {
            const WB = mydata.WB.total
            console.log(WB)
            
        }).catch((error) => {
            console.log(error);
        })
        setData(WB);
    // const URL = "https://data.covid19india.org/v4/min/data.min.json";
    // fetch(URL)
    //     .then((response) => response.json())  // arrow function in  short
    //     .then((data) => {
    //         console.log(data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })


    return (
        <>
            <h1>india covid-19 dashboard</h1>

            <table border="2px solid">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>confirmed</th>
                        <th>deceased</th>
                        <th>recovered</th>
                        <th>tested</th>
                        <th>vaccinated1</th>
                        <th>vaccinated2</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    }
                </tbody>


            </table>
        </>
    )
}

export default Statewise