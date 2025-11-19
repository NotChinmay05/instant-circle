import React, { useState } from 'react';

const SignUpPage = ({ onViewChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({
      username: username,
      password: password,
    });
    // In a real app, you'd send this to a backend to create the user
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'var(--text-white)' }}>
      <h1>Sign Up Page</h1>
      <p>Join us today! Create your account.</p>
      <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px', marginBottom: '30px' }}>
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
          <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'var(--text-sky)', cursor: 'pointer', height: 'auto', width: 'auto', borderRadius: '0', padding: '0' }}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: '10px', width: '250px', borderRadius: '8px', border: 'none', backgroundColor: 'var(--bg-card)', color: 'var(--text-white)', fontSize: '1rem' }}
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'var(--text-sky)', cursor: 'pointer', height: 'auto', width: 'auto', borderRadius: '0', padding: '0' }}>
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" style={{ width: '270px', height: '40px' }}>
          Sign Up
        </button>
      </form>
      <button onClick={() => onViewChange('login')} style={{ marginTop: '20px', width: '200px', height: '40px' }}>
        Already have an account? Login
      </button>
      <button onClick={() => onViewChange('home')} style={{ marginTop: '20px', marginLeft: '10px', backgroundColor: 'var(--accent-blue)', height: '40px' }}>
        Back to Home
      </button>
    </div>
  );
};

export default SignUpPage;