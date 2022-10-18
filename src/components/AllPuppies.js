import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom"; 

const AllPuppies = () => {
    // const thisIsOurOutletContext = useOutletContext(); 
    // console.log("This is our outlet context: ", thisIsOurOutletContext); 
    const [puppyPlayers, setPuppyPlayers] = useState([]);
    useEffect(()=>{
        async function fetchPuppyData () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-MT-WEB-FT/players");
                const puppyData = await response.json();
                console.log(puppyData.data.players)
                setPuppyPlayers(puppyData.data.players)
            } catch (err) {
                console.log (err);
            }
        }
        fetchPuppyData();
    // second parameter is the dependency array, use an empty array to only render the data once
    }, [] ) 
    return (
        <div id="puppy-container">
            {
                puppyPlayers && puppyPlayers.length ? puppyPlayers.map((puppy, idx) => {
                    // console.log(puppy.name)
                    return <div id="puppy" key ={idx}>
                        <p>Player Name: <span id="puppy-name"><b>{puppy.name}</b></span></p>
                        <p id="breed">{puppy.breed}</p>
                        <img className="puppy-portrait" src={puppy.imageUrl}></img>
                    </div>
                }) :  <p>No puppies to display. Try again later</p>
            }
        </div>
    )
};

export default AllPuppies; 