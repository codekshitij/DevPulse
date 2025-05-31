import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<div>Welcome to your dashboard!</div>} />
    </Routes>
  );
}

export default App;
