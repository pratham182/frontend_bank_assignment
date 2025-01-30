import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../Component/AuthForm'; // Importing the reusable form component
import ButtonBar from '../Component/ButtonBar';

const Login = () => {
  return (
    <div>
      <ButtonBar/>
    
      <AuthForm type="login" redirectUrl="/" />
      
    </div>
  );
};

export default Login;
