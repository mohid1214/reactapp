import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';

function App() {

  const [isdashboardverified,setloginverified] = useState(localStorage.getItem('token') ? true : false );

  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path='/login' element={<Login setloginverified={setloginverified} />}></Route> 
          <Route path='/dashboard' 
          element={ isdashboardverified ? <Dashboard /> : <Navigate to = '/login' replace /> }></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
