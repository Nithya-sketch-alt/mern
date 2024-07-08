import React, { useState } from 'react';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState(() => {
    // Initialize users from localStorage or an empty array
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from localStorage or an empty array
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleRegister = (userDetails) => {
    // Save user details to localStorage
    const updatedUsers = [...users, userDetails];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleLogin = (email, password) => {
    // Check if user exists and set as logged-in user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    // Clear logged-in user
    setLoggedInUser(null);
  };

  const handleAddTask = (taskDetails) => {
    // Save task to localStorage
    const updatedTasks = [...tasks, { ...taskDetails, userId: loggedInUser.email }];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleChangePassword = (newPassword) => {
    // Update user's password locally and in localStorage
    const updatedUsers = users.map(user =>
      user.email === loggedInUser.email ? { ...user, password: newPassword } : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <Profile user={loggedInUser} onChangePassword={handleChangePassword} />
          <TaskManager user={loggedInUser} onAddTask={handleAddTask} tasks={tasks} />
        </div>
      ) : (
        <div>
          <Register onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister({ name, age, email, password });
    setName('');
    setAge('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Profile = ({ user, onChangePassword }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    onChangePassword(newPassword);
    setNewPassword('');
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

const TaskManager = ({ user, tasks, onAddTask }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleAddTask = () => {
    const taskDetails = { time, date, note };
    onAddTask(taskDetails);
    setTime('');
    setDate('');
    setNote('');
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>

      <h3>Tasks</h3>
      <ul>
        {tasks.filter(task => task.userId === user.email).map((task, index) => (
          <li key={index}>
            <p>Date: {task.date}</p>
            <p>Time: {task.time}</p>
            <p>Note: {task.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;