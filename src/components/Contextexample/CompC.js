import React from 'react';
import { Firstname, Lastname } from '../../App';

const CompC = () => {
    return (
        <>
                {/* <Firstname.Consumer>
                {fname => (
                    <Lastname.Consumer>
                        {lname => (
                            <p>Firstname: {fname} and Lastname: {lname}</p>
                        )}
                    </Lastname.Consumer>
                )}
                </Firstname.Consumer> */}

            {/* <Firstname.Consumer> 
            {(fname)=>{
                return   <h2>His name is {fname}</h2>
            }} 
            </Firstname.Consumer> */}
        </>
    )   
}

export default CompC;