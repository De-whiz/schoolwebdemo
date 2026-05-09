import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogOut, Download, MessageSquare, Phone, Mail, Award, TrendingUp, BookOpen, AlertCircle } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

function ParentDashboard() {
  const [showLogout, setShowLogout] = useState(false)

  // Student Data
  const student = {
    name: 'Adewale Olufemi',
    id: 'PSW2024001',
    class: 'SSS 2',
    classTeacher: 'Mr. Adebayo Joseph',
    classTeacherEmail: 'adebayo@school.com',
    classTeacherPhone: '+234 (0) 123 456 7890',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
  }

  // Academic Summary
  const academicSummary = [
    { subject: 'Mathematics', score: 85, grade: 'A' },
    { subject: 'English', score: 88, grade: 'A' },
    { subject: 'Physics', score: 92, grade: 'A' },
    { subject: 'Chemistry', score: 80, grade: 'B' },
    { subject: 'Biology', score: 87, grade: 'A' },
    { subject: 'History', score: 83, grade: 'B+' },
  ]

  // Performance Trend
  const performanceTrend = [
    { term: '1st Term', avg: 78 },
    { term: '2nd Term', avg: 82 },
    { term: 'Current', avg: 86 },
  ]

  // Results by Category
  const resultsData = [
    { name: 'Assignments', value: 20, color: '#3b82f6' },
    { name: 'Tests', value: 30, color: '#f59e0b' },
    { name: 'Exams', value: 50, color: '#10b981' },
  ]

  // Notifications
  const notifications = [
    { id: 1, type: 'alert', title: 'School Fees Due', message: 'First term fees payment due by March 31, 2024', icon: AlertCircle },
    { id: 2, type: 'success', title: 'Results Published', message: 'Second term examination results now available', icon: Award },
    { id: 3, type: 'info', title: 'Parent-Teacher Meeting', message: 'Scheduled for June 5, 2024 at 3:00 PM', icon: MessageSquare },
  ]

  // Fee Status
  const feeStatus = [
    { term: '1st Term 2024', amount: 750000, status: 'paid', date: 'Paid on March 15, 2024' },
    { term: '2nd Term 2024', amount: 750000, status: 'pending', date: 'Due: July 31, 2024' },
  ]

  const handleLogout = () => {
    sessionStorage.removeItem('parentId')
    sessionStorage.removeItem('studentName')
    sessionStorage.removeItem('studentClass')
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-gray-900">Parent Dashboard</h1>
            <button
              onClick={() => setShowLogout(true)}
              className="flex items-center gap-2 px-4 py-2 text-error hover:bg-error/5 rounded-lg transition-all font-semibold"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section with Student Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Student Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-2 glass rounded-2xl p-8 shadow-card"
            >
              <div className="flex gap-6 items-start mb-6">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-primary"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{student.name}</h2>
                  <p className="text-gray-600 mb-4">{student.class} • ID: {student.id}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600">Class Teacher</p>
                      <p className="font-semibold text-gray-900">{student.classTeacher}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Contact</p>
                      <a href={`tel:${student.classTeacherPhone}`} className="font-semibold text-primary hover:text-primary/80">
                        {student.classTeacherPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 grid grid-cols-2 gap-4">
                <a href={`mailto:${student.classTeacherEmail}`} className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                  <Mail size={18} />
                  Email Teacher
                </a>
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                  <MessageSquare size={18} />
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {[
                { label: 'Current GPA', value: '3.8/4.0', icon: Award, color: 'from-green-400 to-green-600' },
                { label: 'Class Position', value: '1st', icon: TrendingUp, color: 'from-blue-400 to-blue-600' },
                { label: 'Attendance', value: '98%', icon: BookOpen, color: 'from-purple-400 to-purple-600' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-lg p-4 text-white shadow-card`}
                >
                  <stat.icon size={24} className="mb-2" />
                  <p className="text-sm opacity-90">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h3>
          <div className="space-y-4">
            {notifications.map((notif, i) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 rounded-lg border-l-4 ${
                  notif.type === 'alert' ? 'bg-warning/10 border-warning' :
                  notif.type === 'success' ? 'bg-success/10 border-success' :
                  'bg-primary/10 border-primary'
                }`}
              >
                <div className="flex items-start gap-4">
                  <notif.icon size={24} className={
                    notif.type === 'alert' ? 'text-warning' :
                    notif.type === 'success' ? 'text-success' :
                    'text-primary'
                  } />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{notif.title}</h4>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Academic Performance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Performance</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-6 shadow-card"
            >
              <h4 className="font-bold text-gray-900 mb-4">Performance Trend</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="term" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Line type="monotone" dataKey="avg" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Grades Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-6 shadow-card"
            >
              <h4 className="font-bold text-gray-900 mb-4">Results Breakdown</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={resultsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {resultsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="mt-4 space-y-2">
                {resultsData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-700">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Subject Scores */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Subject Performance</h3>
          
          <div className="glass rounded-2xl p-6 shadow-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Subject</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Score</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Grade</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Progress</th>
                </tr>
              </thead>
              <tbody>
                {academicSummary.map((subject, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <td className="px-4 py-3 text-gray-900 font-semibold">{subject.subject}</td>
                    <td className="px-4 py-3 text-center font-bold text-2xl text-primary">{subject.score}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-3 py-1 rounded-full font-bold text-white ${
                        subject.score >= 90 ? 'bg-success' :
                        subject.score >= 80 ? 'bg-blue-500' :
                        'bg-warning'
                      }`}>
                        {subject.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${subject.score}%` }}
                          transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Fee Status */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Status</h3>

          <div className="space-y-4">
            {feeStatus.map((fee, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-lg p-6 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-gray-900">{fee.term}</h4>
                  <p className="text-sm text-gray-600">{fee.date}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">₦{fee.amount.toLocaleString()}</p>
                    <span className={`badge ${fee.status === 'paid' ? 'badge-success' : 'badge-warning'}`}>
                      {fee.status.toUpperCase()}
                    </span>
                  </div>

                  {fee.status === 'pending' ? (
                    <Link
                      to="/payment"
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:shadow-glow transition-all"
                    >
                      Pay Now
                    </Link>
                  ) : (
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                      <Download size={18} />
                      Receipt
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Logout Modal */}
      {showLogout && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-sm shadow-glow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-8">Are you sure you want to logout from your parent portal?</p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-2 bg-error text-white rounded-lg hover:bg-error/90 font-semibold"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ParentDashboard
