import React from 'react'
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
    return (
        <>
            <NavLink exact activeClass="active_class" to="/navbar/about">About</NavLink>
            <NavLink exact activeClassName="active_class" to="/navbar/contact">Contact Us</NavLink>
            <br/>
            <a href="/">About </a>
            <a href="/">Contact</a>
        </>
    )
}

export default Navbar;
