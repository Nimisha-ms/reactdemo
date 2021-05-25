import ContactCard from "./ContactCard";

const Listing = (props) =>{    
    //console.log(props.contacts);

    const deleteContactHandler = (id) => {
         props.getContactId(id);
    };

    const renderContactList = props.contacts.map( (contact, index)=>{
                return (
                       <ContactCard contact={contact} key={index} clickHandler={deleteContactHandler}/>
                );
            })

    return (
        <>
            <div className="ui celled list">
                    {renderContactList}
            </div>
            <div>

            </div>
        </>
    )
}

export default Listing;