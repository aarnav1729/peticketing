// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <div className="header">
      <h1>Premier Energies Pvt Ltd Ticketing Software</h1>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
