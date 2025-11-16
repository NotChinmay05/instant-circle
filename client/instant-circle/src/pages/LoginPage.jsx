import React from 'react';

const LoginPage = ({ onViewChange }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-white)' }}>
      <h1>Login Page</h1>
      <p>Welcome back! Please log in to continue.</p>
      {/* You would add your login form here */}
      <button onClick={() => onViewChange('signup')} style={{ marginTop: '20px' }}>
        Don't have an account? Sign Up
      </button>
      <button onClick={() => onViewChange('home')} style={{ marginTop: '20px', marginLeft: '10px', backgroundColor: 'var(--accent-blue)' }}>
        Back to Home
      </button>
    </div>
  );
};

export default LoginPage;