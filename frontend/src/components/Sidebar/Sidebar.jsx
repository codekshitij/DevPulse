import React from 'react';
import { ArrowLeftFromLine } from 'lucide-react';
import LucideIcons from '../../utils/iconUtils';


const Sidebar = ({ closeSidebar }) => {
  return (
    <aside style={sidebarStyle}>
      <div style={topSectionStyle}>
        {/* Close Button */}
        <button
          style={closeButtonStyle}
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          <ArrowLeftFromLine color="#fff" size={56} />
        </button>

      </div>

      <div style={mainSectionStyle}>
        <nav style={{ width: '100%', marginTop: '3rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
            <li style={navItemStyle}>
              <LucideIcons.House /> Dashboard
            </li>
            <li style={navItemStyle}>
              <LucideIcons.SquareCheckBig /> Task Tracker
            </li>
            <li style={navItemStyle}>
              <LucideIcons.SquareActivity /> Activity Timeline
            </li>
            <li style={navItemStyle}>
              <LucideIcons.FolderOpenDot /> Projects
            </li>
            <li style={navItemStyle}>
              <LucideIcons.ChartArea /> Highlights
            </li>
          </ul>
        </nav>
      </div>

      <div style={bottomSectionStyle}>
        {/* Settings and Logout Section */}
        <button style={bottomButtonStyle}>Settings</button>
        <button style={bottomButtonStyle}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;

const sidebarStyle = {
  width: '300px',
  height: 'calc(100vh - 56px)',
  background: ' #393E46',
  
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 0',
  position: 'fixed',
  top: '80px',
  left: 0,
  zIndex: 900,
  fontFamily: 'Alumni Sans Pinstripe', 
};

const navItemStyle = {
  padding: '1rem 2rem',
  color: '#fff',
  fontSize: '1.15rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  borderRadius: '8px',
  margin: '0.25rem 1rem',
  transition: 'background 0.2s',
};

const topSectionStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
};

const mainSectionStyle = {
  flex: 1,
  width: '100%',
  overflowY: 'auto',
};

const bottomSectionStyle = {
  width: '100%',
  padding: '1rem 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  textAlign: 'center',
};

const bottomButtonStyle = {
  width: '90%',
  padding: '0.75rem',
  margin: '0.5rem 0',
  background: '#345678',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  textAlign: 'center',
  fontSize: '1rem',
  transition: 'background 0.2s',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '16px',
  right: '-36px', // overhang right outside
  background: '#030303',
  border: 'none',
  borderRadius: '50%',
  width: '72px',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  zIndex: 1201,
  outline: 'none',
};
