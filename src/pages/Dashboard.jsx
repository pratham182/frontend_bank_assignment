import React, { useState, useEffect } from 'react';
import { addBank, deleteAccount, editAccount, getBanks } from '../api';
import Modal from '../Component/Modal';
import Navbar from '../Component/Navbar';
import { toast, ToastContainer } from 'react-toastify'; 
import '../styles/Dashboard.css';
import BankList from '../Component/BankList';

const Dashboard = () => {
  const [banks, setBanks] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({
    bankName: '',
    branchName: '',
    accountHolderName: '',
    ifscCode: '',
    accountNumber: ''
  });

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await getBanks();
        if (response.success) {
          setBanks(response.data.data.accounts);
        } else {
          toast.error(response.message || 'Error fetching bank accounts');
        }
      } catch (err) {
        toast.error('Error connecting to server');
      }
    };
    fetchBanks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    let response;
    try {
      if (isEditing) {
        response = await editAccount(currentId, formData);
      } else {
        response = await addBank(formData);
      }

      if (response.success) {
        if (isEditing) {
          setBanks(banks.map(bank => (bank._id === currentId ? response.data.data.account : bank)));
        } else {
          setBanks([...banks, response.data.data]);
        }
        setIsModalOpen(false);
        setIsEditing(false);
        setCurrentId(null);
        toast.success(isEditing ? 'Account updated successfully!' : 'Bank added successfully!');
      } else {
        toast.error(response.message || 'Error updating bank');
      }
    } catch (err) {
      toast.error('Error while submitting the form');
    }
  };

  const handleAddBankClick = () => {
    setFormData({
      bankName: '',
      branchName: '',
      accountHolderName: '',
      ifscCode: '',
      accountNumber: ''
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const bankToEdit = banks.find((bank) => bank._id === id);
    if (bankToEdit) {
      setFormData({
        bankName: bankToEdit.bankName,
        branchName: bankToEdit.branchName,
        accountHolderName: bankToEdit.accountHolderName,
        ifscCode: bankToEdit.ifscCode,
        accountNumber: bankToEdit.accountNumber,
      });
      setCurrentId(id);
      setIsEditing(true);
      setIsModalOpen(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteAccount(id);

      if (response.success) {
        setBanks(banks.filter((bank) => bank._id !== id));
        toast.success('Account deleted successfully!');
      } else {
        toast.error(response.message || 'Error deleting account');
      }
    } catch (err) {
      toast.error('Error while deleting account');
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>Your Bank Accounts</h2>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button onClick={handleAddBankClick} className="add-bank-link">Add New Bank</button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <BankList banks={banks} handleEdit={handleEdit} handleDelete={handleDelete}/>

        {isModalOpen && (
          <Modal
            formData={formData}
            setIsModalOpen={setIsModalOpen}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            isEditing={isEditing}
          />
        )}
      </div>

      <ToastContainer/>
    </>
  );
};

export default Dashboard;
