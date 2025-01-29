import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../Component/AuthForm';

const AdminLogin = () => {
  return (
    <div>
      <AuthForm type="admin-login" redirectUrl="/adminDashboard" />
      
    </div>
  );
};

export default AdminLogin;
