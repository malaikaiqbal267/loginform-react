import React, { useState } from 'react';

function LoggedOut({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLoginClick = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = 'Username is required';
    if (!password) validationErrors.password = 'Password is required';
    if (!confirmPassword) validationErrors.confirmPassword = 'Confirm Password is required';
    if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onLogin();
    }
  };

  return (
    <div>
      <h1>Login Form!</h1>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        <br />
        <label className='CP'>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
        <br />
        <button onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
}

export default LoggedOut;
