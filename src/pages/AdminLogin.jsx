import React from 'react';
import AuthForm from '../Component/AuthForm';
import ButtonBar from '../Component/ButtonBar';

const AdminLogin = () => {
  return (
    <div>
      <ButtonBar/>
      <AuthForm type="admin-login" redirectUrl="/adminDashboard" />
      
    </div>
  );
};

export default AdminLogin;
