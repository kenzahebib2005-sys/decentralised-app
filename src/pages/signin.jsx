import { useState } from "react";
import '../styles/signin.css';
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="signin-container">

      <div className="left">
        <div className="symbol">
          <img src="/sharetrajet-logo.png" alt="ShareTrajet" />
        </div>

        <button className="badge">
          FOR ALGERIA, by Algerians
        </button>

        <h1 className="title">Your trusted carpooling community.</h1>

        <p className="para">
          Connect with drivers and passengers for inter-wilaya trips,
          share the ride and travel safely across Algeria.
        </p>

        <img src="/road (1).jpg" alt="road" />
      </div>

      <div className="signin-right">
        <Link to="../signup">⬅ signup</Link>
        <h2>Get Started</h2>
        <p className="para">Sign in to your account to continue</p>

        <div className="signin-info">
          <label>Email</label>
          <input placeholder="" type="email" />
        </div>
        <div className="signin-info">
          <label>Password</label>
          <input placeholder="" type="password" />
        </div>

        <button className="signin-signin">Sign In</button>

        <p className="signin-or-text">OR SIGN IN WITH</p>

        <div className="signin-social-login">
          <button
            className="signin-social-btn"
            onClick={() => window.location.href = 'https://accounts.google.com'}
          >
            <img src="/google.png" alt="Continue with Google" />
          </button>

          <button
            className="signin-social-btn"
            onClick={() => window.location.href = 'https://appleid.apple.com'}
          >
            <img src="/apple.png" alt="Continue with Apple" />
          </button>
        </div>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

    </div>
  );
}

export default Signin;