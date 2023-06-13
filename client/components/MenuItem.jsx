import React from "react";
import '../styles/menu.css'

const GetAllShakes = ({ allShakes }) => {
  
  return (
    <div className="menuList">
      {allShakes.map((shakes) => (
        <div>
          <div key={shakes.id} className="menuItem">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={shakes.image} height="100%" width="50%" />
          </div>
            <h3> {shakes.name}</h3>
            <p> Description: {shakes.description}</p>
            <p>Type: {shakes.type}</p>
            <p>
             {shakes.price} <button>Add to Cart</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllShakes;
