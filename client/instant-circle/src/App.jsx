import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import Home1 from "./components/Home1.jsx"
import Home2 from "./components/Home2.jsx"
import Home3 from "./components/Home3.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home1/>
        <Home2/>
        <Home3/>
      </div>
      <div className="actionBox">
        <h2>Join us Now!</h2>
        <div className="navbox">
          <a href="#" className="navlink"><p>Login</p></a>
          <a href="#" className="navlink"><p>Sign Up</p></a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
