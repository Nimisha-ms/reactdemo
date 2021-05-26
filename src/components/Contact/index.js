import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <NavLink exact activeClass="active_class" to="/contact/add">Add Contact</NavLink>
            <br/>
            <NavLink exact activeClassName="active_class" to="/contact/list">Contact List</NavLink>
                        
        </>
    )
}

export default Navbar;
