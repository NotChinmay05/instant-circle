import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Instant Circle</h1>
      <img src={Logo} alt="Logo" id="logo"/>
      <div className="navbox">
        <a href="#" className="navlink"><p>Login</p></a>
        <a href="#" className="navlink"><p>Sign Up</p></a>
      </div>
    </nav>
  );
}

