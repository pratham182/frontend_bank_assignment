import React from 'react';
import AuthForm from '../Component/AuthForm'; 
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
