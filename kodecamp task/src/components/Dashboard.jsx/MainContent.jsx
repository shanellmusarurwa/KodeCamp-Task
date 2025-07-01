import React from 'react';

const MainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-content">
        <h2>Welcome to your Dashboard</h2>
        <p>Here you can manage all your activities and view important metrics.</p>
        
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,234</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$12,345</p>
          </div>
          <div className="card">
            <h3>Tasks</h3>
            <p>24</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;