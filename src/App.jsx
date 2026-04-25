import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/DashboardLayout.jsx'
import { RatingsPage } from './pages/RatingsPage.jsx'
import { CommentPage } from './pages/CommentPage.jsx'
import { ComingSoonPage } from './pages/ComingSoonPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { VerifiedPage } from './pages/VerifiedPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
         <Route path="verified" element={<VerifiedPage />} />
        <Route index element={<Navigate to="/ratings" replace />} />
        <Route path="ratings" element={<RatingsPage />} />
        <Route path="comment" element={<CommentPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="messages" element={<ComingSoonPage title="Messages" />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="preferences" element={<ComingSoonPage title="Preferences" />} />
        <Route path="verified" element={<ComingSoonPage title="Verified dashboard" />} />
      </Route>
      <Route path="*" element={<Navigate to="/ratings" replace />} />
    </Routes>
  )
}