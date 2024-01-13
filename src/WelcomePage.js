
import React from 'react';
import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
      // Navigate to another page (for simplicity, let's call it ExplorePage)
      navigate('/dashboard');
    };

  return (
    <div className="welcome-container">
      <img className="background-image" src="/background1.jpg" alt="Background" />
      <div className="content">
        <h1>Tour360</h1>
        <button onClick={handleExploreClick}>Let's Explore!</button>
      </div>
    </div>
  );
};

export default WelcomePage;