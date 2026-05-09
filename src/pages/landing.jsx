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
 
function IconProfile({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}
 
function IconMessage({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
 
function IconPreferences({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
 
function IconSettings({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
 
function IconVerified({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
 
function IconStar({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
 
function IconSearch({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
 
function IconPublish({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  );
}
 
function IconCalendar({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
 
function menuBtnStyle(color) {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: color,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '0.88rem',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'opacity 0.15s, transform 0.15s',
    width: '100%',
  };
}
 
const dropdownStyle = {
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  transition: 'max-height 0.35s ease, opacity 0.3s ease, transform 0.3s ease',
};
 
function getDropdownOpenStyle(open) {
  return {
    ...dropdownStyle,
    maxHeight: open ? '500px' : '0px',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    position: 'absolute',
    bottom: '70px',
    left: '50%',
    transform: open
      ? 'translateX(-50%) translateY(0)'
      : 'translateX(-50%) translateY(8px)',
    width: '80%',
    zIndex: 10,
    padding: open ? '8px' : '0 8px',
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
 
        {/* Logo — ✅ navigate('/') not '/home' */}
        <div className="nav-logo">
          <img
            src="/sharetrajet-logo-v2.png"
            alt="ShareTrajet logo"
            className="nav-logo-img"
            onClick={() => navigate('/home')}
          />
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
 
            <div style={getDropdownOpenStyle(showOfferMenu)}>
              <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/profile')}>
                <IconProfile color="white" /> My Profile
              </button>
              <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/messages')}>
                <IconMessage color="white" /> Messages
              </button>
              <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/preferences')}>
                <IconPreferences color="white" /> Preferences
              </button>
              <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/settings')}>
                <IconSettings color="white" /> Settings
              </button>
              <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/verified')}>
                <IconVerified color="white" /> Get Verified
              </button>
              <button style={menuBtnStyle('#2563eb')} onClick={() => navigate('/ratings')}>
                <IconStar color="white" /> My Ratings
              </button>
            </div>
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
 
            <div style={getDropdownOpenStyle(showFindMenu)}>
              <button style={menuBtnStyle('#d4521a')} onClick={() => navigate('/tripdetails')}>
                <IconSearch color="white" /> Search a Trip
              </button>
              <button style={menuBtnStyle('#d4521a')} onClick={() => navigate('/publish')}>
                <IconPublish color="white" /> Publish a Trip
              </button>
              <button style={menuBtnStyle('#d4521a')} onClick={() => navigate('/reservation')}>
                <IconCalendar color="white" /> My Reservations
              </button>
            </div>
          </div>
 
        </div>
      </main>
    </div>
  );
}