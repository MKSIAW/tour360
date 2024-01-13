
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TouristSiteDetails = () => {
  const navigate = useNavigate();

  const handle360Click = () => {
    // Implement the logic to handle the 360 view
    // You can open a new page or a modal for the 360 view
    console.log('Handle 360 Click');
  };

  return (
    <div className="tourist-site-details">
      <h2>Site Name</h2>
      <p>Location: Site Location</p>
      <p>Rating: Site Rating</p>

      {/* Add pictures and history about the place here */}
      <div>
        {/* Example: Display pictures */}
        <img src="site-image.jpg" alt="Tourist Site" />
      </div>

      <div>
        {/* Example: Display history */}
        <p>Site history goes here...</p>
      </div>

      {/* 360 View Icon */}
      <div>
        <button onClick={handle360Click}>360 View</button>
      </div>
    </div>
  );
};

export default TouristSiteDetails;
