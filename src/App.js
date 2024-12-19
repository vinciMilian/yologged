import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from './components/pages/Register';
import { ToastContainer } from 'react-toastify';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import { useEffect, useState } from 'react';
import { auth } from './components/scripts/firebase';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element = {user ?  <Navigate to="/profile" /> : <Register/> } />
          <Route path="/register" element = {<Register />} />
          <Route path="/login" element = { <Login/> } />
          <Route path="/profile" element = { <Profile/> } />
        </Routes>
        <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
