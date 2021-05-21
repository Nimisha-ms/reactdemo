import React, { useEffect, useState } from 'react';
import Incdec from '../Incdec';

const Inceffect = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(()=> {
        alert("I m clicked");
    }, [num]);
    
    return (
        <>        
             <div>
                <button onClick={()=>{setNum(num+1)}}>Click Me {num}</button>
                <br/>
                <button onClick={()=>{setNums(nums+1)}}>Click Me {nums}</button>
            </div> 
        </>
    )
}

export default Inceffect;
