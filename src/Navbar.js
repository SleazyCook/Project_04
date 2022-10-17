import React from "react";
// HOW TO SET UP A WORKING NAVBAR FOR A SINGLE PAGE APPLICATION
// STEP 1: IMPORT THE LINK FROM REACT-ROUTER-DOM
import { Link } from "react-router-dom"; 

const Navbar = () => {
    return (
        <nav>
            {/* STEP 2: USE THE LINK ELEMENT TO CREATE LINKS FOR YOUR NAVBAR, BEING SURE TO USE THE "TO" ATTRIBUTE TO REFER TO EACH PATHNAME, RESPECTIVELY */}
            <Link to="settings">Settings</Link>
            <Link to="about">About Us</Link>
            <Link to="puppies">All Puppies</Link>
        </nav>
    )
};

export default Navbar; 