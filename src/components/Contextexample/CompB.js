import React, { useContext } from 'react';
import CompC from './CompC';
import { Firstname, Lastname } from '../../App';

const CompB = () => {

    const fname = useContext(Firstname);
    const lname = useContext(Lastname);

    return (
        <p>Firstname: {fname} and Lastname: {lname}</p>
    )   
}

export default CompB;