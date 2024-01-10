

import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; 

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Telephone Number:
          <input type="tel" />
        </label>
        <br />
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
      <p>Already a member? <Link to="/signin">Sign In</Link></p>
      <div className="social-buttons">
        <p>OR Sign Up with:</p>
        {/* Add your social media icons or buttons here */}
        {/* For simplicity, I'm using text placeholders */}
        <span>Google</span>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>
    </div>
  );
};

export default SignUp;
