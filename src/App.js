// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ExplorePage from './ExplorePage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Routes>
  <Route path="/" element={<WelcomePage />} />

     
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
    </Routes>
  );
};

export default App;
