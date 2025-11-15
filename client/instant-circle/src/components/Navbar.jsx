import React from "react";
import Logo from "../assets/logo.png"

export default function Navbar({ onViewChange, currentView }) {
    return(
    <nav className="max-width-wrapper nav">
        <div className="navleft" style={{ display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <img src={Logo} alt="Instant Circle" style={{ height: '50px' }}/>
            <h1>Instant Circle</h1>
        </div>
        <div className="navright" style={{ display: 'flex', gap: '0.75rem' }}>
            {/* Show Login button only if currentView is NOT 'login' */}
            {currentView !== 'login' && (
            <button
                onClick={() => onViewChange('login')}
                className="nav-button shadow-md transition-all"
            >
                Login
            </button>
            )}
            {/* Show Sign Up button only if currentView is NOT 'signup' */}
            {currentView !== 'signup' && (
            <button
                onClick={() => onViewChange('signup')}
                className="nav-button shadow-md transition-all"
            >
                Sign Up
            </button>
            )}
        </div>
    </nav>
    );
}