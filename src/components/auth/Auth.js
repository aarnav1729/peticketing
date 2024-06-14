// src/components/auth/Auth.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../auth.css';

const Auth = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="auth-container">
      <img src={require('../logo.png')} alt="Logo" className="auth-logo" />
      <div className="auth-form">
        <div className="auth-tabs">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => handleTabClick('register')}
          >
            Signup
          </button>
        </div>
        {activeTab === 'login' && <Login onLogin={onLogin} />}
        {activeTab === 'register' && <Register />}
      </div>
    </div>
  );
};

export default Auth;