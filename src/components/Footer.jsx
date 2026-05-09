import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Admissions', path: '/admissions' },
      { name: 'Payment', path: '/payment' },
    ],
    'For Parents': [
      { name: 'Parent Portal', path: '/parent-login' },
      { name: 'School Fees', path: '/payment' },
      { name: 'News & Events', path: '/news-events' },
      { name: 'Contact Us', path: '#' },
    ],
    'For Staff': [
      { name: 'Teacher Portal', path: '/teacher-portal' },
      { name: 'Submit Results', path: '/teacher-portal' },
      { name: 'Staff Directory', path: '#' },
      { name: 'Resources', path: '#' },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Stay Updated</h3>
              <p className="text-sm sm:text-base text-primary/20">Get the latest news and updates from Professional School Web</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 sm:py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="btn-secondary text-sm sm:text-base py-2 sm:py-3">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-primary">Professional</h4>
                <p className="text-xs text-gray-600">School Web</p>
              </div>
            </Link>
            <p className="text-gray-600 text-sm mb-4">Excellence in Learning and Character</p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm sm:text-base">{category}</h5>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+234123456789" className="hover:text-primary transition-colors">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@school.com" className="hover:text-primary transition-colors">
                  info@school.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Professional School Web. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
                Cookie Policy
              </a>
            </div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:shadow-glow transition-all"
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>

          {/* Developer Credit */}
          <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-gray-700 dark:text-gray-300 font-bold">
              Developed by <span className="text-primary">tachaelhub</span> | <a href="tel:+2349033952309" className="text-primary hover:text-primary/80 transition-colors">+234 903 395 2309</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
