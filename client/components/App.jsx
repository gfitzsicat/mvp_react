import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home /> }/>
          <Route path="/menu" exact element={<Menu /> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )

};

export default App;
