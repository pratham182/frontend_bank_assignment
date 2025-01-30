import React, { useState } from 'react';
import { auth } from '../api';
import { Link, useNavigate } from 'react-router-dom';

const AuthForm = ({ type, redirectUrl }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [validationError, setValidationError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputs = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setValidationError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const response = await auth(formData, type);

    if (response?.success  ) {

      console.log(response)

      setTimeout(()=>{
        window.location.href = redirectUrl; 

      },1000)
      
      // setError(response.message || 'An unknown error occurred');
    }
    else{
      setError(response.message || 'An unknown error occurred');

    }
  };

  return (
    <div className="auth-container">
      <h2 style={{ color: 'white' }}>{type === 'admin-login' ? 'Admin Login' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {validationError.email && <p className="validation-error">{validationError.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {validationError.password && <p className="validation-error">{validationError.password}</p>}

        {error && <p className="error">{String(error)}</p>}

        <button type="submit">Login</button>


        {
            type==="login" && (<p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>)
        }
        

      

      </form>
    </div>
  );
};

export default AuthForm;
