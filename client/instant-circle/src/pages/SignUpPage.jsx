import React from 'react';

const SignUpPage = ({ onViewChange }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-white)' }}>
      <h1>Sign Up Page</h1>
      <p>Join us today! Create your account.</p>
      {/* You would add your sign-up form here */}
      <button onClick={() => onViewChange('login')} style={{ marginTop: '20px' }}>
        Already have an account? Login
      </button>
      <button onClick={() => onViewChange('home')} style={{ marginTop: '20px', marginLeft: '10px', backgroundColor: 'var(--accent-blue)' }}>
        Back to Home
      </button>
    </div>
  );
};

export default SignUpPage;