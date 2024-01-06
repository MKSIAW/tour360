
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigate to another page (for simplicity, let's call it Dashboard)
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Explore Page</h1>
      {/* Add content for the explore page */}
      <button onClick={handleExploreClick}>Go to Dashboard</button>
    </div>
  );
};

export default ExplorePage;

