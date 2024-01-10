

import React from 'react';
import { Link } from 'react-router-dom';
import {  FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import './SignUp.css'; 

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form>
        <label>
           
          Email:
          <input type="email" placeholder='Enter your email'/>
        </label>
        <br />
        <label>
          
          Password:
          <input type="password" placeholder='Enter your password' />
        </label>
        <br />
        <label>
         
          Confirm Password:
          <input type="password" placeholder='Confirm your password' />
        </label>
        <br />
        <label>
          
          Telephone Number:
          <input type="tel" placeholder='Enter your telephone number'/>
        </label>
        <br />
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
      <p>Already a member? <Link to="/signin">Sign In</Link></p>
      <div className="social-buttons">
        <p>OR Sign Up with:</p>
        <FaFacebook className='social-icon' />
        <FaTwitter className='social-icon' />
        <FaGoogle className='social-icon' />



     </div>
    </div>
  );
};

export default SignUp;
