import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Upload, Users, FileText, Send, CheckCircle, AlertCircle, Plus, Trash2, Edit, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function TeacherPortal() {
  const navigate = useNavigate()
  const [teacherId, setTeacherId] = useState('')
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('upload-results')
  const [students, setStudents] = useState([
    { id: 1, name: 'Adewale Olufemi', class: 'SSS 2', assignment: 18, test: 28, exam: 45, status: 'submitted' },
    { id: 2, name: 'Chioma Okafor', class: 'SSS 2', assignment: 19, test: 26, exam: 42, status: 'submitted' },
    { id: 3, name: 'Tunde Adebayo', class: 'SSS 2', assignment: 17, test: 24, exam: 38, status: 'submitted' },
  ])

  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Calculus Problem Set', dueDate: '2024-05-20', submitted: 28, pending: 2 },
    { id: 2, title: 'Literature Essay', dueDate: '2024-05-25', submitted: 25, pending: 5 },
  ])

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'submitted', message: 'New assignment submitted: Physics Problem Set', time: '2 hours ago' },
    { id: 2, type: 'pending', message: 'Results approval pending for SSS 1', time: '5 hours ago' },
    { id: 3, type: 'success', message: 'Results approved for JSS 3', time: '1 day ago' },
  ])

  useEffect(() => {
    // Check if teacher is authenticated
    const storedTeacherId = sessionStorage.getItem('teacherId')
    if (!storedTeacherId) {
      navigate('/teacher-login')
    } else {
      setTeacherId(storedTeacherId)
      setLoading(false)
    }
  }, [navigate])

  const handleLogout = () => {
    sessionStorage.removeItem('teacherId')
    sessionStorage.removeItem('teacherName')
    navigate('/teacher-login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }} className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-serif font-bold text-gray-900">Teacher Portal</h1>
              <p className="text-sm text-gray-600 mt-1">Welcome, {teacherId} | Manage results, assignments, and student records</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-error text-white rounded-lg hover:bg-error/90 font-semibold transition-all"
            >
              <LogOut size={20} />
              Logout
            </motion.button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Students', value: '120', icon: Users, color: 'from-blue-400 to-blue-600' },
            { label: 'Pending Reviews', value: '8', icon: FileText, color: 'from-yellow-400 to-yellow-600' },
            { label: 'Assignments', value: '12', icon: Upload, color: 'from-purple-400 to-purple-600' },
            { label: 'Approvals', value: '3', icon: CheckCircle, color: 'from-green-400 to-green-600' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-card`}
            >
              <stat.icon size={32} className="mb-3" />
              <p className="text-sm opacity-90">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
            {[
              { id: 'upload-results', label: 'Upload Results', icon: Upload },
              { id: 'assignments', label: 'Assignments', icon: FileText },
              { id: 'students', label: 'Students', icon: Users },
              { id: 'notifications', label: 'Notifications', icon: AlertCircle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-all border-b-2 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'upload-results' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Upload Form */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upload Student Results</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Class</label>
                    <select className="input-field">
                      <option>Select Class</option>
                      <option>JSS 1</option>
                      <option>JSS 2</option>
                      <option>JSS 3</option>
                      <option>SSS 1</option>
                      <option>SSS 2</option>
                      <option>SSS 3</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                    <select className="input-field">
                      <option>Select Subject</option>
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Biology</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Term</label>
                    <select className="input-field">
                      <option>First Term</option>
                      <option>Second Term</option>
                      <option>Third Term</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Assessment Type</label>
                    <select className="input-field">
                      <option>Assignment</option>
                      <option>Test</option>
                      <option>Exam</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Total Score</label>
                    <input type="number" placeholder="100" className="input-field" />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Upload CSV/Excel File</label>
                  <div className="border-2 border-dashed border-primary rounded-lg p-8 text-center cursor-pointer hover:bg-primary/5 transition-all">
                    <Upload size={40} className="mx-auto text-primary mb-3" />
                    <p className="font-semibold text-gray-900">Drag and drop or click to upload</p>
                    <p className="text-sm text-gray-600">CSV, Excel files accepted</p>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Upload Results
                </button>
              </form>
            </div>

            {/* Recent Uploads */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Uploads</h3>

              <div className="space-y-4">
                {[
                  { subject: 'Mathematics SSS 2', date: '2024-05-10', status: 'approved', students: 30 },
                  { subject: 'English JSS 3', date: '2024-05-08', status: 'pending', students: 28 },
                  { subject: 'Physics SSS 1', date: '2024-05-05', status: 'approved', students: 25 },
                ].map((upload, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-glow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{upload.subject}</p>
                        <p className="text-sm text-gray-600">{upload.date} • {upload.students} students</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className={`badge ${upload.status === 'approved' ? 'badge-success' : 'badge-warning'}`}>
                        {upload.status.toUpperCase()}
                      </span>
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <Edit size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'assignments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Create Assignment */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Create Assignment</h2>
                <button className="btn-primary flex items-center gap-2">
                  <Plus size={20} />
                  New Assignment
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Assignment Title</label>
                  <input type="text" placeholder="E.g., Chapter 5 Exercises" className="input-field" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Due Date</label>
                  <input type="date" className="input-field" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                  <textarea placeholder="Assignment details..." rows="4" className="input-field"></textarea>
                </div>

                <button type="submit" className="btn-primary md:col-span-2">
                  Create Assignment
                </button>
              </div>
            </div>

            {/* Assignments List */}
            <div className="glass rounded-2xl p-8 shadow-card">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Active Assignments</h3>

              <div className="space-y-4">
                {assignments.map((assignment, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 border border-gray-200 rounded-lg hover:shadow-glow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900">{assignment.title}</h4>
                      <span className="badge badge-primary">Due: {assignment.dueDate}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Submitted</p>
                        <p className="text-2xl font-bold text-success">{assignment.submitted}</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Pending</p>
                        <p className="text-2xl font-bold text-warning">{assignment.pending}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Total</p>
                        <p className="text-2xl font-bold text-primary">{assignment.submitted + assignment.pending}</p>
                      </div>
                    </div>

                    <button className="mt-4 w-full py-2 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-all">
                      View Submissions
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'students' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="glass rounded-2xl p-8 shadow-card overflow-x-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Student Records</h2>

              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Student Name</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Class</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Assignment</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Test</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Exam</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Status</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      <td className="px-4 py-4 font-semibold text-gray-900">{student.name}</td>
                      <td className="px-4 py-4 text-center text-gray-600">{student.class}</td>
                      <td className="px-4 py-4 text-center font-bold text-primary">{student.assignment}</td>
                      <td className="px-4 py-4 text-center font-bold text-primary">{student.test}</td>
                      <td className="px-4 py-4 text-center font-bold text-primary">{student.exam}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="badge badge-success text-xs">{student.status.toUpperCase()}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-primary hover:text-primary/80 font-semibold">
                          View
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'notifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {notifications.map((notif, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-6 rounded-lg border-l-4 ${
                  notif.type === 'submitted' ? 'bg-blue-50 border-primary' :
                  notif.type === 'pending' ? 'bg-yellow-50 border-warning' :
                  'bg-green-50 border-success'
                }`}
              >
                <div className="flex items-start gap-4">
                  {notif.type === 'submitted' && <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />}
                  {notif.type === 'pending' && <AlertCircle size={24} className="text-warning flex-shrink-0 mt-1" />}
                  {notif.type === 'success' && <CheckCircle size={24} className="text-success flex-shrink-0 mt-1" />}

                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{notif.message}</p>
                    <p className="text-sm text-gray-600 mt-1">{notif.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  )
}

export default TeacherPortal
