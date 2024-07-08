import React, { createContext, useState, useEffect } from 'react';
import { MyContext } from '../MyContext';
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const loginUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map(user => user.email === updatedUser.email ? updatedUser : user);
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <MyContext.Provider value={{ users, addUser, currentUser, loginUser, updateUser }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;