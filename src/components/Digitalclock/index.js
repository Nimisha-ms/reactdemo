import React, {useState} from 'react';
// import {View} from 'react-native';
// import Button from '../Button';

const Digitalclock = () => {

    let newTime = new Date().toLocaleTimeString();

    const [placeTime, setTime] = useState(newTime);
    const onPress = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }    

    setInterval(onPress, 1000);
    return (
        <>       
            <h2>Digital Clock : {placeTime}</h2>         
        </>
    )
};

export default Digitalclock;