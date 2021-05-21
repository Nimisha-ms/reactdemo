import React, {useState} from 'react';
import '../../index.css';

const Loginform = () => {    

    const [fullName,setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();       
    }  
       
    const inputEvent = (e) =>{
        //  const value = e.target.value;
        //  const name = e.target.name;

        const { name,value } = e.target;

        setFullName((prevValue)=>{

            return{
                ...prevValue,
                [name] : value,                
            }
            // if(name === 'fName'){
            //     return {
            //     fname: value,
            //     lname: prevValue.lname,
            //     email: prevValue.email,
            //     phone: prevValue.phone,
            //     };
            // }else if(name === 'lName'){
            //     return {
            //         fname: prevValue.fname,
            //         lname: value,
            //         email: prevValue.email,
            //         phone: prevValue.phone,
            //         };
            // }else if(name === 'email'){
            //     return {
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: value,
            //         phone: prevValue.phone,
            //         };
            // }
            // else if(name === 'phone'){
            //     return {
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: prevValue.email,
            //         phone: value,
            //         };
            // }
        })
    }
   
    return(
        <>
         <div>
            <form onSubmit={onSubmit}>
            <div><h2>Hello {fullName.fname} {fullName.lname}</h2>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            </div>
            <input type="text" name="fname" placeholder="Enter name" 
            defaultValue={fullName.fname} onChange={inputEvent} />
            <br/>
            <input type="text" name="lname" placeholder="Enter Lastname" defaultValue={fullName.lname} onChange={inputEvent} />
            <br/>
            <input type="text" name="email" placeholder="Enter Email" defaultValue={fullName.email} onChange={inputEvent} />
            <br/>
            <input type="number" name="phone" placeholder="Enter Mobile" defaultValue={fullName.phone} onChange={inputEvent}/>
            <br/>
            <button type="submit">Submit me</button>
            </form>
         </div>
            
        </>
    )
};

export default Loginform;