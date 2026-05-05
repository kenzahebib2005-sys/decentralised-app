import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';
 
function CarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  );
}
 
function SearchIconHome() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}
 
function menuBtnStyle(color) {
  return {
    background: color,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '0.92rem',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'opacity 0.15s',
  };
}
 
export default function Landing() {
  const navigate = useNavigate();
  const [showOfferMenu, setShowOfferMenu] = useState(false);
  const [showFindMenu,  setShowFindMenu]  = useState(false);
 
  return (
    <div className="home-root">
 
      {/* Navbar */}
      <div className="navbar">
 
        {/* Logo */}
        <div className="nav-logo">
          <img src="/sharetrajet-logo-v2.png" alt="ShareTrajet logo" className="nav-logo-img" />
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
 
      <main className="home-main">
        <div className="home-cards">
 
          {/* ── DRIVER CARD ── */}
          <div className="ride-card" style={{ position: 'relative' }}>
            <div className="ride-card__icon ride-card__icon--blue">
              <CarIcon />
            </div>
            <h2 className="ride-card__title">Offer a ride</h2>
            <p className="ride-card__desc">
              Offer a ride, share your journey, and cover your travel costs. Join our community of trusted drivers today.
            </p>
 
            <button
              className="ride-card__btn ride-card__btn--blue"
              onClick={() => setShowOfferMenu(prev => !prev)}
            >
              Offer a Ride
            </button>
 
            {showOfferMenu && (
              <div style={{
                position: 'absolute',
                bottom: '70px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '80%',
                zIndex: 10,
              }}>
                <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/profile')}>
                  👤 My Profile
                </button>
                <button style={menuBtnStyle('#7c3aed')} onClick={() => navigate('/messages')}>
                  💬 Messages
                </button>
                <button style={menuBtnStyle('#0369a1')} onClick={() => navigate('/preferences')}>
                  ⚙️ Preferences
                </button>
                <button style={menuBtnStyle('#374151')} onClick={() => navigate('/settings')}>
                  🔧 Settings
                </button>
                <button style={menuBtnStyle('#0f766e')} onClick={() => navigate('/verified')}>
                  ✅ Get Verified
                </button>
                <button style={menuBtnStyle('#b45309')} onClick={() => navigate('/ratings')}>
                  ⭐ My Ratings
                </button>
              </div>
            )}
          </div>
 
          {/* ── PASSENGER CARD ── */}
          <div className="ride-card" style={{ position: 'relative' }}>
            <div className="ride-card__icon ride-card__icon--orange">
              <SearchIconHome />
            </div>
            <h2 className="ride-card__title">Find a Ride</h2>
            <p className="ride-card__desc">
              Search for your destination and book a comfortable, affordable ride with our verified members.
            </p>
 
            <button
              className="ride-card__btn ride-card__btn--orange"
              onClick={() => setShowFindMenu(prev => !prev)}
            >
              Find a Ride
            </button>
 
            {showFindMenu && (
              <div style={{
                position: 'absolute',
                bottom: '70px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '80%',
                zIndex: 10,
              }}>
                <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/tripdetails')}>
                  🔍 Search a Trip
                </button>
                <button style={menuBtnStyle('#d4521a')} onClick={() => navigate('/publish')}>
                  📋 Publish a Trip
                </button>
                <button style={menuBtnStyle('#0f766e')} onClick={() => navigate('/reservation')}>
                  📅 My Reservations
                </button>
              </div>
            )}
          </div>
 
        </div>
      </main>
    </div>
  );
}