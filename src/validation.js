export const validateRegister = (userData) => {
    const errors = {};
  
    if (!userData.username) {
      errors.username = 'Username is required';
    } else if (userData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }
  
    if (!userData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    if (!userData.password) {
      errors.password = 'Password is required';
    } else if (userData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    if (userData.password !== userData.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }
  
    return errors;
  };
  

export const validateLogin = (formData) => {
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

  return errors;
};
