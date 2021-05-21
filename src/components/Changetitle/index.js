import React, { useEffect, useState } from 'react';

const Changetitle = () =>{

    const [num,setNum] = useState(0);

    useEffect(()=>{
        document.title = `you clicked me ${num} times`;
    });

    return (
        <>
            <div>
            <h2>Change Title</h2>
            <button onClick={()=>{setNum(num+1)}}>Click Me {num}</button>
            </div>

        </>
    )
}

export default Changetitle;