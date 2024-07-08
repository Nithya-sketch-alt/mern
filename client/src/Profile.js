import React, { useState, useContext } from 'react';
import { MyContext } from './MyContext';

const Profile = () => {
  const { currentUser, updateUser } = useContext(MyContext);
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    if (currentUser) {
      const updatedUser = { ...currentUser, password: newPassword };
      updateUser(updatedUser);
      alert('Password Updated');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {currentUser ? (
        <div>
          <p>Name: {currentUser.name}</p>
          <p>Age: {currentUser.age}</p>
          <p>Email: {currentUser.email}</p>
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      ) : (
        <p>Please login to view profile</p>
      )}
    </div>
  );
};

export default Profile;