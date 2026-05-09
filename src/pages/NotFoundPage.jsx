import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-gray-50 to-secondary/10 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        {/* Animated 404 */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-8"
        >
          <div className="text-9xl font-serif font-bold gradient-text">
            404
          </div>
        </motion.div>

        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go Home
          </Link>

          <a
            href="javascript:history.back()"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowRight size={20} />
            Go Back
          </a>
        </div>

        {/* Floating Animation */}
        <div className="mt-16 space-y-4">
          <p className="text-lg font-semibold text-primary">Take me back home</p>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Admissions', path: '/admissions' },
              { name: 'Contact', path: '/#' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFoundPage
