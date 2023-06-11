import React from "react";

const GetAllShakes = ({ allShakes }) => {
  console.log(allShakes);
  console.log(allShakes[0]);
  return (
    <div className="shakes-container">
      {allShakes.map((shakes) => (
        <div key={shakes.id} className="shake-item">
          <img src={shakes.image} height="300px" width="200px" />
          <h5>Drink: {shakes.name}</h5>
          <h5>Description: {shakes.description}</h5>
          <h5>Type: {shakes.type}</h5>
          <h5>
            Price: {shakes.price} <button>Add to Cart</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default GetAllShakes;
