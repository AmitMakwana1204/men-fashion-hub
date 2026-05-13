import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import './SignupForm.css';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        toast.success('Login successful!');
        console.log('User Logged In:', data);
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <form onSubmit={handleSubmit}>
          {/* form */}
          <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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