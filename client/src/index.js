import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './input.css'; 
import Navbar from './components/navbar'; 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './Register'; 
import Login from './Login';
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(  <div> 
  <Router> 
      <Navbar/> 
    <Routes> 
      <Route path="/about" element={<h1>About</h1>}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/>
    </Routes> 
  </Router> 
   
 </div> 
); 
