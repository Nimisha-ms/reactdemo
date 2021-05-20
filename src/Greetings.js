import React from 'react'

let currDate = new Date(2021, 5, 5, 14);
//let currDate = new Date();
currDate = currDate.getHours();

let greetword = '';

const cssStyle = {};

if(currDate >= 1 && currDate <12){
    greetword = 'Good Morning';
    cssStyle.color = 'Green';
}else if(currDate > 12 && currDate < 19){
    greetword = 'Good Afternoon';
    cssStyle.color = 'Orange';
}else{
    greetword = 'Good Night';
    cssStyle.color = 'Black';
}

const Greetings = () => {
    return (
        <>
        <div>
        <h1> Hello sir, <span style={cssStyle}>{greetword}</span></h1>
        </div>
        </>
    )
}

export default Greetings;