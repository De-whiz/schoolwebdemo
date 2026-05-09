import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Download, CheckCircle, Clock, AlertCircle, ArrowRight, X } from 'lucide-react'

const PAYMENT_IMAGE = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&q=80'

function PaymentPage() {
  const [activeTab, setActiveTab] = useState('pending')
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const studentFees = [
    {
      id: 1,
      student: 'Adewale Olufemi',
      class: 'SSS 2',
      term: 'First Term 2024',
      amount: 750000,
      dueDate: '2024-03-31',
      status: 'pending',
      term_label: '1st Term',
    },
    {
      id: 2,
      student: 'Adewale Olufemi',
      class: 'SSS 2',
      term: 'Second Term 2024',
      amount: 750000,
      dueDate: '2024-07-31',
      status: 'pending',
      term_label: '2nd Term',
    },
    {
      id: 3,
      student: 'Chioma Okafor',
      class: 'JSS 1',
      term: 'First Term 2024',
      amount: 650000,
      dueDate: '2024-03-31',
      status: 'paid',
      term_label: '1st Term',
    },
    {
      id: 4,
      student: 'Chioma Okafor',
      class: 'JSS 1',
      term: 'Second Term 2024',
      amount: 650000,
      dueDate: '2024-07-31',
      status: 'paid',
      term_label: '2nd Term',
    },
  ]

  const paymentMethods = [
    {
      id: 'paystack',
      name: 'Paystack',
      icon: '💳',
      description: 'Instant payment via card, bank transfer, or USSD',
      fee: 0.015,
    },
    {
      id: 'flutterwave',
      name: 'Flutterwave',
      icon: '🌊',
      description: 'Multiple payment options including mobile money',
      fee: 0.019,
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct transfer to school account',
      fee: 0,
    },
  ]

  const paymentHistory = [
    { date: '2024-03-15', amount: 650000, status: 'paid', method: 'Paystack', reference: 'PSK2024031500123' },
    { date: '2024-02-20', amount: 750000, status: 'paid', method: 'Bank Transfer', reference: 'TRF2024022000456' },
  ]

  const tuitionBreakdown = [
    { item: 'Tuition Fee', amount: 600000 },
    { item: 'Development Levy', amount: 50000 },
    { item: 'PTA Contribution', amount: 50000 },
    { item: 'Examination Fee', amount: 30000 },
    { item: 'Sports Fee', amount: 20000 },
  ]

  const filteredFees = studentFees.filter(fee => activeTab === 'all' || fee.status === activeTab)
  const totalPending = studentFees
    .filter(fee => fee.status === 'pending')
    .reduce((sum, fee) => sum + fee.amount, 0)

  const handlePayment = () => {
    setTimeout(() => {
      setShowPaymentModal(false)
      setShowSuccessModal(true)
      setTimeout(() => setShowSuccessModal(false), 3000)
    }, 1500)
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src={PAYMENT_IMAGE}
          alt="Payment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-serif font-bold mb-4">School Fees Payment</h1>
          <p className="text-xl text-gray-200">Secure and convenient payment portal</p>
        </motion.div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Total Pending', value: `₦${totalPending.toLocaleString()}`, icon: AlertCircle },
              { label: 'Paid This Session', value: '₦1,400,000', icon: CheckCircle },
              { label: 'Payment Methods', value: '3 Options', icon: CreditCard },
              { label: 'Processing Time', value: 'Instant', icon: Clock },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon size={32} className="mx-auto mb-3 text-secondary" />
                <div className="text-sm text-primary/80 mb-1">{item.label}</div>
                <div className="text-2xl font-bold">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fee Breakdown</h2>

            <div className="glass rounded-2xl p-8 space-y-4">
              {tuitionBreakdown.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-center pb-4 border-b border-gray-300 last:border-b-0"
                >
                  <span className="text-gray-700">{item.item}</span>
                  <span className="font-bold text-primary">₦{item.amount.toLocaleString()}</span>
                </motion.div>
              ))}

              <div className="flex justify-between items-center pt-4 border-t-2 border-primary">
                <span className="font-bold text-lg text-gray-900">Total Per Term</span>
                <span className="font-bold text-2xl text-primary">₦750,000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment Methods</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {paymentMethods.map((method, i) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`cursor-pointer p-8 rounded-2xl transition-all ${
                    selectedMethod === method.id
                      ? 'ring-2 ring-primary shadow-glow-lg bg-primary/5'
                      : 'bg-white hover:shadow-glow-lg border border-gray-200'
                  }`}
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  {method.fee > 0 && (
                    <p className="text-xs text-gray-500">Fee: {(method.fee * 100).toFixed(1)}%</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Status */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Outstanding Fees</h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-200">
              {['pending', 'paid', 'all'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold transition-all border-b-2 ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tab === 'pending' && ` (${studentFees.filter(f => f.status === 'pending').length})`}
                  {tab === 'paid' && ` (${studentFees.filter(f => f.status === 'paid').length})`}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Student</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Class</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Term</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Amount</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Due Date</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFees.map((fee, i) => (
                    <motion.tr
                      key={fee.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      <td className="px-6 py-4 text-gray-900">{fee.student}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.class}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.term_label}</td>
                      <td className="px-6 py-4 font-bold text-primary">₦{fee.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.dueDate}</td>
                      <td className="px-6 py-4">
                        <span className={`badge ${fee.status === 'paid' ? 'badge-success' : 'badge-warning'}`}>
                          {fee.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {fee.status === 'pending' ? (
                          <button
                            onClick={() => setShowPaymentModal(true)}
                            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1"
                          >
                            Pay <ArrowRight size={16} />
                          </button>
                        ) : (
                          <button className="text-gray-400 flex items-center gap-1">
                            <Download size={16} /> Receipt
                          </button>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment History */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Payments</h2>

            <div className="space-y-4">
              {paymentHistory.map((payment, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-lg p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{payment.method}</p>
                      <p className="text-sm text-gray-600">Ref: {payment.reference}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-2xl text-gray-900">₦{payment.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{payment.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md shadow-glow-lg w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Payment Confirmation</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Amount</p>
              <p className="text-3xl font-bold text-primary">₦750,000</p>
              <p className="text-sm text-gray-600 mt-2">SSS 2 - First Term 2024</p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-3">Payment Method</p>
              <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                <p className="font-bold text-gray-900">Paystack</p>
                <p className="text-xs text-gray-600">Instant payment via card or bank transfer</p>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full btn-primary mb-3"
            >
              Proceed to Payment
            </button>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="w-full py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
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
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle size={32} className="text-success" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Payment Successful!</h3>
            <p className="text-gray-600 text-center">Your payment has been processed. A receipt has been sent to your email.</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default PaymentPage
