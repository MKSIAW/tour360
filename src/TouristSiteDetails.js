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
      pictures: ['/images/trinity1.jpg', '/images/trinity2.jpg', '/images/trinity3.jpg', '/images/trinity4.jpg', '/images/trinity5.jpg'],
      history:
        'Holy Trinity Cathedral is an Anglican church built in 1894, the period of British colonization. In 1949, the church obtained the status of Cathedral. The Cathedral is located on 28th February Road in a busy area with a lot of shops, banks, and offices. It is famous because The Prince of Wales, Queen Elizabeth II, and Prince Philip worshipped here.',
    },
    2: {
      name: 'Bunso Arboretum',
      location: 'Nsutem Road',
      rating: 3.8,
      pictures: ['/images/bunso.jpg', '/images/bunso2.jpeg', '/images/bunso3.jpeg', '/images/bunso4.jpeg', '/images/bunso5.jpeg'],
      history:
        'Bunso Arboretum is a nature reserve located in the Eastern Region of Ghana. It covers an area of approximately 16.5 hectares and is home to a wide variety of plant species. The arboretum provides a peaceful environment for nature lovers and researchers alike. ',
    },
    3: {
      name: 'Kakum National Park',
      location: 'Odumasi Abrefo',
      rating: 4.5,
      pictures: ['/images/kakum.jpg'], 
      history:
        'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    4: {
        name: 'Salaga Slave Market',
        location: 'Salaga',
        rating: 4.2,
        pictures: ['kakum.jpg'], 
        history:
          'From the 16th century, Salaga was one of leading market centers in West Africa.[5] Kola, beads, ostrich feathers, animal hides, textiles and gold were among the goods traded in the market.[1] However, in the 18th century, the market became a key center in the trading of humans. People from the Upper west, Upper East and Northern Regions served as sources for slaves. Slaves from the market were mostly exchanged for Kola nuts, cowries and gold.',
    },
    5: {
        name: 'Elmina Castle',
        location: 'Cape Coast',
        rating: 5.0,
        pictures: ['/images/elmina.jpg', '/images/elmina.jpeg','/images/elmina2.jpeg', '/images/elmina3.jpeg', '/images/elmina4.jpeg', '/images/elmina5.jpeg'], 
        history:
          'Renowned as the first major European construction in tropical Africa, St. Georges Castle, in the town of Elmina in the Central Region of Ghana, was founded by the Portuguese in 1482. The site of the Castle was selected by Portuguese navigators, as it was advantageously located at the end of a narrow promontory, a stones throw away from both the Atlantic Ocean and the Benya River. The lee of the low headland provided an excellent natural harbour. St Georges Castle or Sao Jorge da Mina, after the patron-saint of Portugal, as the castle was known to the Portuguese, afforded the Portuguese a trade monopoly in the area, with unrivalled access to the regions gold. The sheer magnitude of trade volumes resulted in labour challenges, as navies were unable to convey the large quantities of European goods to all markets. The importation of slaves from Benin in exchange for gold and ivory in the early 16th century was the identified solution. However, not long after, the influx of superior gold from Mexico into Europe caused gold prices to plummet rapidly. The economically distraught Portuguese were easily ousted from Elmina in 1637 by the Dutch. The main Dutch trades were gold and slaves; they reconstructed the castle between 1770 and 1775. Until 1872, the castle served as the focal coordinating point for Dutch Gold Coast activities. In 1682, the author Jean Barbot described St. Georges Castle as having no equal on all the coast of Guinea, with respect to beauty and strength. On 6th April, 1872, the castle was ceded to the British. In recent years, it has served as Police Recruit Training Centre, a secondary school, and it is presently a historical museum.  St. George’s Castle is featured on the UNESCO World Heritage List.'

    },
    6: {
        name: 'Gwollu Slave Defense Wall',
        location: 'Upper East REgion',
        rating: 3.2,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    7: {
        name: 'Lake Bosomtwe',
        location: 'Ashanti Region',
        rating: 4.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    8: {
        name: 'Kempinski Luxury Hotel',
        location: 'Accra',
        rating: 5.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    9: {
        name: 'Max MArt Shopping Center',
        location: 'Accra',
        rating: 4.8,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    10: {
        name: 'Villagio Apartments',
        location: 'Airport City',
        rating: 4.3,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    11: {
        name: 'Kintampo Falls',
        location: 'Kintampo',
        rating: 3.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    12: {
        name: 'Kwame Nkrumah Mausoleum',
        location: 'Accra',
        rating: 5.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    13: {
        name: 'Posuban shrine',
        location: 'Central Region',
        rating: 4.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    14: {
        name: 'Mankessim Posuban',
        location: 'Ashanti Region',
        rating: 4.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    15: {
        name: '+233 Jazz & Grill',
        location: 'Roman Ridge',
        rating: 4.3,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    16: {
        name: 'Peduase Valley Resort',
        location: 'Aburi',
        rating: 4.0,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    17: {
        name: 'Huhunya Caves',
        location: 'Huhunya',
        rating: 2.4,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    18: {
        name: 'The Royal Senchi Resort',
        location: 'Senchi',
        rating: 4.6,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    19: {
        name: '805 Restaurant',
        location: 'Airport City',
        rating: 4.1,
        pictures: ['kakum.jpg'], 
        history:
          'Kakum National Park is a nature reserve located in the Central Region of Ghana. It is famous for its canopy walkway, which is suspended 30 meters above the ground and offers stunning views of the rainforest.',
    },
    20: {
        name: 'Accra Mall',
        location: 'Accra, N1 Road',
        rating: 4.6,
        pictures: ['kakum.jpg'], 
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
