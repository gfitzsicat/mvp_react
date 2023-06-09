import React, { useEffect, useState } from "react";
import axios from "axios";
import GetAllShakes from "./App1"



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
    <GetAllShakes allShakes={data}/>
    )
};

export default App;
