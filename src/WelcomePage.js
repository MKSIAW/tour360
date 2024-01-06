
import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ history }) => {
  const handleExploreClick = () => {
    // Navigate to another page (for simplicity, let's call it ExplorePage)
    history.push('/explore');
  };

  return (
    <div className="welcome-container">
      <img className="background-image" src="/background.jpg" alt="Background" />
      <div className="content">
        <h1>Welcome to Tour360</h1>
        <button onClick={handleExploreClick}>Let's Explore!</button>
      </div>
    </div>
  );
};

export default WelcomePage;
