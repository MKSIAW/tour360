
import React from 'react';
import './SignIn.css'; 

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <h2 className="sign-in-heading">Sign In</h2>
      
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <span className="forgot-password">Forgot Password?</span>
      </div>

      <button className="button">Sign In</button>

      <p className="sign-up-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;

