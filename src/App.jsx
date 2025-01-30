import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './Component/AuthRoute';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './Component/AdminRoute'; 

const Buttons = () => {
  return (
    
      <div style={styles.divbar}>
        <h2 style={styles.logo}>Portal</h2>
        <div>
          <Link to="/login" style={styles.link}>User Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
          <Link to="/adminLogin" style={styles.link}>Admin Login</Link>
        </div>
      </div>
  )
};
const App = () => {
  return (
    <Router>
      <Buttons/>
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


const styles = {
  divbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#0056b3",
  },
};

export default App;
