import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import BankList from '../Component/BankList';
import { toast } from 'react-toastify';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:2000";


const AdminDashboard = () => {
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBanks = async () => {
      try {

        
        const response = await axios.get(`${backendUrl}/api/getAllAccounts`); 

        if (response.data.success) {
console.log(response.data.data)
          setBanks(response.data.data); 
        } else {
          toast.error(response.data.message || 'Error fetching bank accounts');
        }
      } catch (err) {
        console.error(err);
        
      } finally {
        setLoading(false); 
      }
    };

    fetchBanks();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there's an error
  }

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <h2>Users and Bank Accounts detail</h2>
        <BankList  type="admin" banks={banks} />
      </div>
    </>
  );
};

export default AdminDashboard;
