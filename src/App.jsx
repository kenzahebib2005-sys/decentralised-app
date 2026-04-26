import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/DashboardLayout.jsx'
import { RatingsPage } from './pages/RatingsPage.jsx'
import { CommentPage } from './pages/CommentPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { VerifiedPage } from './pages/VerifiedPage.jsx'
import { MessagesPage } from './pages/messages.jsx'
import { PreferencesPage } from './pages/preferences.jsx'
import Signup from './pages/signup.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Navigate to="/ratings" replace />} />
        <Route path="ratings" element={<RatingsPage />} />
        <Route path="comment" element={<CommentPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="preferences" element={<PreferencesPage />} />
        <Route path="verified" element={<VerifiedPage />} />
      </Route>

      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/ratings" replace />} />
    </Routes>
  )
}