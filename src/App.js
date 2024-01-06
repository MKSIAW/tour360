
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ExplorePage from './ExplorePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
