import React from "react";


const GetAllShakes = ( { allShakes }) => {
    console.log(allShakes);
    console.log(allShakes[0])
    return (
        <div>
        {allShakes.map((shakes) => (
            < div key={shakes.id}>
            <img src={shakes.image} height="300px" width="200px"/>
            <h5>Drink: {shakes.name}</h5>
            <h5>Description: {shakes.description}</h5>
            <h5>Type: {shakes.type}</h5>
            <h5>Price: {shakes.price}</h5> 
        </div>
        ))}
        </div>
    )
  };


  export default GetAllShakes;