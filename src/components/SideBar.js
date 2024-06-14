// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";
import logoImage from "../components/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoImage} alt="Premier Energies Pvt Ltd Ticketing System" />
      </div>
      <ul>
        <li>
          <span className="icon">🏠</span>
        </li>
        <li>
          <span className="icon">📩</span>
        </li>
        <li>
          <span className="icon">📊</span>
        </li>
        <li>
          <span className="icon">💾</span>
        </li>
        <li>
          <span className="icon">⚙️</span>
        </li>
        <li>
          <span className="icon">💻</span>
        </li>
        <li>
          <span className="icon">⬇️</span>
        </li>
        <li>
          <span className="icon">📄</span>
        </li>
        <li>
          <span className="icon">🗂️</span>
        </li>
        <li>
          <span className="icon">❓</span>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
