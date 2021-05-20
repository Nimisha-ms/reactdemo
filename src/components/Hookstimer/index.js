import React, {useState} from 'react'; 
import { View } from 'react-native';
import Button from '../Button';

const Hookstimer = () => {    

    let currTime = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(currTime);

    const onPress = () => {
        currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }

    return (
        <>
            <h2>Current time : {ctime}</h2>

            <View style={{ flex: 1, padding : 5, width: "30%", }}>
                <Button  text='Submit' onPress={onPress}>
                    Get Time
                </Button>
            </View>
             
        </>
    )
}

export default Hookstimer;