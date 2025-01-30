

import axios from "axios"


const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:2000";



export const auth = async (formData, label) => {
  try {
    let response;
    
    if (label === 'admin-login') {
      response = await axios.post(
        `${backendUrl}/api/login`,
        { role: "admin", ...formData },
        { withCredentials: true }
      );
    } else {
      response = await axios.post(
        `${backendUrl}/api/${label}`,
        { role: "user", ...formData },
        { withCredentials: true }
      );
    }

    console.log(response);

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to login",
    };
  }
};





export const checkAuth = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api`,{}, {
      withCredentials: true, 
    });

    if (response.status === 200) {
      return { isAuthenticated: true, data: response.data };
    }
  } catch (error) {
    return { isAuthenticated: false, error: error.response ? error.response.data : 'Error occurred' };
  }
};


export const logout= async()=>{
    try{

      const response = await axios.post(`${backendUrl}/api/logout`,{},{withCredentials: true});
        return { success: true, data: response.data };
    }catch(err){
      console.log(err);
      return {

        success: false,
        message: err.response?.data?.message || "Failed to logout",
      };

    }
}


export const getBanks = async () => {
  try{
  
    
    const response = await axios.get(`${backendUrl}/api/getAccountsDetail`, {
      withCredentials: true
    });
    return { success: true, data: response.data };

}catch(error){
console.log(error);
return {
        success: false,
        message: error.response?.data?.message || "Failed to fetch bank accounts",
      };

}


};




export const addBank=async(formData)=>{

  try{
  
    
    const response = await axios.post(`${backendUrl}/api/createAccount`, formData,{ withCredentials: true });
    return { success: true, data: response.data };

}catch(error){
console.log(error);
return {
        success: false,
        message: error.response?.data?.message || "Failed to create account",
      };

}


}


export const editAccount = async (accountId, updatedData) => {
  try {
    const response = await axios.put(
      `${backendUrl}/api/editAccount/${accountId}`,
      updatedData,
      { withCredentials: true } 
    );
    return { success: true, data: response.data };

    
  } catch (error) {
    console.error("Error updating account:", error.response?.data || error.message);

    return {
      success: false,
      message: error.response?.data?.message || "Failed to update account",
    };
  }
};



export const deleteAccount = async (accountId) => {
  try {
    const response = await axios.delete(
      `${backendUrl}/api/deleteAccount/${accountId}`, 
      { withCredentials: true } 
    );
     
    return { success: true, data: response.data };

  } catch (error) {

    return {
      success: false,
      message: error.response?.data?.message || "Failed to delete account",
    };
  }
};


