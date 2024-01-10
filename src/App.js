
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ExplorePage from './ExplorePage';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';


const App = () => {
  return (
    <Routes>
  <Route path="/" element={<WelcomePage />} />

     
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
     
       
    </Routes>
  );
};

export default App;
