import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './views/Navbar.jsx';

import { Home } from "./views/Home";
import Kitchen from "./views/Kitchen";
import Admin from "./views/Admin";
import { Login } from "./views/Login";
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';

const App = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const getToken = (user) => {
    setUser(user.token)
  }

  const navigateToHome = () => {
    navigate('/home');
  }

  return (
    <div className="App">
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Login getToken={getToken} navigateToHome={navigateToHome} />} />
        <Route
          path="kitchen"
          element={<Kitchen authToken={user} />
          } />
        <Route
          path="home"
          element={
            <ProtectedRoute user={user}>
              <Home authToken={user} />
            </ProtectedRoute>
          } />
        <Route
          path="admin"
          element={
            <ProtectedRoute user={user}>
              <Admin authToken={user} />
            </ProtectedRoute>
          } />
      </Routes>
    </div>
  );
}

export default App;
