import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './Component/AuthRoute';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './Component/AdminRoute'; 


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={<AuthRoute isPublic={true} element={<Login />} />} />
        <Route path="/register" element={<AuthRoute isPublic={true} element={<Register />} />} />
        <Route path="/" element={<AuthRoute isPublic={false} element={<Dashboard />} />} />



<Route path="/adminLogin" element={<AdminRoute isPublic={true} element={<AdminLogin />} />} />
<Route path="/adminDashboard" element={<AdminRoute isPublic={false} element={<AdminDashboard />} />} />
      </Routes>
    </Router>
  );
};




export default App;
