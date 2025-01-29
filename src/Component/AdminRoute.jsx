import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AdminRoute = ({ element }) => {
  const [isAdmin, setIsAdmin] = useState(null); 

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/admin", {
          withCredentials: true,
        });

        if (response.data.success && response.data.isAdmin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        setIsAdmin(false); // Permission denied
      }
    };

    checkAdmin();
  }, []);

  // Show loading state while checking admin status
  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  if (isAdmin) {
    return element;
  }
  

  return <Navigate to="/adminLogin" />;
};

export default AdminRoute;
