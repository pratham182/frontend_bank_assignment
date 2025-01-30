import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import '../styles/Navbar.css';
import { logout } from '../api';

const Navbar = () => {
  const navigate = useNavigate();  

  const handleLogout = async () => {
    try {
      const result = await logout();  

      console.log(result);

      if (result.success) {
        clearCookie('jwt', '/', "https://frontend-bank-assignment.vercel.app/");


        navigate('/login');  
      } else {
        console.error("Logout failed", result.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="navbar">
      <h1>Bank Info System</h1>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
