import React from "react";
import '../app.css'

const Navbar = () => {
  const handleItemClick = (item) => {
    // Handle click event for each item in the Navbar
    // This function will be executed when a list item is clicked
    console.log(`Clicked item: ${item}`);
  };

  return (
    <nav style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
      <img src="/Photos/BF Logo.jpeg" alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%', marginLeft: '5%' }} />
      <ul style={{ display: 'flex', listStyle: 'none', paddingLeft: 0, marginLeft: 'auto' }}>
        <li className="listItem" onClick={() => handleItemClick('Home')}>🏠Home |</li>
        <li className="listItem" onClick={() => handleItemClick('Menu')}>🥤Menu |</li>
        <li className="listItem" onClick={() => handleItemClick('Specials')}>Specials |</li>
        <li className="listItem" onClick={() => handleItemClick('Cart')}>🛒Cart </li>
      </ul>
    </nav>
  );
};

export default Navbar;
