import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../api';
import { validateRegister } from '../validation'; 

import '../styles/AuthStyle.css';


const Register = () => {


  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState('');
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateRegister(userData);
    setValidationError(errors);

    if (Object.keys(errors).length === 0) {
      const response = await auth(userData, 'register');

      if (response.success) {

        window.location.href = "/";


      } else {
        setError(response.message);
      }
    }
  };

  return (
    <>
     <div className="auth-container">
      <h2 style={{ color: 'white' }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        {validationError.username && (
          <p className="validation-error">{validationError.username}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        {validationError.email && (
          <p className="validation-error">{validationError.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        {validationError.password && (
          <p className="validation-error">{validationError.password}</p>
        )}

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          value={userData.confirm_password}
          onChange={handleChange}
          required
        />
        {validationError.confirm_password && (
          <p className="validation-error">{validationError.confirm_password}</p>
        )}

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </>
   
  );
};

export default Register;
