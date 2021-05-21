import React, { useState } from 'react';

const Incdec = () => {

    //const currnumber = '0';

    const [num, setNum] = useState(0);

    const incNum = (e) =>{        
        setNum(num + 1);
    }

    const decNum = () =>{
        if(num > 0){
            setNum(num -1);
        }else{
            setNum(0);
        }
    }

    return(
        <>
            <div>
                <div>{num}</div>
                <div>
                <button onClick={incNum}>Inc</button>
                <button onClick={decNum}>Dec</button>
                </div>
            </div>
        </>
    )
}

export default Incdec;

