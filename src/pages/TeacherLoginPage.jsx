import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LOGIN_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80'

function TeacherLoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    teacherId: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // Validate teacher ID format (e.g., TEA001, TEA002, etc.)
    if (!formData.teacherId.toUpperCase().startsWith('TEA')) {
      setError('Invalid Teacher ID. Format: TEA001')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      setLoading(false)
      // Store teacher info in sessionStorage
      sessionStorage.setItem('teacherId', formData.teacherId)
      sessionStorage.setItem('teacherName', `Teacher ${formData.teacherId}`)
      navigate('/teacher-portal')
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="relative">
              <img
                src={LOGIN_IMAGE}
                alt="Teacher Portal"
                className="rounded-3xl shadow-glow-lg w-full h-96 object-cover"
              />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-glow-lg p-6 max-w-xs"
              >
                <p className="text-sm text-gray-600 mb-2">Manage student results</p>
                <p className="font-bold text-primary">Secure teacher access</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-glow-lg p-8 md:p-12">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 mb-8 cursor-pointer hover:opacity-80 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-lg text-primary">Professional</p>
                  <p className="text-xs text-gray-600">School Web</p>
                </div>
              </Link>

              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Teacher Portal</h1>
              <p className="text-gray-600 mb-8">Manage results and student records securely</p>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Error Alert */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-error/10 border-l-4 border-error rounded-lg"
                  >
                    <p className="text-error font-semibold text-sm">{error}</p>
                  </motion.div>
                )}

                {/* Teacher ID */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Teacher ID</label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      name="teacherId"
                      value={formData.teacherId}
                      onChange={handleChange}
                      placeholder="TEA001"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all uppercase"
                      disabled={loading}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Format: TEA followed by 3 digits (e.g., TEA001)</p>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Verifying...
                    </>
                  ) : (
                    <>
                      Access Portal <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Demo Info */}
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs font-semibold text-gray-900 mb-2">Demo Credentials:</p>
                <p className="text-xs text-gray-600">ID: TEA001 | Password: demo123</p>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: 'Upload Results', desc: 'Submit student grades' },
                  { title: 'Assignments', desc: 'Manage assignments' },
                  { title: 'Records', desc: 'View student data' },
                  { title: 'Notifications', desc: 'Get instant alerts' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-center p-3 rounded-lg bg-gray-50"
                  >
                    <p className="text-xs font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TeacherLoginPage
