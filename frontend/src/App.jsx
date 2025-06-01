import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import DeveloperDashboard from './pages/DeveloperDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DeveloperDashboard />} />
    </Routes>
  );
}

export default App;
