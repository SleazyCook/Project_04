import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
const appElement = document.getElementById("app")
const root = createRoot(appElement)

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
            <h1 id="title">Puppy Bowl XXII-IX</h1>
            <div>
                {
                    puppyPlayers && puppyPlayers.length ? puppyPlayers.map((puppy, idx) => {
                        console.log(puppy.name)
                        return <div key ={idx}>
                            <p>Name of Player: {puppy.name}</p>
                            
                            <p>Player breed: {puppy.breed}</p>
                            <img src={puppy.imageUrl}></img>
                        </div>
                    }) :  <p>No puppies to display. Try again later</p>
                }
            </div>
                
            <div>
                <footer>
                    <p>Developed by <span id="author">Drewford</span></p>
                </footer>
            </div>
        </div>
    )
};

ReactDOM.render(<Homepage />, document.getElementById("app"));