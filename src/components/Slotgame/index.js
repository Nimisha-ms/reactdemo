import React from 'react'

const SlotM = (props) => {
    //  let x = props.x;
    //  let y = props.y;
    //  let z = props.z;

    let {x,y,z} = props;

    if( (x === y && y === z) ){
        return (
            <>
                <div className="">
                    <h1> {props.x} {props.y} {props.z} <br/>
                    This is matching</h1>                   
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div>
                    <h1> {props.x} {props.y} {props.z} <br/>
                    This is not matching</h1>                    
                </div>
            </>
        )
    }
}


const Slotgame = () => {
    return (
        <>
        <h1 className="heading_style">🎰 Welcome to <span style={{ fontWeight : 'bold' }}> Slot Machine Game </span> 🎰</h1>
            <SlotM x='😄' y='🎅' z='😄' />
            <SlotM  x='😄' y='😄' z='😄' />
            <SlotM x='😄' y='😄' z='🎅'/>
        </>
    )
};

export default Slotgame;