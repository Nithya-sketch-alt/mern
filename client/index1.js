import React from 'react';
import { MyProvider } from './MyContext';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import TaskManager from './TaskManager';

const App = () => {
  return (
    <MyProvider>
      <div>
        <h1>Personal Task Manager</h1>
        <Register />
        <Login />
        <Profile />
        <TaskManager />
      </div>
    </MyProvider>
  );
};

export default App;