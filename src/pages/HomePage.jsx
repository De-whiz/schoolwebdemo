import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Award, Users, BookOpen, Zap, ArrowRight, Play } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Stock images from Unsplash - Using reliable direct image URLs
const HERO_IMAGE = '/school%20hero.jpeg'
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&q=80'
const ACADEMICS_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80'
const ACTIVITIES_IMAGE = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop&q=80'

function HomePage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  const stats = [
    { label: 'Students', value: '2,500+', icon: Users },
    { label: 'Teachers', value: '150+', icon: BookOpen },
    { label: 'Excellence Rate', value: '98%', icon: Award },
    { label: 'Programs', value: '25+', icon: Zap },
  ]

  const features = [
    {
      title: 'World-Class Curriculum',
      description: 'International standards with Nigerian cultural values',
      icon: BookOpen,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Expert Teachers',
      description: 'Highly qualified and experienced educators',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art learning environments',
      icon: Award,
      color: 'from-green-400 to-green-600',
    },
  ]

  const testimonials = [
    {
      name: 'Folake Adeyemi',
      role: 'Parent',
      text: 'Professional School Web has transformed my child\'s academic journey. The quality of education and care is exceptional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
    {
      name: 'Chidi Okonkwo',
      role: 'Parent',
      text: 'The digital portal makes it easy to track my children\'s progress. Communication with teachers is seamless.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
    {
      name: 'Aisha Mohammed',
      role: 'Parent',
      text: 'Outstanding institution with a perfect blend of academics and character development.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
  ]

  const upcomingEvents = [
    { title: 'Sports Day', date: 'May 25, 2024', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop&q=80' },
    { title: 'Science Fair', date: 'June 10, 2024', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&q=80' },
    { title: 'Graduation Ceremony', date: 'June 28, 2024', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=200&fit=crop&q=80' },
  ]

  const chartData = [
    { month: 'Jan', performance: 85 },
    { month: 'Feb', performance: 88 },
    { month: 'Mar', performance: 92 },
    { month: 'Apr', performance: 90 },
    { month: 'May', performance: 95 },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="School Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-12 items-center py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="badge bg-blue-500/20 text-white mb-4 w-fit"
            >
              Excellence in Education
            </motion.div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Professional
              <br />
              <span className="text-white">School Web</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
              Excellence in Learning and Character. Transforming lives through quality education, innovation, and holistic development.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
              <Link to="/admissions" className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/parent-login" className="px-6 sm:px-8 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-sm sm:text-base text-center">
                Parent Portal
              </Link>
              <Link to="/payment" className="px-6 sm:px-8 py-3 border-2 border-white bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-sm sm:text-base text-center">
                Pay Fees
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-lg p-3 sm:p-4"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Cards Animation */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-96"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="glass rounded-2xl p-6 shadow-glow-lg"
              >
                <div className="text-sm font-semibold text-white mb-4">Student Statistics</div>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={chartData}>
                    <Line type="monotone" dataKey="performance" stroke="#fbbf24" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronRight size={24} className="text-white rotate-90" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={32} className="mx-auto mb-2 sm:mb-4 text-secondary sm:w-10 sm:h-10" />
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-base text-primary/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="About"
                className="rounded-2xl shadow-glow-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="badge badge-primary mb-4 w-fit">
                About Our School
              </motion.div>
              
              <h2 className="section-title">Nurturing Excellence Since 2005</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional School Web stands as a beacon of educational excellence in Nigeria. With nearly two decades of experience, we've transformed thousands of young lives through innovative teaching methods, world-class facilities, and a commitment to holistic development.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'International curriculum with Nigerian values',
                  'Expert faculty with global experience',
                  'State-of-the-art learning facilities',
                  'Strong character and moral development',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                      <ChevronRight size={16} className="text-secondary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about" className="btn-primary flex items-center gap-2 w-fit">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Why Choose Us
            </motion.div>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">Excellence in every aspect of education</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="badge badge-primary mb-4 w-fit">
                Academic Excellence
              </motion.div>
              
              <h2 className="section-title">Excellence Across All Levels</h2>
              
              <div className="space-y-6 mb-8">
                {[
                  { level: 'Primary School', desc: 'Building strong foundations with interactive learning' },
                  { level: 'Junior Secondary', desc: 'Deepening knowledge with specialized subjects' },
                  { level: 'Senior Secondary', desc: 'Advanced learning for university preparation' },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">{item.level}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={ACADEMICS_IMAGE}
                alt="Academics"
                className="rounded-2xl shadow-glow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Upcoming Events
            </motion.div>
            <h2 className="section-title">School Calendar Highlights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow-lg transition-all"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-secondary font-semibold">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/news-events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Parent Testimonials
            </motion.div>
            <h2 className="section-title">What Parents Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 shadow-card hover:shadow-glow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-secondary text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg text-primary/80 mb-8">Become part of an exceptional educational journey</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all inline-flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={20} />
              </Link>
              <a href="tel:+234123456789" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
