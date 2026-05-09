import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Search, Tag, ArrowRight } from 'lucide-react'

function NewsEventsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const news = [
    {
      id: 1,
      title: 'WAEC Results: 98% Pass Rate Achieved',
      excerpt: 'Professional School Web celebrates outstanding performance in 2024 WAEC examinations with 98% pass rate.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop&q=80',
      date: 'May 5, 2024',
      category: 'Academics',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'New Science Laboratory Inaugurated',
      excerpt: 'State-of-the-art science laboratory with modern equipment officially opened to enhance practical learning.',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop&q=80',
      date: 'April 28, 2024',
      category: 'Infrastructure',
      author: 'Principal',
    },
    {
      id: 3,
      title: 'Staff Recognition Awards 2024',
      excerpt: 'Annual recognition ceremony honoring outstanding contributions by members of staff to the institution.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
      date: 'April 20, 2024',
      category: 'School News',
      author: 'HR',
    },
  ]

  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      description: 'Inter-house competitions in track and field events',
      date: 'May 25, 2024',
      time: '09:00 AM',
      location: 'School Sports Complex',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&q=80',
      category: 'Sports',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'Science and Innovation Fair',
      description: 'Students showcase scientific projects and innovative solutions',
      date: 'June 10, 2024',
      time: '10:00 AM',
      location: 'Main Hall',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80',
      category: 'Academics',
      status: 'Upcoming',
    },
    {
      id: 3,
      title: 'Graduation Ceremony - Class of 2024',
      description: 'Celebration of graduating students achievements and future endeavors',
      date: 'June 28, 2024',
      time: '02:00 PM',
      location: 'School Auditorium',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop&q=80',
      category: 'Celebration',
      status: 'Upcoming',
    },
    {
      id: 4,
      title: 'Teacher Professional Development Workshop',
      description: 'Advanced pedagogical training for staff',
      date: 'May 15, 2024',
      time: '09:00 AM',
      location: 'Conference Room',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
      category: 'Professional',
      status: 'Upcoming',
    },
    {
      id: 5,
      title: 'Parent-Teacher Conference',
      description: 'Meeting to discuss student progress and performance',
      date: 'June 5, 2024',
      time: '03:00 PM',
      location: 'Various Classrooms',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
      category: 'Parents',
      status: 'Upcoming',
    },
    {
      id: 6,
      title: 'Cultural Appreciation Week',
      description: 'Celebration of Nigerian and African cultures',
      date: 'June 15, 2024',
      time: '01:00 PM',
      location: 'School Premises',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80',
      category: 'Cultural',
      status: 'Upcoming',
    },
  ]

  const categories = ['all', 'Academics', 'Sports', 'Celebration', 'Professional', 'Cultural', 'Parents']

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.category === activeFilter
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'url(data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'
          }} className="w-full h-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-serif font-bold mb-4">News & Events</h1>
          <p className="text-xl text-primary/80">Stay updated with school activities and announcements</p>
        </motion.div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative mb-8">
              <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeFilter === cat
                      ? 'bg-primary text-white shadow-glow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {news.slice(0, 2).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group overflow-hidden rounded-2xl shadow-card hover:shadow-glow-lg transition-all"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-primary">{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {item.date} • By {item.author}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More News */}
            <div className="mt-8 grid gap-4">
              {news.slice(2).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-4 p-4 rounded-lg hover:bg-gray-100 transition-all cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <span className="badge badge-primary text-xs">{item.category}</span>
                    <h4 className="font-bold text-gray-900 mt-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-glow-lg transition-all"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge bg-success text-white">{event.status}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <Tag size={14} className="inline text-secondary mr-2" />
                    <span className="text-xs font-semibold text-secondary">{event.category}</span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{event.description}</p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-primary/80 mb-8">Subscribe to our newsletter for latest news and events</p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default NewsEventsPage
