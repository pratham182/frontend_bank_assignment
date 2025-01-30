import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:2000";


const AuthRoute = ({ isPublic, element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);


  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api`, { 
          withCredentials: true 
        });

        console.log(response);
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  console.log(isAuthenticated)

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isPublic && isAuthenticated) {
    return <Navigate to="/"  />;
  }

  if (!isPublic && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default AuthRoute;
