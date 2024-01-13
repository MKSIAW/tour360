import React from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TouristSiteDetails.css';

const TouristSiteDetails = () => {
  const { siteId } = useParams();

  
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
      pictures: ['bunso.jpg', 'bunso2.jpeg', 'bunso3.jpeg', 'bunso4.jpeg', 'bunso5.jpeg'],
      history:
        'Bunso Arboretum is a nature reserve located in the Eastern Region of Ghana. It covers an area of approximately 16.5 hectares and is home to a wide variety of plant species. The arboretum provides a peaceful environment for nature lovers and researchers alike. ',
    },
    3: {
      name: 'Kakum National Park',
      location: 'Odumasi Abrefo',
      rating: 4.5,
      pictures: ['kakum.jpg'], // Add more pictures if available
      history:
        'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    4: {
        name: 'Salaga Slave Market',
        location: 'Salaga',
        rating: 4.2,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    5: {
        name: 'Elmina Castle',
        location: 'Ape Coast',
        rating: 5.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    6: {
        name: 'Gwollu Slave Defense Wall',
        location: 'Upper East REgion',
        rating: 3.2,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    7: {
        name: 'Lake Bosomtwe',
        location: 'Ashanti Region',
        rating: 4.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    8: {
        name: 'Kempinski Luxury Hotel',
        location: 'Accra',
        rating: 5.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    9: {
        name: 'Max MArt Shopping Center',
        location: 'Accra',
        rating: 4.8,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    10: {
        name: 'Villagio Apartments',
        location: 'Airport City',
        rating: 4.3,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    11: {
        name: 'Kintampo Falls',
        location: 'Kintampo',
        rating: 3.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    12: {
        name: 'Kwame Nkrumah Mausoleum',
        location: 'Accra',
        rating: 5.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    13: {
        name: 'Posuban shrine',
        location: 'Central Region',
        rating: 4.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    14: {
        name: 'Mankessim Posuban',
        location: 'Ashanti Region',
        rating: 4.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    15: {
        name: '+233 Jazz & Grill',
        location: 'Roman Ridge',
        rating: 4.3,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    16: {
        name: 'Peduase Valley Resort',
        location: 'Aburi',
        rating: 4.0,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    17: {
        name: 'Huhunya Caves',
        location: 'Huhunya',
        rating: 2.4,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    18: {
        name: 'The Royal Senchi Resort',
        location: 'Senchi',
        rating: 4.6,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    19: {
        name: '805 Restaurant',
        location: 'Airport City',
        rating: 4.1,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    20: {
        name: 'Accra Mall',
        location: 'Accra, N1 Road',
        rating: 4.6,
        pictures: ['kakum.jpg'], // Add more pictures if available
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
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
          {site.pictures.map((pictures, index) => (
            <div key={index}>
              <img src={pictures} alt={`Tourist Site ${index + 1}`} />
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
