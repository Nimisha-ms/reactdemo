import React, { useState } from 'react';
import {View} from 'react-native';
import Button from '../Button';

const Allevents = () => {

    const green = '#b4f2e1'
    const [bg, setBg] = useState(green);
    const [name, setName] = useState('Click Me');

    const onPress = () => {
        let newColor ="red";
        setBg(newColor);
        setName('Button is clicked 🥳');
    };

    return (
        <>
        
        <div style= {{ backgroundColor : bg }}>
        <View style={{ flex: 1, padding : 5, width: "30%", }}>
                <Button  text='Submit' onPress={onPress}>
                    {name}
                </Button>
            </View>
            </div>
        </>
    )
}

export default Allevents;