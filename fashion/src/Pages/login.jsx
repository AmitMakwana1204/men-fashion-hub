import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <form onSubmit={handleSubmit}>
          {/* form */}
          <input type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOGIN</button>
        </form>
        <p className="signup-text">
          Not registered? <Link to="/SignupForm">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;