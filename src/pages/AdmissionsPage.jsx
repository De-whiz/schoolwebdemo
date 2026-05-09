import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, FileText, Users, Award, ArrowRight, X, ChevronRight } from 'lucide-react'

const ADMISSIONS_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80'

function AdmissionsPage() {
  const [formStep, setFormStep] = useState(1)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const requirements = [
    { level: 'Primary 1', items: ['Birth certificate', 'Parent/Guardian ID', 'School report card (if transferring)', 'Medical report'] },
    { level: 'JSS 1', items: ['Primary 6 school certificate', 'Birth certificate', 'Parent/Guardian ID', 'Entrance examination'] },
    { level: 'SSS 1', items: ['JSS 3 certificate', 'Birth certificate', 'Parent/Guardian ID', 'Entrance examination'] },
  ]

  const timeline = [
    { step: 'Application Open', date: 'January 15, 2024', description: 'Application form becomes available' },
    { step: 'Submission Deadline', date: 'March 31, 2024', description: 'Last date to submit completed application' },
    { step: 'Entrance Exam', date: 'April 10-12, 2024', description: 'Entrance examination for JSS/SSS admission' },
    { step: 'Interview', date: 'April 20-25, 2024', description: 'Parent and student interviews' },
    { step: 'Admission Result', date: 'May 5, 2024', description: 'Results released and acceptance required' },
    { step: 'Registration Opens', date: 'May 20, 2024', description: 'Student registration and orientation begins' },
  ]

  const faqs = [
    {
      question: 'What are the entry requirements?',
      answer: 'Requirements vary by level. Generally, we need birth certificate, parent ID, previous school records, and a medical report. For JSS and SSS entries, an entrance examination is required.'
    },
    {
      question: 'How much is the tuition?',
      answer: 'Primary: ₦500,000/term, JSS: ₦650,000/term, SSS: ₦750,000/term. Additional fees include development levy, PTA, and examination fees.'
    },
    {
      question: 'Can I pay tuition in installments?',
      answer: 'Yes, we offer flexible payment plans. Contact our admissions office for details on installment options.'
    },
    {
      question: 'What is the academic calendar?',
      answer: 'Three terms per session: First term (Sept-Nov), Second term (Dec-March), Third term (April-June). Each term is 12-14 weeks.'
    },
    {
      question: 'Do you offer scholarships?',
      answer: 'Yes, merit-based and need-based scholarships are available for deserving students. Apply during the admission process.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain a 1:15 ratio for primary and 1:20 for secondary, ensuring personalized attention for every student.'
    },
  ]

  const tuitionRates = [
    {
      level: 'Primary School',
      perTerm: '500,000',
      annualFee: '1,500,000',
      includes: ['Tuition', 'School materials', 'Lunch', 'Uniform allowance'],
    },
    {
      level: 'Junior Secondary School',
      perTerm: '650,000',
      annualFee: '1,950,000',
      includes: ['Tuition', 'Laboratory fees', 'Lunch', 'Project materials'],
    },
    {
      level: 'Senior Secondary School',
      perTerm: '750,000',
      annualFee: '2,250,000',
      includes: ['Tuition', 'Specialized labs', 'Lunch', 'Exam fees'],
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessModal(true)
    setTimeout(() => setShowSuccessModal(false), 3000)
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={ADMISSIONS_IMAGE}
          alt="Admissions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 sm:mb-4">Admissions 2024/2025</h1>
          <p className="text-base sm:text-xl text-gray-200">Join our community of excellence</p>
        </motion.div>
      </section>

      {/* Quick Info */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Users, label: 'Classes Open', value: 'Primary-SSS' },
              { icon: Clock, label: 'Deadline', value: 'March 31' },
              { icon: Award, label: 'Scholarships', value: 'Available' },
              { icon: CheckCircle, label: 'Acceptance', value: '85%' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon size={28} className="mx-auto mb-2 sm:mb-4 sm:w-10 sm:h-10 text-secondary" />
                <div className="text-xs sm:text-sm text-primary/80 mb-1">{item.label}</div>
                <div className="font-bold text-sm sm:text-lg">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Admission Requirements
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">What You Need</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {requirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-glow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-secondary">{req.level}</h3>
                <ul className="space-y-4">
                  {req.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-success flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Admission Timeline
            </motion.div>
            <h2 className="section-title">Important Dates</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
                  >
                    {i + 1}
                  </motion.div>
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-secondary to-transparent mt-4"></div>
                  )}
                </div>

                <div className="pb-8">
                  <h3 className="font-bold text-lg text-gray-900">{item.step}</h3>
                  <p className="text-secondary font-semibold mb-2">{item.date}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Rates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Tuition Rates
            </motion.div>
            <h2 className="section-title">2024/2025 Fees</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tuitionRates.map((rate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${i === 1 ? 'ring-2 ring-secondary shadow-glow-lg' : 'border border-gray-200'}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{rate.level}</h3>
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Per Term</div>
                  <div className="text-3xl font-bold text-primary mb-2">₦{rate.perTerm}</div>
                  <div className="text-sm text-gray-600">Annual: ₦{rate.annualFee}</div>
                </div>
                <div className="border-t pt-6 space-y-3">
                  {rate.includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Quick Application
            </motion.div>
            <h2 className="section-title">Apply Now</h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 shadow-glow-lg"
          >
            {/* Step Indicator */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    formStep >= step ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && <div className={`w-12 h-1 ${formStep >= step + 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>}
                </div>
              ))}
            </div>

            {/* Step 1: Personal Info */}
            {formStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">Student Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="input-field" />
                  <input type="text" placeholder="Last Name" className="input-field" />
                </div>
                <input type="email" placeholder="Email" className="input-field" />
                <input type="date" className="input-field" />
                <select className="input-field">
                  <option>Select Level</option>
                  <option>Primary 1</option>
                  <option>JSS 1</option>
                  <option>SSS 1</option>
                </select>
              </motion.div>
            )}

            {/* Step 2: Parent Info */}
            {formStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">Parent/Guardian Information</h3>
                <input type="text" placeholder="Parent Name" className="input-field" />
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email" className="input-field" />
                  <input type="tel" placeholder="Phone" className="input-field" />
                </div>
                <input type="text" placeholder="Occupation" className="input-field" />
                <textarea placeholder="Address" rows="3" className="input-field"></textarea>
              </motion.div>
            )}

            {/* Step 3: Documents */}
            {formStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">Documents</h3>
                <div className="space-y-3">
                  {['Birth Certificate', 'Previous School Report', 'Medical Report'].map((doc, i) => (
                    <label key={i} className="flex items-center gap-3 p-4 border-2 border-dashed border-primary rounded-lg cursor-pointer hover:bg-primary/5 transition-all">
                      <FileText size={20} className="text-primary" />
                      <span className="flex-1 text-gray-700">{doc}</span>
                      <input type="file" className="hidden" />
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setFormStep(Math.max(1, formStep - 1))}
                disabled={formStep === 1}
                className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {formStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setFormStep(formStep + 1)}
                  className="btn-primary"
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  Submit Application
                </button>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              FAQs
            </motion.div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFAQ === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={20} className="text-primary" />
                  </motion.div>
                </button>

                {openFAQ === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-gray-200 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Application Submitted!</h3>
            <p className="text-gray-600 text-center">Thank you. We'll review your application and contact you shortly.</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default AdmissionsPage
