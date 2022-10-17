import React, {useState} from "react";
import NavBar from "./NavBar";
//to get router working, don't forget to import the outlet component from the react-router-dom 
import { Outlet } from "react-router-dom";

//declare main component
const Homepage = () => {
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
        <div>
            <header>
            <h1 class="title">Puppy
            <div class="title" id="bowl-num">XXII-IX</div>
            Bowl</h1>
            </header>
            <Navbar />
            

            <main>
                <div id="puppy-container">
                    {
                        puppyPlayers && puppyPlayers.length ? puppyPlayers.map((puppy, idx) => {
                            // console.log(puppy.name)
                            return <div id="puppy" key ={idx}>
                                <p>Player Name: <span id="puppy-name"><b>{puppy.name}</b></span></p>
                            
                                <p id="breed">{puppy.breed}</p>
                                <img class="puppy-portrait" src={puppy.imageUrl}></img>
                            </div>
                        }) :  <p>No puppies to display. Try again later</p>
                    }
                </div>
            </main>
            <div>
                <footer>
                    <p>Developed by <span id="author">Drewford</span></p>
                </footer>
            </div>
        </div>
    )
};

export default Homepage;