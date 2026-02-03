import React from 'react';

function Dashboard({ user, onLogout }) {
  const memberSince = user?.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : 'Recently';

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">MA</div>
          <h2>MERN Auth</h2>
        </div>
        <button onClick={onLogout} className="btn-logout">
          Sign Out
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h1>Welcome, {user?.name || 'User'}! 🎉</h1>
          <p>You're successfully logged into your account</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <h3>Your Name</h3>
            <p>{user?.name || 'Not Available'}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✉️</div>
            <h3>Email Address</h3>
            <p style={{ fontSize: '18px' }}>{user?.email || 'Not Available'}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <h3>Member Since</h3>
            <p style={{ fontSize: '20px' }}>{memberSince}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <h3>Account Status</h3>
            <p>Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
