import React, { useState } from 'react';

const LoginPage = ({ onViewChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the page from reloading on form submission
    console.log({
      username: username,
      password: password,
    });
    // In a real application, you would send these credentials to your backend for verification
  };

  return (
    <div className='loginBox' style={{ textAlign: 'center', padding: '50px', color: 'var(--text-white)'}}>
      <h1>Login Page</h1>
      <p>Welcome back! Please log in to continue.</p>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', width: '250px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--bg-card)', color: 'var(--text-white)', fontSize: '1rem' }}
        />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '250px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--bg-card)', color: 'var(--text-white)', fontSize: '1rem' }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'var(--text-sky)', cursor: 'pointer',
              height: 'auto', width: 'auto', borderRadius: '0', padding: '0'
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" style={{ width: '270px', height: '40px' }}>
          Login
        </button>
      </form>
      <button onClick={() => onViewChange('signup')} style={{ marginTop: '20px', width: '150px', height: '40px'}}>
        Don't have an account? Sign Up
      </button>
      <button onClick={() => onViewChange('home')} style={{ marginTop: '20px', marginLeft: '10px', backgroundColor: 'var(--accent-blue)', height: '40px'}}>
        Back to Home
      </button>
    </div>
  );
};

export default LoginPage;