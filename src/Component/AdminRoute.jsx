import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const backendUrl = "http://localhost:2000";

const AdminRoute = ({ isPublic, element }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/admin`, {
          withCredentials: true,
        });

        setIsAdmin(response.data.success && response.data.isAdmin);
      } catch (error) {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  if (isAdmin === null) {
    return <div>Loading...</div>; 
  }

  if (isPublic && isAdmin) {
    return <Navigate to="/adminDashboard" />;
  }

  if (!isPublic && !isAdmin) {
    return <Navigate to="/adminLogin" />;
  }

  return element;
};

export default AdminRoute;
