import React, { useState } from 'react';

const FormComponent = ({ formData, setFormData, validationError, setValidationError, handleSubmit, errorMessage, children }) => {
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputs = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setValidationError(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      {children(handleChange, validationError)}

      {errorMessage && <p className="error">{errorMessage}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
