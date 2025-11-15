import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle.jsx";

export default function App(){
  return (
    <div className="app-container">
      <GlobalStyle/>
      <Navbar/>
      <Footer/>
    </div>
  );
}