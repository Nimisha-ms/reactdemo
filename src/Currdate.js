
import React from 'react'

const myname = "Test";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const Currdate = () => {
    return (
        <>
        <h1>My name is {myname}</h1>
        <p>Current date is = {currDate}</p>
        <p>Current time is = {currTime}</p>
        </>
    )
}

export default Currdate;