
import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaWater, FaFortAwesome, FaAirbnb, FaArrowLeft, FaArrowRight, FaHistory, FaTree, FaHiking, FaRainbow, FaSpeakerDeck, FaPlay, FaShoppingBasket, FaCross} from 'react-icons/fa';
import './Dashboard.css'; 
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
     
          <input 
          type="text" 
          placeholder="Anywhere in Ghana"
           className="search-bar" />
        </div>

 {/* Navigation Icons */}
 
 <div className="navigation-icons">
 <FaArrowLeft className="arrow" />
        <div className="icon-label">
          <FaWater className="icon" />
          <span>Beach</span>
        </div>
        <div className="icon-label">
          <FaFortAwesome className="icon" />
          <span>Castles</span>
        </div>
        <div className="icon-label">
          <FaAirbnb className="icon" />
          <span>Bed & Breakfast</span>
        </div>
        <div className="icon-label">
          <FaHistory className="icon" />
          <span>Cuture</span>
        </div>
        <div className="icon-label">
          <FaTree className="icon" />
          <span>Nature</span>
        </div>
        <div className="icon-label">
          <FaHiking className="icon" />
          <span>Adventure</span>
        </div>
        <div className="icon-label">
          <FaRainbow className="icon" />
          <span>Waterfalls</span>
        </div>
        <div className="icon-label">
          <FaPlay className="icon" />
          <span>National Parks</span>
        </div>
        <div className="icon-label">
          <FaSpeakerDeck className="icon" />
          <span>Wildlife</span>
        </div>
        <div className="icon-label">
          <FaShoppingBasket className="icon" />
          <span>Shopping Centers</span>
        </div>
        <div className="icon-label">
          <FaCross className="icon" />
          <span>History</span>
        </div>
        <div className="icon-label">
          <FaHome className="icon" />
          <span>Luxury Hotels</span>
        </div>

        {/* Navigation Arrows */}
       <div className="navigation-arrows">
       
        <FaArrowRight className="arrow" />
      </div>
      </div>
     


      <div className="tourist-site-container">

        {/* Example: Tourist Site Cards */}
        <div className="tourist-site-card">
        <img src="trinity.jpg" alt="Tourist Site 1" />
          <h3>Holy Trinity Cathederal</h3>
          <p>Location: Accra</p>
          <p>Rating: 4.5</p>
        </div>
        

        <div className="tourist-site-card">
        <img src="Bunso.jpg" alt="Tourist Site 1" />
          <h3>Bunso Arboretum</h3>
          <p>Location: Eastern Region</p>
          <p>Rating: 3.8</p>
        </div>

        <div className="tourist-site-card">
        <img src="kakum.jpg" alt="Tourist Site 1" />
          <h3>Kakum National Park</h3>
          <p>Location: Odumase Abrafo</p>
          <p>Rating: 4.5</p>
        </div>

        <div className="tourist-site-card">
        <img src="salaga.jpg" alt="Tourist Site 1" />
          <h3>Salaga Slave Market</h3>
          <p>Location: Salaga</p>
          <p>Rating: 4.2</p>
        </div>

        <div className="tourist-site-card">
        <img src="Elmina.jpg" alt="Tourist Site 1" />
          <h3>Elmina Castle</h3>
          <p>Location: Cape Coast</p>
          <p>Rating: 5.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="slave.jpg" alt="Tourist Site 1" />
          <h3>Gwollu Slave Defense Wall</h3>
          <p>Location: Upper East Region</p>
          <p>Rating: 3.2</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="lake.jpg" alt="Tourist Site 1" />
          <h3>Lake Bosomtwe</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Dashboard;
