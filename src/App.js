
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ExplorePage from './ExplorePage';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TouristSiteDetails from './TouristSiteDetails';


const App = () => {
  return (
    <Routes>
  <Route path="/" element={<WelcomePage />} />

     
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/tourist-site/:siteId" component={TouristSiteDetails} />
     
       
    </Routes>
  );
};

export default App;
