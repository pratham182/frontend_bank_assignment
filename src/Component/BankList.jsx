import React from 'react';

const BankList = ({ banks, handleEdit, handleDelete, type }) => {
  return (
    <div className="bank-list">
      <table>
        <thead>
          <tr>
            {type == 'admin' && <th>
              username
              </th>}
            
            <th>Bank Name</th>
            <th>Branch Name</th>
            <th>Account Holder</th>
            <th>IFSC Code</th>
            <th>Account Number</th>
           
            {type === 'user' && <th>Actions</th>} 
          </tr>
        </thead>
        <tbody>
          {banks.data.length > 0 ? (
            banks.data.map((bank) => (
              <tr key={bank._id}>
                 {type == 'admin' && <td>
              {bank.user.username}
              </td>}
                <td>{bank.bankName}</td>
                <td>{bank.branchName}</td>
                <td>{bank.accountHolderName}</td>
                <td>{bank.ifscCode}</td>
                <td>{bank.accountNumber}</td>
                {type === 'user' && ( 
                  <td>
                    <button onClick={() => handleEdit(bank._id)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(bank._id)} className="delete-btn">Delete</button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={type === 'user' ? 6 : 5}>No bank accounts available.</td> {/* Adjust column span based on actions */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BankList;
