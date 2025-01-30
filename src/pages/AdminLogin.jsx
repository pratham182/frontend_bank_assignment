import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../Component/AuthForm';
import ButtonsBar from '../Component/ButtonBar';

const AdminLogin = () => {
  return (
    <div>
      <ButtonsBar/>
      <AuthForm type="admin-login" redirectUrl="/adminDashboard" />
      
    </div>
  );
};

export default AdminLogin;
