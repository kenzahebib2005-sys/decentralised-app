import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/reservation.css";

export default function ReservationPage() {
  const navigate = useNavigate();

  return (
    <div className="page-root">
      <div className="navbar">
 
        {/* Logo */}
          <div className="nav-logo">
          <img
            src="/sharetrajet-logo-v2.png"
            alt="ShareTrajet logo"
            className="nav-logo-img"
            onClick={() => navigate('/')}
          />
        </div>
 
        {/* Center links */}
        <div className="nav-links">
          <div onClick={() => navigate('/publish')}>publish</div>
          <div onClick={() => navigate('/trip-details')}>trip details</div>
          <div className="btn-active">reservation</div>
          
        </div>
 
        {/* Right actions */}
        <div className="nav-buttons">
          <button className="btn-signup" onClick={() => navigate('/signup')}>Sign up</button>
          <button className="btn-login"  onClick={() => navigate('/signin')}>Sign in</button>
 
          {/* Notification bell */}
          <span className="icon" onClick={() => navigate('/notifications')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
 
          {/* Messages */}
          <span className="icon" onClick={() => navigate('/messages')}>
            <svg fill="#3a86ff" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 14h3.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-13C2.673 2 2 2.673 2 3.5V18l5.333-4H13zm-9-.1.154-.016L4 14v-.1z"/>
              <path d="M20.5 8H20V14.001c0 1.1-.893 1.993-1.99 1.999H8v.5c0 .827.673 1.5 1.5 1.5h7.167L22 22V9.5c0-.827-.673-1.5-1.5-1.5z"/>
            </svg>
          </span>
 
          {/* Profile */}
          <span className="icon" onClick={() => navigate('/profile')}>
            <svg fill="#3a86ff" width="20" height="20" viewBox="0 0 30.586 30.586" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-546.269 -195.397)">
                <path d="M572.138,221.245a15.738,15.738,0 0,0-21.065-.253l-1.322-1.5a17.738,17.738,0 0,1 23.741.28Z"/>
                <path d="M561.464,204.152a4.96,4.96,0 1,1-4.96,4.96,4.966,4.966,0 0,1 4.96-4.96m0-2a6.96,6.96,0 1,0 6.96,6.96,6.96,6.96,0 0,0-6.96-6.96Z"/>
                <path d="M561.562,197.4a13.293,13.293,0 1,1-13.293,13.293A13.308,13.308,0 0,1 561.562,197.4m0-2a15.293,15.293,0 1,0 15.293,15.293A15.293,15.293,0 0,0 561.562,195.4Z"/>
              </g>
            </svg>
          </span>
        </div>
      </div>
 

      <main className="main-bg">
        <div className="card">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#0e14c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"/>
          </svg>
          <h2 className="card-title">No Reservation</h2>
          <p className="card-desc">You have to carry out a reservation and find your trajet.</p>
          <button className="btn-find" onClick={() => navigate('/publish')}>Find a trajet</button>
        </div>
        <footer className="trip-footer">
        <button className="back-link-btn" onClick={() => navigate('/')}>
          <span className="back-arrow">‹</span> Retour à l'accueil
        </button>
      </footer>
      </main>

    
     
    </div>
  );
}