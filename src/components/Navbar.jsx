import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Bell, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [isParentLoggedIn, setIsParentLoggedIn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Check if parent is logged in
    const parentId = sessionStorage.getItem('parentId')
    setIsParentLoggedIn(!!parentId)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Parent Portal', path: '/parent-login' },
    { name: 'Teacher Portal', path: '/teacher-login' },
  ]

  // Add Payment only if parent is logged in
  const navLinksWithPayment = isParentLoggedIn
    ? [...navLinks.slice(0, 4), { name: 'Payment', path: '/payment' }, ...navLinks.slice(4)]
    : navLinks

  const isActive = (path) => location.pathname === path

  const notifications = [
    { id: 1, message: 'School fees deadline approaching', time: '2 hours ago', type: 'warning' },
    { id: 2, message: 'New exam results available', time: '1 day ago', type: 'success' },
    { id: 3, message: 'Parent-teacher conference scheduled', time: '2 days ago', type: 'info' },
  ]

  return (
    <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 shadow-card`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-lg text-primary">Professional</h1>
              <p className="text-xs text-white leading-none">School Web</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinksWithPayment.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-primary'}`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <Bell size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full animate-pulse"></span>
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute right-0 mt-2 w-80 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-glow-lg p-4 space-y-3`}
                >
                  <h3 className="font-semibold text-sm mb-3">Notifications</h3>
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-3 rounded-lg ${
                        notif.type === 'warning'
                          ? 'bg-warning/10 border-l-4 border-warning'
                          : notif.type === 'success'
                          ? 'bg-success/10 border-l-4 border-success'
                          : 'bg-primary/10 border-l-4 border-primary'
                      }`}
                    >
                      <p className="text-sm font-medium">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                  <button className="w-full mt-4 py-2 text-primary font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-all">
                    View All
                  </button>
                </motion.div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-4 space-y-2`}
          >
            {navLinksWithPayment.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-primary'}`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
