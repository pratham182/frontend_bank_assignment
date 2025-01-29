import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../Component/AuthForm'; // Importing the reusable form component

const Login = () => {
  return (
    <div>
      <AuthForm type="login" redirectUrl="/" />
      
    </div>
  );
};

export default Login;
