import React, {useState} from 'react';
import '../../index.css';

const Basicform = () => {
    
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();

    const inputEvent = (e) => {
        //console.log(e.target.value);        
        setName(e.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }

    return(
        <>
            <div>
            <h2>Hello {fullName}</h2>
            <input type="text" placeholder="Enter your name" defaultValue={name} onChange={inputEvent}/>
            <br/ >
            <button onClick={onSubmit}>Click Me</button>
            </div>
        </>
    )
};

export default Basicform;