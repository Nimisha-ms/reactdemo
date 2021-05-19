import React from 'react';
import { Switch } from 'react-router';

const Allpages = (props) => {
    return (
    <>      
        <div><a href="netflix" alt="Neflix list">Netflix List Using Props</a></div>
        <div><a href="greetings" alt="Greetings Details">Greetings By Timing</a></div>
        <div><a href="currentdate" alt="Display Current Date">Display current date</a></div>
    </> 
    )
}

export default Allpages;