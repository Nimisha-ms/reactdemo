import React, { useState } from 'react'; 
import { View } from 'react-native';
import Button from '../Button';

const Basichooks = (props) => {

    const [count, setCount] = useState(0);    

    const onPress = () => {
        setCount(count + 1);
      }

    return (
        <>
            <h2>{count}</h2>
      
            <View style={{ flex: 1, padding : 5, width: "30%", }}>
                <Button  text='Submit' onPress={onPress}>
                    Click Me
                </Button>
            </View>

            {/* <View style={{ flex: 1, alignItems: 'center' }}>
                <Button
                text='Submit'
                onPress={onPress}
                />
            </View> */}
        </>
    )
}

export default Basichooks;