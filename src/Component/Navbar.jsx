import React, { useContext, useEffect } from 'react';
import { Link} from 'react-router-dom';
import '../styles/Navbar.css';
import { logout } from '../api';





const Navbar = () => {
 
  const handleLogout = async () => {
    try {
      const result = await logout();  

      console.log(result);  
     

      if (result.success) {
        window.location.href = "/";
       
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
