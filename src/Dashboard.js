
import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <h2>Tour360</h2>
          <FaHome className="icon" />
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>
       
      </div>

      {/* Main Area */}
      <div className="main-area">
      <div>
          {/* Search Bar */}
          <FaSearch className="search-icon" />
          <input 
          type="text" 
          placeholder="Anywhere in Ghana"
           className="search-bar" />
        </div>

        {/* Example: Tourist Site Cards */}
        <div className="tourist-site-card">
          <h3>Tourist Site 1</h3>
          <p>Location: Accra</p>
          <p>Rating: 4.5</p>
        </div>

        <div className="tourist-site-card">
          <h3>Tourist Site 2</h3>
          <p>Location: Kumasi</p>
          <p>Rating: 4.0</p>
        </div>

        {/* Add more tourist site cards as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
