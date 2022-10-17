import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
//to get router working, don't forget to import the outlet component from the react-router-dom 
import { Outlet } from "react-router-dom";

//declare main component
const Homepage = () => {

    
    return (
        <div>
            <header>
            <h1 className="title">Puppy
            <div className="title" id="bowl-num">XXII-IX</div>
            Bowl</h1>
            </header>
            <Navbar class="nav"/>
            <Outlet />
            <div>
                <footer>
                    <p>Developed by <span id="author">Drewford</span></p>
                </footer>
            </div>
        </div>
    )
};

export default Homepage;