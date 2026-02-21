
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import TournamentsPage from './pages/Tournaments/TournamentsPage'
import PricingPage from './pages/PricingPage/PricingPage'
import ResourcesPage from './pages/Resources/ResourcesPage'
import ResourceDetailPage from './pages/Resources/ResourceDetailPage'
import FAQPage from './pages/FAQ/FAQPage'
import HowItWorksPage from './pages/HowToUse/HowItWorksPage'
import NewsPage from './pages/News/NewsPage'
import HelpCenterPage from './pages/HelpCenter/HelpCenterPage'
import CommunityRulesPage from './pages/CommunityRules/CommunityRulesPage'
import ProfilePage from './pages/Profile/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ContactPage from './pages/Contact/ContactPage'
import AboutPage from './pages/About/AboutPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="forum" element={<Navigate to="/resources" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tournaments" element={<TournamentsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:id" element={<ResourceDetailPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="help" element={<HelpCenterPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="community-rules" element={<CommunityRulesPage />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App