import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/home.css'
 
const LOGO_SRC = '/logo.png'
 
 
function IconBigSave() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7 9h2M15 15h2M15 9h2M7 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
 
function IconLeaf() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2a7 7 0 0 1-9 8.8Z" />
      <path d="M11 20c0-3 .5-6 2-9" />
    </svg>
  )
}
 
function IconVerified() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"
      />
      <path d="M9.5 12.5 11 14l3.5-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
 
function IconChat() {
  return (
    <svg
      viewBox="0 0 24 24" width="24" height="24"
      fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
 
function IconUserPlus() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
      />
      <path d="M19 8v6M22 11h-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}
 
function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20 16.65 16.65" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}
 
function IconSeat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8Z"
        stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"
      />
      <path d="M7 12V9a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}
 
function IconCar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 17h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.68-.948l-1.75-.58a2 2 0 0 1-1.37-1.37l-.58-1.75A1 1 0 0 0 17.72 8H6.28a1 1 0 0 0-.95.684l-.58 1.75a2 2 0 0 1-1.37 1.37l-1.75.58A1 1 0 0 0 2 12.72V16a1 1 0 0 0 1 1h2M7 17h10M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
 
function IconGlobe() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        stroke="currentColor" strokeWidth="1.6"
      />
      <path d="M2 12h20M12 2c3 4 3 16 0 20M12 2c-3 4-3 16 0 20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
 
function IconShare() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
 
 
function SearchBar() {
  return (
    <form className="searchWrap" onSubmit={(e) => e.preventDefault()}>
      <div className="searchGrid">
 
        {/* Departure */}
        <label className="field">
          <span className="fieldIcon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 20.5a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <input
            className="fieldInput"
            name="departure"
            placeholder="Departure (ex: Algiers)"
            aria-label="Departure"
          />
        </label>
 
        {/* Arrival */}
        <label className="field">
          <span className="fieldIcon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            className="fieldInput"
            name="arrival"
            placeholder="Arrival (ex: Oran)"
            aria-label="Arrival"
          />
        </label>
 
        {/* Date */}
        <label className="field">
          <span className="fieldIcon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <input className="fieldInput fieldInput--muted" name="date" placeholder="Date" aria-label="Date" />
        </label>
 
        {/* Passengers */}
        <label className="field">
          <span className="fieldIcon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              />
            </svg>
          </span>
          <input
            className="fieldInput fieldInput--num"
            name="passengers"
            type="number"
            min={1}
            max={8}
            defaultValue={1}
            aria-label="Passengers"
          />
        </label>
 
        {/* Search button */}
        <button className="searchBtn" type="submit">
          <span className="searchIcon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
              <path d="M20 20 16.65 16.65" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </span>
          Search
        </button>
 
      </div>
    </form>
  )
}
 
 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate() // ✅ added
 
  return (
    <header className="navWrap">
      <div className="container navInner">
 
        {/* Brand / Logo */}
        <Link
          to="/"
          className="brand"
          aria-label="ShareTrajet home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brandGraphic">
            <img
              className="brandLogoImg"
              src={LOGO_SRC}
              alt=""
              width={100}
              height={100}
              decoding="async"
            />
          </span>
        </Link>
 
        {/* Navigation links */}
      <nav
  className={`navLinks ${menuOpen ? 'navLinks--open' : ''}`}
  aria-label="Primary"
>
  <a href="#publish" onClick={() => setMenuOpen(false)}>publish</a>
  <a href="#trips" onClick={() => setMenuOpen(false)}>trips</a>
  <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
  <a href="#advantages" onClick={() => setMenuOpen(false)}>advantages</a>
</nav>
 
        {/* Right actions: Sign up / Sign in / Burger */}
        <div className="navRight">
          <button className="signupBtn" type="button" onClick={() => navigate('/signup')}>Sign up</button>
          <button className="signinBtn" type="button" onClick={() => navigate('/signin')}>Sign in</button>
          <button
            type="button"
            className={`navBurger ${menuOpen ? 'navBurger--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
 
      </div>
    </header>
  )
}
 
 
function Hero() {
  return (
    <section className="hero">
      <div className="heroBg" aria-hidden="true" />
      <div className="heroOverlay" aria-hidden="true" />
 
      <div className="container heroInner">
        <div className="heroTop">
 
          {/* Trust pill */}
          <div className="trustPill">
            <span className="trustAvatars" aria-hidden="true">
              <span className="trustA trustA--1" />
              <span className="trustA trustA--2" />
              <span className="trustA trustA--3" />
            </span>
            <span className="trustK">10k+</span>
            <span className="trustText">Trusted by over 10,000 active travelers</span>
          </div>
 
          {/* Headline */}
          <h1 className="heroTitle">
            <span className="heroLine1">Travel smart across</span>
            <span className="heroAccent">Algeria</span>
          </h1>
 
        </div>
 
        {/* Search bar */}
        <div className="heroSearch">
          <SearchBar />
        </div>
 
        {/* Tagline */}
        <p className="heroTagline">
          Share your costs and make unforgettable encounters on SHARETRAJET. The #1 carpooling solution in Algeria.
        </p>
      </div>
    </section>
  )
}
 
 
const FEATURES = [
  {
    title: 'Big save',
    desc: 'splits fuel and toll costs among passengers',
    Icon: IconBigSave,
  },
  {
    title: 'Eco-friendly',
    desc: 'reduce your carbon footprint by sharing rides.',
    Icon: IconLeaf,
  },
  {
    title: 'Verified Profiles',
    desc: 'every user is verified to ensure a trusted and safe environment',
    Icon: IconVerified,
  },
  {
    title: 'Easy Chat',
    desc: 'chat directly with drivers or passengers before departure.',
    Icon: IconChat,
  },
]
 
function Features() {
  return (
    <section className="section features" id="advantages">
      <div className="container">
 
        <div className="featuresHead">
          <h2 className="featuresTitle">Why choose SHARETRAJET?</h2>
          <p className="featuresSub">
            Your safety and comfort are our top priorities. Here is how we ensure a reliable and secure
            experience for every member of the SHARETRAJET community.
          </p>
        </div>
 
        <div className="featureGrid">
          {FEATURES.map(({ title, desc, Icon }) => (
            <article className="featureCard" key={title}>
              <div className="featureIcon" aria-hidden="true">
                <Icon />
              </div>
              <h3 className="featureTitle">{title}</h3>
              <p className="featureDesc">{desc}</p>
            </article>
          ))}
        </div>
 
      </div>
    </section>
  )
}
 
 
const HOW_STEPS = [
  {
    n: '01',
    title: 'Create Account',
    desc: 'Quick and easy sign-up process. Verify your identity to join our trusted community of travelers.',
    Icon: IconUserPlus,
  },
  {
    n: '02',
    title: 'Find a Ride',
    desc: 'Search for rides by destination, date, and time. Filter by preference and find the perfect match.',
    Icon: IconSearch,
  },
  {
    n: '03',
    title: 'Book Your Seat',
    desc: 'Secure your spot instantly. We handle the payments safely so you can focus on the trip ahead.',
    Icon: IconSeat,
  },
  {
    n: '04',
    title: 'Travel Together',
    desc: 'Meet your driver, share the cost, and enjoy the journey. Reduce your footprint one mile at a time.',
    Icon: IconCar,
  },
]
 
function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container howContainer">
 
        <div className="howHead">
          <h2 className="sectionTitle howHeading">How It Works</h2>
          <p className="howSub">
            Your journey starts here. Follow these four simple steps to get on the road and start saving.
          </p>
        </div>
 
        <div className="howRow">
          {HOW_STEPS.map((s) => {
            const StepIcon = s.Icon
            return (
              <div className="howItem" key={s.n}>
                <div className="howIcon" aria-hidden="true">
                  <StepIcon />
                </div>
                <div className="howTitleRow">
                  <span className="howNum">{s.n}</span>
                  <span className="howTitleText">{s.title}</span>
                </div>
                <p className="howDesc">{s.desc}</p>
              </div>
            )
          })}
        </div>
 
      </div>
    </section>
  )
}
 
 
const DESTINATION_CARDS = [
  {
    name: 'Alger',
    tag: 'Capital City',
    img: 'https://al24news.dz/wp-content/uploads/2022/07/dl.beatsnoop.com-9UXY7uar4o-1024x683.jpg',
  },
  {
    name: 'Oran',
    tag: 'The Radiant',
    img: 'https://content.r9cdn.net/rimg/dimg/92/01/0c6091fc-city-20461-167be288f16.jpg',
  },
  {
    name: 'Constantine',
    tag: 'Bridges City',
    img: 'https://www.rivagesdumonde.fr/media/contentmanager/content/repeater_block_media_layout/images/550x400_Passerelle-Slimane-Melah_Algerie-Constantine_Novice_Art-AdobeStock_587184099-1.jpg',
  },
  {
    name: 'Béchar',
    tag: 'Desert Gate',
    img: 'https://www.marocvoyages.com/wp-content/uploads/2016/03/Ville-Tinghir-Maroc-820x456.jpg',
  },
  {
    name: 'tizi-ouzou',
    tag: 'The City of olive trees',
    img: 'https://1.bp.blogspot.com/-HPaMR3xXo5Y/WWQ42UEq57I/AAAAAAAABXU/yuqhLNN4vSslsKo3EOeohKbuGJSkOwtDwCLcBGAs/s1600/tizi-ouzou-ville-algerie.jpg',
  },
  {
    name: 'bejaia',
    tag: 'The City of Smiles',
    img: 'https://cdn.pixabay.com/photo/2017/06/01/13/39/bejaia-2363555_1280.jpg',
  },
  {
    name: 'bouira',
    tag: 'The City of Mountains',
    img: 'https://www.photo-algerie.xyz/wp-content/uploads/2018/01/Bouira-5.jpg',
  },
  {
    name: 'blida',
    tag: 'The City of Roses',
    img: 'https://i.pinimg.com/originals/68/99/20/689920a08e7b05f0cd7276cbe7bb0dc1.jpg',
  },
  {
    name: 'sahara desert',
    tag: 'The Endless Sands',
    img: 'https://4kwallpapers.com/images/wallpapers/sahara-desert-merzouga-morocco-sand-dune-blue-sky-sunny-day-3840x2160-2122.jpg',
  },
  {
    name: 'batna',
    tag: 'The City of the Throne',
    img: 'https://lp-cms-production.imgix.net/2023-08/shutterstockRF1076128169.jpg?fit=crop&w=828&auto=format&q=75',
  },
  {
    name: 'setif',
    tag: 'The City of the Spring',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/76/f1/4c/setif.jpg?w=1000&h=-1&s=1',
  },
  {
    name: 'guelma',
    tag: 'The City of the sun',
    img: 'https://www.lejourdalgerie.com/wp-content/uploads/2022/06/guelma.jpg',
  },
  {
    name: 'djelfa',
    tag: 'The Endless Sands',
    img: 'https://i.pinimg.com/originals/d4/68/65/d468657f2f4fd8ea94b9ce269de21ff7.jpg',
  },
  {
    name: 'beskra',
    tag: 'The City of the Throne',
    img: 'https://tse1.mm.bing.net/th/id/OIP.zQGEFIEcUfxzRL-brnYV3QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'saida',
    tag: 'The City of the Spring',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/14/bb/4f/cascade-de-tifrit.jpg?w=1200&h=-1&s=1',
  },
  {
    name: 'sidi bel abbes',
    tag: 'The City of the sun',
    img: 'https://tse2.mm.bing.net/th/id/OIP.G_7eEx00KCkOK2giYxw-tQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
]
 
function Destinations() {
  const [showAll, setShowAll] = useState(false)
 
  const displayedCards = showAll ? DESTINATION_CARDS : DESTINATION_CARDS.slice(0, 4)
 
  return (
    <section className="section dest" id="trips">
      <div className="container">
 
        <div className="destHead">
          <h2 className="sectionTitle destTitle">Popular Destinations</h2>
          <button
            className="destLink"
            onClick={() => setShowAll(!showAll)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            {showAll ? 'Show Less' : 'View all >'}
          </button>
        </div>
 
        <motion.div layout className="destGrid">
          <AnimatePresence mode="popLayout">
            {displayedCards.map((c) => (
              <motion.a
                layout
                key={c.name}
                className="destCard"
                href="#trip"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                transition={{
                  opacity: { duration: 0.2 },
                  layout: { type: 'spring', stiffness: 200, damping: 25 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="destImg"
                  style={{ backgroundImage: `url(${c.img})` }}
                  role="img"
                  aria-label={c.name}
                />
                <div className="destLabel">
                  <span className="destName">{c.name}</span>
                  <span className="destRides">{c.tag}</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
 
      </div>
    </section>
  )
}
 
 
const IMPACT_STATS = [
  { value: '10,000+', headline: 'ACTIVE USERS',      sub: 'Growing community of travelers' },
  { value: '48',      headline: 'WILAYAS COVERED',   sub: 'Connecting every corner of the country' },
  { value: '60%',     headline: 'AVERAGE SAVINGS',   sub: 'Lower costs compared to traditional transport' },
  { value: '120T',    headline: 'CO2 SAVED / YEAR',  sub: 'Making our environment a priority' },
]
 
function Impact() {
  return (
    <section className="section impact" id="impact">
      <div className="container impactInner">
 
        <div className="impactHeader">
          <span className="impactLine" aria-hidden="true" />
          <h2 className="impactHeading">Our Impact</h2>
          <span className="impactLine" aria-hidden="true" />
        </div>
 
        <p className="impactIntro">
          Together, we&apos;re building a more connected, affordable, and sustainable way to travel across Algeria.
        </p>
 
        <div className="impactGrid">
          {IMPACT_STATS.map((s) => (
            <div className="impactStat" key={s.headline}>
              <div className="impactValue">{s.value}</div>
              <div className="impactHeadline">{s.headline}</div>
              <div className="impactSub">{s.sub}</div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  )
}
 
 
// ✅ FIX: useNavigate moved inside the CTA component
function CTA() {
  const navigate = useNavigate()
 
  return (
    <section className="section cta" id="publish">
      <div className="container">
        <div className="ctaBox">
 
          <div className="ctaDecor" aria-hidden="true" />
 
          <div className="ctaMain">
            <h2 className="ctaTitle">Ready to start your journey?</h2>
            <p className="ctaSub">
              Join thousands of travelers who are already saving money and the planet. Your first carpool is
              just a click away.
            </p>
            <div className="ctaBtns">
              <button className="ctaBtnPrimary" type="button" onClick={() => navigate('/signup')}>
                Sign Up Now
              </button>
            </div>
          </div>
 
          <div className="testimonial">
            <span className="testVerified">✓ VERIFIED</span>
            <div className="testHead">
              <div className="testHeadText">
                <div className="testName">Anias oudjane</div>
                <div className="testStars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span className="testStar" key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="testBody">
              I travel from Algiers to Bejaia every weekend to visit family. SHARETRAJET has saved me a fortune
              and I&apos;ve met such nice people along the way!
            </blockquote>
          </div>
 
        </div>
      </div>
    </section>
  )
}
 
 
function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
 
        <div className="footCol footBrandCol">
          <p className="footLead">
            The #1 carpooling platform in Algeria. Making travel easier, cheaper, and greener for everyone.
          </p>
          <div className="socialRow" aria-label="Social links">
            <a className="social" href="#social" aria-label="Globe">
              <IconGlobe />
            </a>
            <a className="social" href="#social" aria-label="Share">
              <IconShare />
            </a>
            <a className="social social--at" href="#social" aria-label="Email">
              <span className="socialAt" aria-hidden="true">@</span>
            </a>
          </div>
        </div>
 
        <div className="footCol">
          <div className="footTitle">Company</div>
          <a className="footLink" href="#about">About Us</a>
          <a className="footLink" href="#how">How it works</a>
          <a className="footLink" href="#impact">Impact</a>
          <a className="footLink" href="#contact">Contact</a>
        </div>
 
        <div className="footCol">
          <div className="footTitle">Support</div>
          <a className="footLink" href="#help">Help Center</a>
          <a className="footLink" href="#terms">Terms of Service</a>
          <a className="footLink" href="#privacy">Privacy Policy</a>
          <a className="footLink" href="#safety">Safety Rules</a>
        </div>
 
        <div className="footCol footNews">
          <div className="footTitle">Newsletter</div>
          <p className="footNewsText">Get travel tips and exclusive discounts.</p>
          <form className="news" onSubmit={(e) => e.preventDefault()}>
            <input
              className="newsInput"
              type="email"
              placeholder="Your email address"
              aria-label="Email"
            />
            <button className="newsBtn" type="submit">Subscribe</button>
          </form>
        </div>
 
      </div>
 
      <div className="footBottom">
        <div className="container footBottomInner">
          <div>© 2026 SHARETRAJET. All rights reserved.</div>
          <div className="footProud">Proudly made for Algeria</div>
        </div>
      </div>
    </footer>
  )
}
 
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Destinations />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
