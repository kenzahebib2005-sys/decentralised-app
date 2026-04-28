import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/DashboardLayout.jsx'
import { RatingsPage } from './pages/RatingsPage.jsx'
import { CommentPage } from './pages/CommentPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { VerifiedPage } from './pages/VerifiedPage.jsx'
import { MessagesPage } from './pages/messages.jsx'
import { PreferencesPage } from './pages/preferences.jsx'
import Publish from './pages/publish.jsx'
import Tripdetails from './pages/tripdetails.jsx'
import Signup from './pages/signup.jsx'
import Signin from './pages/signin.jsx'
import Notifications from './pages/notifications.jsx'
import TripDetails from './pages/tripdetails.jsx'
export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Navigate to="/publish" replace />} />
        <Route path="ratings" element={<RatingsPage />} />
        <Route path="comment" element={<CommentPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="preferences" element={<PreferencesPage />} />
        <Route path="verified" element={<VerifiedPage />} />
    
      </Route>
      <Route path="notifications" element={<Notifications />} />
      <Route path="tripdetails" element={<TripDetails />} />
      <Route path="publish" element={<Publish/>} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="*" element={<Navigate to="/publish" replace />} />
    </Routes>
  )
}