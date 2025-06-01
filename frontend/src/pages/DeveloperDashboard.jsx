import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { ArrowRightFromLine } from 'lucide-react';

const DeveloperDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* Sidebar Toggle Button (only when closed) */}
      {!sidebarOpen && (
        <button
          style={sidebarToggleStyle}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <ArrowRightFromLine color="#fff" size={48} strokeWidth={2.5} />
        </button>
      )}

      {/* Sidebar (conditionally rendered) */}
      {sidebarOpen && (
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      )}

      {/* Dashboard Content */}
      <div style={dashboardStyle}>
        <h1>Welcome to DevPulse</h1>
        {/* More content goes here */}
      </div>
    </>
  );
};

export default DeveloperDashboard;

const dashboardStyle = {
  
  minHeight: '100vh',
  paddingTop: '90px',     // Match total navbar height
  paddingLeft: '300px',   // If sidebar is fixed width
  boxSizing: 'border-box',
  overflow: 'hidden',
};


const sidebarToggleStyle = {
  position: 'fixed',
  left: '32px',
  bottom: '32px',
  background: '#030303',
  border: 'none',
  borderRadius: '50%',
  width: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  zIndex: 1200,
  outline: 'none',
};
