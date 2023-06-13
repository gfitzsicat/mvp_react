import React, {useEffect, useState} from 'react'
import GetAllShakes from '../components/MenuItem';
import axios from 'axios'
import "../styles/menu.css"

function Menu() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const result = await axios.get("http://localhost:3114/api/shakes");
          console.log(result)
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      getData();
    }, []);
    

      return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
          <GetAllShakes allShakes={data} />
        </div>
    </div>
    );

//   return (
//     <div className='menu'>
//         <h1 className='menuTitle'>Our Menu</h1>
//         <div className='menuList'>
//         {GetRequests.map((menuItem, key))}
//           <GetAllShakes
//            key={key}
//            image={menuItem.image}
//            name={menuItem.name}
//            description={menuItem.description}
//            type={menuItem.type}
//            price={menuItem.price}
//            />
//         </div>
//     </div>
//     );
  
};

export default Menu


 