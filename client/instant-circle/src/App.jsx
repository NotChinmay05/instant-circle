import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle.jsx";
import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

export default function App(){

  // State for navigating between pages: 'home', 'login', 'signup'
  const [view, setView] = useState('home');

  // Function to render the correct page component based on the current 'view' state
  const renderContent = () => {
    switch (view) {
      case 'login':
        return <LoginPage onViewChange={setView} />;
      case 'signup':
        return <SignUpPage onViewChange={setView} />;
      case 'home':
      default:
        return <HomePage onViewChange={setView} />;
    }
  };

  return (
    <div className="app-container">
      <GlobalStyle/>
      <Navbar onViewChange={setView} currentView={view} />
      <main>
        {/* 3. Main content area for the current page */}
        <div className="max-width-wrapper">
            {renderContent()}
        </div>
      </main>
      <Footer/>
    </div>
  );
}