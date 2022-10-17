import React from "react";
import { useOutletContext } from "react-router-dom"; 

const AllPuppies = () => {
    const thisIsOurOutletContext = useOutletContext(); 
    console.log("This is our outlet context: ", thisIsOurOutletContext); 

    return (
        <div>
            <p>See all of our puppies available here:</p>

            {
                thisIsOurOutletContext[0].map((puppy, idx) => {
                    return <div key={idx}>
                        <p>Name of puppy: {puppy}</p>
                    </div>
                })
            }
        </div>
    )
};

export default AllPuppies; 