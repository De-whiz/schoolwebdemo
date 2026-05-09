import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import NewsEventsPage from './pages/NewsEventsPage'
import PaymentPage from './pages/PaymentPage'
import ParentLoginPage from './pages/ParentLoginPage'
import ParentDashboard from './pages/ParentDashboard'
import ResultsPage from './pages/ResultsPage'
import TeacherLoginPage from './pages/TeacherLoginPage'
import TeacherPortal from './pages/TeacherPortal'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/parent-login" element={<ParentLoginPage />} />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/teacher-login" element={<TeacherLoginPage />} />
              <Route path="/teacher-portal" element={<TeacherPortal />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </div>
  )
}

export default App
