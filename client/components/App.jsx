import React, { useEffect, useState } from "react";
import axios from "axios";
import GetAllShakes from "./Content"
import Navbar from "./Navbar";


const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    try { const getData = async() => {
      const result = await axios.get("api/shakes");
      setData(result.data);
    }
      getData()
    } catch (error) {
      console.error(error)
    };
  }, []);

  return (
    <div>
      <Navbar />
        <div>
          <GetAllShakes allShakes={data}/>
        </div>
    </div>
    )
};

export default App;
