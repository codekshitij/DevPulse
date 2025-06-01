import React from 'react';
import devpulseLogo from '../../assets/devpulse-logo.svg';
import '../../styles/fonts.css';



const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <img src={devpulseLogo} alt="DevPulse Logo" style={logoStyle} />
      <span className="sour-gummy" style={titleStyle}>DevPulse</span>
    </nav>
  );
};
const navbarStyle = {
  width: '100%',
  background: '#030303', // Use palette black for navbar background
  position: 'fixed',      // ✅ Keeps navbar on top
  top: 0,                 // ✅ Position at top of screen
  left: 0,                // ✅ Align to left edge
  zIndex: 1000,           // ✅ Make sure it’s above sidebar
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 1rem', // Reduce vertical and horizontal padding
  minHeight: '45px', // Reduce minimum height
};

const logoStyle = {
  height: '36px', // Reduce logo height
  width: '60px', // Reduce logo width
  objectFit: 'contain',
  filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.5))',
  borderRadius: '12px',
  padding: '4px', // Reduce padding
};

const titleStyle = {
  color: '#ffffff', // Pure white
  fontWeight: 900, // Make font extra bold
  fontSize: '2rem', // Reduce font size
  letterSpacing: '1.5px',
  fontFamily: 'Sour Gummy',
  textShadow: '0 2px 16px #fff, 0 1px 0 #fff', // Stronger white glow
};

export default Navbar;
