import { Navigate, Route, Routes } from 'react-router-dom';
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
import HomePage from './pages/landing.jsx';  // ← capital, and import HomePage specifically

export default function App() {
  return (
    <Routes>
      {/* 1. AUTH ROUTES */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      {/* 2. LANDING */}
      <Route path="/" element={<HomePage />} />
   

      {/* 3. DASHBOARD ROUTES */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Navigate to="/reservation" replace />} />
        <Route path="/ratings" element={<RatingsPage />} />
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/verified" element={<VerifiedPage />} />
      </Route>

      {/* 4. MAIN APP ROUTES */}
      <Route path="/publish" element={<Publish />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/tripdetails" element={<TripDetails />} />
      <Route path="/notifications" element={<Notifications />} />

      {/* 5. FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}