import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Unlock, CheckCircle, AlertCircle, Eye, EyeOff, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function ResultsPage() {
  const [accessCode, setAccessCode] = useState('')
  const [hasAccess, setHasAccess] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [codeVerified, setCodeVerified] = useState(false)

  const student = {
    name: 'Adewale Olufemi',
    id: 'PSW2024001',
    class: 'SSS 2',
    session: '2023/2024',
    term: 'Second Term',
  }

  const results = [
    { subject: 'Mathematics', assignment: 18, test: 28, exam: 45, total: 91, grade: 'A', status: 'Excellent' },
    { subject: 'English', assignment: 19, test: 26, exam: 42, total: 87, grade: 'A', status: 'Very Good' },
    { subject: 'Physics', assignment: 20, test: 29, exam: 43, total: 92, grade: 'A', status: 'Excellent' },
    { subject: 'Chemistry', assignment: 17, test: 24, exam: 38, total: 79, grade: 'B+', status: 'Good' },
    { subject: 'Biology', assignment: 19, test: 27, exam: 40, total: 86, grade: 'A', status: 'Very Good' },
    { subject: 'History', assignment: 18, test: 25, exam: 39, total: 82, grade: 'B+', status: 'Good' },
  ]

  const chartData = results.map(r => ({
    subject: r.subject.substring(0, 4),
    score: r.total,
  }))

  const handleVerifyCode = (e) => {
    e.preventDefault()
    if (accessCode === '1234' || accessCode === 'PSW2024') {
      setCodeVerified(true)
      setHasAccess(true)
    } else {
      alert('Invalid access code. Try: 1234 or PSW2024')
      setAccessCode('')
    }
  }

  const paymentStatus = {
    feePaid: true,
    feesAmount: '₦750,000',
    paymentDate: '2024-04-15',
    status: 'Verified',
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Result Checking Portal</h1>
          <p className="text-gray-600 text-lg">Access and view academic results securely</p>
        </motion.div>

        {/* Student Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-12 shadow-card"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Student Name', value: student.name },
              { label: 'Student ID', value: student.id },
              { label: 'Class', value: student.class },
              { label: 'Session', value: `${student.session} - ${student.term}` },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-xs text-gray-600 font-semibold uppercase mb-1">{item.label}</p>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Access Code Verification Section */}
      {!hasAccess ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-12 shadow-glow-lg"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-6"
              >
                <Lock size={40} className="text-warning" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Result Access Verification</h2>
              <p className="text-gray-600 text-lg">Please verify your access to view results</p>
            </div>

            {/* Payment Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl mb-8 border-l-4 ${
                paymentStatus.feePaid
                  ? 'bg-success/10 border-success'
                  : 'bg-error/10 border-error'
              }`}
            >
              <div className="flex items-start gap-4">
                {paymentStatus.feePaid ? (
                  <CheckCircle size={32} className="text-success flex-shrink-0" />
                ) : (
                  <AlertCircle size={32} className="text-error flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {paymentStatus.feePaid ? 'Fees Payment Verified' : 'Payment Required'}
                  </h3>
                  {paymentStatus.feePaid ? (
                    <p className="text-gray-600">
                      School fees {paymentStatus.feesAmount} paid on {paymentStatus.paymentDate}
                    </p>
                  ) : (
                    <p className="text-gray-600">Please pay school fees to access results</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Access Code Form */}
            <form onSubmit={handleVerifyCode} className="max-w-md mx-auto">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Enter Your Result Access Code
              </label>

              <div className="relative mb-6">
                <input
                  type={showCode ? 'text' : 'password'}
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                  placeholder="Enter 4-digit code"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-center text-2xl tracking-widest font-bold focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  maxLength="8"
                  disabled={!paymentStatus.feePaid}
                />
                <button
                  type="button"
                  onClick={() => setShowCode(!showCode)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  {showCode ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>

              <motion.button
                type="submit"
                disabled={!paymentStatus.feePaid}
                whileHover={{ scale: paymentStatus.feePaid ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Unlock Results
              </motion.button>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-xs font-semibold text-gray-900 mb-2">Demo Code:</p>
                <p className="text-xs text-gray-600">Try: 1234 or PSW2024</p>
              </div>
            </form>
          </motion.div>
        </div>
      ) : (
        /* Results Display */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Unlock Success */}
          {codeVerified && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-success/10 border-l-4 border-success rounded-lg flex items-center gap-4"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Unlock size={32} className="text-success" />
              </motion.div>
              <div>
                <h3 className="font-bold text-gray-900">Results Unlocked</h3>
                <p className="text-gray-600">You can now view full academic results</p>
              </div>
            </motion.div>
          )}

          {/* Overall Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: 'Total Score', value: '528/600' },
              { label: 'Average Grade', value: 'A-' },
              { label: 'Class Position', value: '1st' },
              { label: 'GPA', value: '3.8/4.0' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-6 text-center shadow-card"
              >
                <p className="text-xs text-gray-600 font-semibold uppercase mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8 mb-12 shadow-card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="subject" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Detailed Results Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8 shadow-card overflow-x-auto"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Results</h3>

            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Subject</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Assignment (20%)</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Test (30%)</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Exam (50%)</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Total</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Grade</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <td className="px-4 py-4 font-semibold text-gray-900">{result.subject}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{result.assignment}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{result.test}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{result.exam}</td>
                    <td className="px-4 py-4 text-center font-bold text-2xl text-primary">{result.total}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="px-3 py-1 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600">
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-success/10 text-success">
                        {result.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {/* Legend */}
            <div className="mt-8 pt-8 border-t border-gray-300">
              <h4 className="font-bold text-gray-900 mb-4">Grading Scale:</h4>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { grade: 'A', range: '90-100%', desc: 'Excellent' },
                  { grade: 'B+', range: '80-89%', desc: 'Very Good' },
                  { grade: 'B', range: '70-79%', desc: 'Good' },
                  { grade: 'C', range: '60-69%', desc: 'Fair' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{item.grade}</p>
                    <p className="text-xs text-gray-600">{item.range}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <button className="btn-primary flex items-center justify-center gap-2 mx-auto">
              <Download size={20} />
              Download Result Sheet (PDF)
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ResultsPage
