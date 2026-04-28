import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/publish.css";

function Publish() {
  const [seats, setSeats] = useState(3);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();

  const cities = {
    alger: { lat: 36.75, lon: 3.06 },
    constantine: { lat: 36.36, lon: 6.61 },
    oran: { lat: 35.69, lon: -0.63 },
    setif: { lat: 36.19, lon: 5.41 },
    annaba: { lat: 36.9, lon: 7.76 }
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const calculateTrip = (dep, arr) => {
    const d = cities[dep];
    const a = cities[arr];

    if (!d || !a) {
      setDistance("---- km");
      setDuration("--:--");
      return;
    }

    const dist = Math.floor(getDistance(d.lat, d.lon, a.lat, a.lon));
    const time = (dist / 80).toFixed(1);

    setDistance(dist + " km");
    setDuration(time + " h");
  };

  useEffect(() => {
    calculateTrip(departure, arrival);
  }, [departure, arrival]);

  return (
    <div className="publish-page">
      {showPopup && (
        <div className="publish-popup">
          <div className="publish-popup-content">
            <h1>Thank You!</h1>
            <p>Publishing your ride has been accepted </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="navbar">

        <div className="symbol-S-t">
          <img src="/symbol.png" alt="road"/>
        </div>

        <div className="nav-links">
          <div className="btn-active"> publish</div>
          <div onClick={() => navigate("/tripdetails")}> trips details</div>
          <div onClick={() => navigate("/resarvation")}> resarvation</div>
        </div>

        <div className="nav-buttons">
          <button className="btn-signup" onClick={() => navigate("/signup")}>Sign up</button>
          <button className="btn-login" onClick={() => navigate("/signin")}>Log in</button>

          <span className="icon" onClick={() => navigate("/messages")}>
            <img src="/email.png"  />
          </span>

          <span className="icon" onClick={() => navigate("/notifications")}>
            <img src="/bell.png"  />
          </span>

          <span className="icon" onClick={() => navigate("/profile")}>
            <img src="/user.png"  />
          </span>
        </div>
      </div>
 
      <div className="publish-container">

        <div className="publish-left">
          <h1>Publish a Ride</h1>
          <p>Share your journey, save money and meet new people.</p>

          <div className="publish-route">
            <img src="/map.png" alt="map" />
            <span>ROUTE</span>
          </div>

          <h6>DEPARTURE</h6>
          <input
            className="publish-input-icon"
            value={departure}
            onChange={(e) => setDeparture(e.target.value.toLowerCase())}
          />

          <h6>ARRIVAL</h6>
          <input
            className="publish-input-icon"
            value={arrival}
            onChange={(e) => setArrival(e.target.value.toLowerCase())}
          />

          <div className="publish-info-box">
            <p>{distance || "---- km"}</p>
            <p>Driving time: {duration || "--:--"}</p>
          </div>

          <div className="publish-warning">
            1 stop included <br />
            Total duration: {duration || "--:--"}
          </div>

          <div className="publish-calan">
            <img src="calendar.png" alt="calendar" />
            <span> Date and Seat </span>
          </div>

          <h5>DEPARTURE DATE</h5>
          <input type="datetime-local" />

          <h5>AVAILABLE SEATS</h5>
          <div className="publish-seats">
            <button onClick={() => seats > 1 && setSeats(seats - 1)}>-</button>
            <span>{seats}</span>
            <button onClick={() => setSeats(seats + 1)}>+</button>
          </div>
        </div>

        <div className="publish-right">

          <div className="publish-trip-info">
            <h2>{distance || "---- km"} | {duration || "--:--"}</h2>
          </div>

          <div className="publish-map">
            <img src="/algeria.png" alt="Map of Algeria"/>
          </div>

          <h3>Ride Summary</h3>

          <p>🟢 {departure || "Departure"}</p>
          <p>🔴 {arrival || "Arrival"}</p>

          <div 
            className="publish-alert-toggle"
            onClick={() => setShowAlert(!showAlert)}
          >
            {showAlert ? "▼ Hide warning" : "▶ Show warning"}       
          </div>

          {showAlert && (
            <div className="publish-alert">
              Please check your car's fluids before long trips.
              <img src="/warning.png" alt="alert"></img>
            </div>
          )}
          
           <button 
            className="publish-publish-btn"
            onClick={() => setShowPopup(true)}
          >
            Publish Ride →
          </button>

        </div>
      </div>
      <footer className="trip-footer">
        <button className="back-link-btn" onClick={() => navigate(-1)}>
          <span className="back-arrow">‹</span> Going back to offer a ride
        </button>
      </footer>
    </div>
  );
}

export default Publish;