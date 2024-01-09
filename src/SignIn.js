// SignIn.js
import React from 'react';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <div className="additional-options">
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <p>
            <a href="/forgot-password">Forgot password?</a>
          </p>
        </div>

        <button type="submit">Sign In</button>
      </form>

      <p>
        Don't have an account? <a href="/sign-up">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
