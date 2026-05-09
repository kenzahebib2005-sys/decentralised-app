import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/PageTransition.jsx';
import { DashboardLayout } from './components/DashboardLayout.jsx';
import { RatingsPage } from './pages/RatingsPage.jsx';
import { CommentPage } from './pages/CommentPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';
import { VerifiedPage } from './pages/VerifiedPage.jsx';
import { MessagesPage } from './pages/messages.jsx';
import { PreferencesPage } from './pages/preferences.jsx';
import Publish from './pages/publish.jsx';
import Signup from './pages/signup.jsx';
import Signin from './pages/signin.jsx';
import Notifications from './pages/notifications.jsx';
import TripDetails from './pages/tripdetails.jsx';
import ReservationPage from './pages/ReservationPage.jsx';
import Landing from './pages/landing.jsx';
import Home from './pages/home.jsx';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
        <Route path="/home" element={<PageTransition><Home /></PageTransition>} />

        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="/signin" element={<PageTransition><Signin /></PageTransition>} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Navigate to="/reservation" replace />} />
          <Route path="/ratings"     element={<PageTransition><RatingsPage /></PageTransition>} />
          <Route path="/comment"     element={<PageTransition><CommentPage /></PageTransition>} />
          <Route path="/profile"     element={<PageTransition><ProfilePage /></PageTransition>} />
          <Route path="/messages"    element={<PageTransition><MessagesPage /></PageTransition>} />
          <Route path="/settings"    element={<PageTransition><SettingsPage /></PageTransition>} />
          <Route path="/preferences" element={<PageTransition><PreferencesPage /></PageTransition>} />
          <Route path="/verified"    element={<PageTransition><VerifiedPage /></PageTransition>} />
        </Route>

        <Route path="/publish"       element={<PageTransition><Publish /></PageTransition>} />
        <Route path="/reservation"   element={<PageTransition><ReservationPage /></PageTransition>} />
        <Route path="/tripdetails"   element={<PageTransition><TripDetails /></PageTransition>} />
        <Route path="/notifications" element={<PageTransition><Notifications /></PageTransition>} />

        <Route path="*" element={<Navigate to="/signin" replace />} />

      </Routes>
    </AnimatePresence>
  );
}