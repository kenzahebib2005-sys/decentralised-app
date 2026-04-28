import { useState } from "react";
import '../styles/signup.css';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [userType, setUserType] = useState("driver");
  const navigate = useNavigate();

  return (
    <div className="signup-container">

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

      <div className="signup-right">

        <h2>Join us</h2>
        <p className="para">Fill your details to get started</p>

        <div className="signup-buttons">
          <button
            className={userType === "driver" ? "signup-active" : ""}
            onClick={() => setUserType("driver")}
          >
            I am a Driver
          </button>

          <button
            className={userType === "passenger" ? "signup-active" : ""}
            onClick={() => setUserType("passenger")}
          >
            I am a Passenger
          </button>
        </div>

        <div className="signup-info">
          <label>First Name</label>
          <input placeholder="" type="text" />
        </div>
        <div className="signup-info">
          <label>Last Name</label>
          <input placeholder="" type="text" />
        </div>
        <div className="signup-info">
          <label>Email</label>
          <input placeholder="" type="email" />
        </div>
        <div className="signup-info">
          <label>Phone</label>
          <input placeholder="" type="tel" />
        </div>
        <div className="signup-info">
          <label>Password</label>
          <input placeholder="" type="password" />
        </div>
        <div className="signup-info">
          <label>Confirm Password</label>
          <input placeholder="" type="password" />
        </div>

        <button className="signup-signup">Sign Up</button>

        <p>
          Already have an account?
          <Link to="/signin"> Log In </Link>
        </p>

        <p className="signup-or-text">OR SIGN UP WITH</p>

        <div className="signup-social-login">
          <button
            className="signup-social-btn"
            onClick={() => window.location.href = 'https://accounts.google.com'}
          >
            <img src="/google.png" alt="Continue with Google" />
          </button>

          <button
            className="signup-social-btn"
            onClick={() => window.location.href = 'https://appleid.apple.com'}
          >
            <img src="/apple.png" alt="Continue with Apple" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Signup;