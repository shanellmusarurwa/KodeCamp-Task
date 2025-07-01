import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div className="user-dropdown">
          <button className="user-btn">
            <FontAwesomeIcon icon={faUserCircle} />
            <span>{currentUser?.email}</span>
          </button>
          <div className="dropdown-content">
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;