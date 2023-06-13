import React, { useState} from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
  // this is use for the size of the screen base on true or false
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src="/Photos/BF Logo.jpeg" alt="Logo" style={{ borderRadius: '50%' }} />
        {/* Div base on screen size */}
        <div className="hiddenLinks">
          <Link to="/search"> 🔍Search </Link>
          <Link to="/"> 🏠Home </Link>
          <Link to="/menu"> 🥤Menu </Link>
          <Link to="/cart"> 🛒Cart </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/search"> 🔍Search </Link>
        <Link to="/"> 🏠Home </Link>
        <Link to="/menu"> 🥤Menu </Link>
        <Link to="/cart"> 🛒Cart </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>


  // const handleItemClick = (item) => {
  //   // Handle click event for each item in the Navbar
  //   // This function will be executed when a list item is clicked
  //   console.log(`Clicked item: ${item}`);
  // };

    // <nav style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
    //   <img src="/Photos/BF Logo.jpeg" alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%', marginLeft: '5%' }} />
    //   <ul style={{ display: 'flex', listStyle: 'none', paddingLeft: 0, marginLeft: 'auto' }}>
    //     <li className="listItem" onClick={() => handleItemClick('Home')}>🏠Home |</li>
    //     <li className="listItem" onClick={() => handleItemClick('Menu')}>🥤Menu |</li>
    //     <li className="listItem" onClick={() => handleItemClick('Specials')}>Specials |</li>
    //     <li className="listItem" onClick={() => handleItemClick('Cart')}>🛒Cart </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
