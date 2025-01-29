import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({ formData, setIsModalOpen, handleInputChange, handleFormSubmit, isEditing }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.bankName || formData.bankName.length < 3) {
      newErrors.bankName = "Bank name must be at least 3 characters.";
    }

    if (!formData.accountHolderName || formData.accountHolderName.length < 3) {
      newErrors.accountHolderName = "Account holder name must be at least 3 characters.";
    }

    if (!formData.branchName || formData.branchName.length < 3) {
      newErrors.branchName = "Branch name must be at least 3 characters.";
    }

    if (!formData.ifscCode || formData.ifscCode.length !== 11) {
      newErrors.ifscCode = "IFSC code must be exactly 11 characters.";
    }

    if (!formData.accountNumber || !/^\d{12}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Account number must be exactly 12 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleFormSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setIsModalOpen(false)}>x</button>
        <h2>{isEditing ? "Edit Bank" : "Add New Bank"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="bankName" value={formData.bankName || ''} onChange={handleInputChange} placeholder="Bank Name" />
          {errors.bankName && <p className="error">{errors.bankName}</p>}

          <input type="text" name="accountHolderName" value={formData.accountHolderName || ''} onChange={handleInputChange} placeholder="Account Holder Name" />
          {errors.accountHolderName && <p className="error">{errors.accountHolderName}</p>}

          <input type="number" name="accountNumber" value={formData.accountNumber || ''} onChange={handleInputChange} placeholder="Account Number" />
          {errors.accountNumber && <p className="error">{errors.accountNumber}</p>}

          <input type="text" name="branchName" value={formData.branchName || ''} onChange={handleInputChange} placeholder="Branch Name" />
          {errors.branchName && <p className="error">{errors.branchName}</p>}

          <input type="text" name="ifscCode" value={formData.ifscCode || ''} onChange={handleInputChange} placeholder="IFSC Code" />
          {errors.ifscCode && <p className="error">{errors.ifscCode}</p>}

          <button type="submit">{isEditing ? "Update Bank" : "Add Bank"}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
