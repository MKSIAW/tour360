
import React from 'react';
import {  Route, Link, Routes } from 'react-router-dom';
import SignIn from './SignIn'; 
import { FaHome, FaUser, FaShoppingCart, FaWater, FaFortAwesome, FaAirbnb, FaArrowLeft, FaArrowRight, FaHistory, FaTree, FaHiking, FaRainbow, FaSpeakerDeck, FaPlay, FaShoppingBasket, FaCross} from 'react-icons/fa';
import './Dashboard.css'; 



const Dashboard = () => {
  
  
  return (
  
    <div className="dashboard-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <h2>Tour360</h2>
          <Link to="/" className="icon"><FaHome />
            </Link>
            <Link to="/signin" className="icon"> <FaUser />
            </Link>
            <Link to="/cart" className="icon"> <FaShoppingCart />
            </Link>
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
        <img src="kempinski.jpg" alt="Tourist Site 1" />
          <h3>Kempinski Luxury Hotel</h3>
          <p>Location: Accra</p>
          <p>Rating: 5.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="maxmart.jpg" alt="Tourist Site 1" />
          <h3>MaxMart Shopping Center</h3>
          <p>Location: Accra</p>
          <p>Rating: 4.8</p>
        </div>

        <div className="tourist-site-card">
        <img src="villagio.jpg" alt="Tourist Site 1" />
          <h3>Villagio Apartments</h3>
          <p>Location: Airport City</p>
          <p>Rating: 4.3</p>
        </div>

        <div className="tourist-site-card">
        <img src="kintampo.jpg" alt="Tourist Site 1" />
          <h3>Kintampo Falls</h3>
          <p>Location: KIntampo</p>
          <p>Rating: 3.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="kwame.jpg" alt="Tourist Site 1" />
          <h3>Kwame Nkrumah Mausoleum</h3>
          <p>Location: Accra</p>
          <p>Rating: 5.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="statue.jpg" alt="Tourist Site 1" />
          <h3>Posuban Shrine</h3>
          <p>Location: Central Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="mankessim.jpg" alt="Tourist Site 1" />
          <h3>Mankessim Posuban</h3>
          <p>Location: Ashanti Region</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="jazz.jpg" alt="Tourist Site 1" />
          <h3>+233 Jazz Bar & Grill</h3>
          <p>Location: Roman Ridge</p>
          <p>Rating: 4.3</p>
        </div>

        <div className="tourist-site-card">
        <img src="peduase.jpg" alt="Tourist Site 1" />
          <h3>Peduase Valley Resort</h3>
          <p>Location: Aburi</p>
          <p>Rating: 4.0</p>
        </div>

        <div className="tourist-site-card">
        <img src="HUHUNYA.webp" alt="Tourist Site 1" />
          <h3>Huhunya Caves</h3>
          <p>Location: Huhunya</p>
          <p>Rating: 2.4</p>
        </div>

        <div className="tourist-site-card">
        <img src="royal.jpg" alt="Tourist Site 1" />
          <h3>The Royal Senchi Resort</h3>
          <p>Location: Senchi</p>
          <p>Rating: 4.6</p>
        </div>

        <div className="tourist-site-card">
        <img src="805.png" alt="Tourist Site 1" />
          <h3>805 Restaurant</h3>
          <p>Location: Airport City</p>
          <p>Rating: 4.1</p>
        </div>

        <div className="tourist-site-card">
        <img src="mall.jpg" alt="Tourist Site 1" />
          <h3>Accra Mall</h3>
          <p>Location: Accra</p>
          <p>Rating: 4.6</p>
        </div>

      </div>
    </div>
        <Routes>
          <Route path="/signin" component={SignIn} />
         
        </Routes>

   
    </div>
   
  );
};

export default Dashboard;
