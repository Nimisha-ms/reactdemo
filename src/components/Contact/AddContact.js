import { useState } from "react";

const AddContact = (props) => {        

    const [fullName,setFullName] = useState({
        name: '',        
        email: '',
        
    });

    const inputEvent = (e) => {
        //console.log(e.target.value);
        const {name, value} = e.target;

        setFullName((prevValue)=>{
            return{
                ...prevValue,
                [name] : value,                
            }
          
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(fullName.name === '' || fullName.email === ''){
            alert("All fields are mandatory");
            return
        }

        props.addContactHandler(fullName);     
        setFullName({name:'',email:''});
    }


    return (
        <>
            <div className="ui main">
                <h2>Add Contact </h2>
                
                <form className="ui form" onSubmit={onSubmit}> 
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter name" onChange={inputEvent} value={fullName.name} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Enter email"  onChange={inputEvent} value={fullName.email} />
                    </div>
                    <button className="ui button blue">Add</button>

                </form>
            </div>
            
        </>
    )
}

export default AddContact;