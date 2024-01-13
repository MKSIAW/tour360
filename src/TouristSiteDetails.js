import React from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TouristSiteDetails.css';

const TouristSiteDetails = () => {
  const { siteId } = useParams();

  // Dummy data for pictures and history (replace this with your data fetching logic)
  const siteData = {
    1: {
      name: 'The Holy Trinity Cathedral',
      location: 'Accra',
      rating: 4.5,
      pictures: ['trinity1.jpg', 'trinity2.jpg', 'trinity3.jpg', 'trinity4.jpg', 'trinity5.jpg'],
      history:
        'Holy Trinity Cathedral is an Anglican church built in 1894, the period of British colonization. In 1949, the church obtained the status of Cathedral. The Cathedral is located on 28th February Road in a busy area with a lot of shops, banks, and offices. It is famous because The Prince of Wales, Queen Elizabeth II, and Prince Philip worshipped here.',
    },
    2: {
      name: 'Bunso Arboretum',
      location: 'Nsutem Road',
      rating: 3.8,
      pictures: ['bunso.jpg', 'bunso2.jpg', 'bunso3.jpg', 'bunso4.jpg', 'bunso5.jpg'],
      history:
        'Bunso Arboretum is a nature reserve located in the Eastern Region of Ghana. It covers an area of approximately 16.5 hectares and is home to a wide variety of plant species. The arboretum provides a peaceful environment for nature lovers and researchers alike. ',
    },
   
  };

  const site = siteData[siteId];

  if (!site) {
    // Handle the case when the siteId is not found (redirect, show an error, etc.)
    return <div>Site not found</div>;
  }

  const handle360Click = () => {
    // Implement the logic to handle the 360 view
    // You can open a new page or a modal for the 360 view
    console.log('Handle 360 Click');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="tourist-site-details">
      <h2>{site.name}</h2>
      <p>{site.location}</p>
      <p>{site.rating} rating stars</p>

      {/* Image Carousel */}
      <div className="image-carousel">
        <Slider {...settings}>
          {site.pictures.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt={`Tourist Site ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Section for History */}
      <div className="history-section">
        <h3>History</h3>
        <p>{site.history}</p>
      </div>

      {/* 360 View Icon */}
      <div className="360-view-section">
        <button onClick={handle360Click}>360 View</button>
      </div>
    </div>
  );
};

export default TouristSiteDetails;
