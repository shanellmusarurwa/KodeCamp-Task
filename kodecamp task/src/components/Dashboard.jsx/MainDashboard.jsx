import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main-container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default MainDashboard;