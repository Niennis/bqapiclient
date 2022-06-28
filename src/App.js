import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './views/Navbar.jsx';

import { Home } from "./views/Home";
import Kitchen from "./views/Kitchen";
import Admin from "./views/Admin";
import { Login } from "./views/Login";
import ProtectedRoute from './components/ProtectedRoute.jsx';

import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  // useEffect(() => {
  //   const currentUser = localStorage.getItem('token');
  //   console.log('currentUser', currentUser);
  //   // setUser(currentUser)
  // }, [])

  const getToken = (user) => {
    console.log('currentToken', user); 
    setUser(user.token)
  }

  const navigateToHome = () => {
    navigate('/home');
  }

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar user={user}/>

        <Routes>
          <Route path="/" element={<Login getToken={getToken} navigateToHome={navigateToHome}/>} />      
          <Route 
            path="kitchen"
            element={<Kitchen authToken={ user }  />
            } />
          <Route
            path="home"
            element={
              <ProtectedRoute user = { user }>
                <Home authToken={ user } />
              </ProtectedRoute>
            } />
            <Route
            path="admin"
            element={
              <ProtectedRoute user = { user }>
                <Admin authToken={ user } />
              </ProtectedRoute>
            } />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
