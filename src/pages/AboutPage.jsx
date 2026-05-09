import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Heart, Zap, Globe } from 'lucide-react'

const SCHOOL_IMAGE = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=600&fit=crop&q=80'
const PRINCIPAL_IMAGE = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80'
const TEAM_IMAGE_1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80'
const TEAM_IMAGE_2 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80'
const TEAM_IMAGE_3 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
const TEAM_IMAGE_4 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80'

function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in all we do',
      icon: Award,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Integrity',
      description: 'Honesty and transparency in all dealings',
      icon: Heart,
      color: 'from-red-400 to-red-600',
    },
    {
      title: 'Innovation',
      description: 'Embracing modern teaching methods',
      icon: Zap,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'Inclusivity',
      description: 'Equal opportunities for all learners',
      icon: Users,
      color: 'from-green-400 to-green-600',
    },
  ]

  const leaders = [
    {
      name: 'Dr. Kunle Olagunju',
      position: 'Principal',
      bio: 'Two decades of educational excellence and school leadership',
      image: PRINCIPAL_IMAGE,
    },
    {
      name: 'Mrs. Chioma Uche',
      position: 'Vice Principal (Academics)',
      bio: 'M.Ed in Curriculum Development, specialist in academic excellence',
      image: TEAM_IMAGE_1,
    },
    {
      name: 'Mr. Tunde Adewale',
      position: 'Vice Principal (Admin)',
      bio: 'Master\'s degree in Educational Management',
      image: TEAM_IMAGE_2,
    },
    {
      name: 'Dr. Ngozi Okafor',
      position: 'Head of Academics',
      bio: 'PhD in Education, international curriculum specialist',
      image: TEAM_IMAGE_3,
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={SCHOOL_IMAGE}
          alt="School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-serif font-bold mb-4">About Professional School Web</h1>
          <p className="text-xl text-gray-200">Building futures through education, character, and innovation</p>
        </motion.div>
      </section>

      {/* School History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <motion.div className="badge badge-primary mb-4 w-fit">
                Our Story
              </motion.div>
              
              <h2 className="section-title">A Legacy of Excellence</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2005, Professional School Web began with a vision to provide world-class education while maintaining strong Nigerian cultural values. What started as a small institution with 50 students has grown into one of Nigeria's most reputable schools, currently educating over 2,500 students across primary and secondary levels.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, dedicated staff, and unwavering commitment to student success. We've produced graduates who excel in universities worldwide and make significant contributions to society.
              </p>

              <div className="space-y-4">
                {[
                  '2005: School founded with 50 students',
                  '2010: Expanded to secondary school level',
                  '2015: Introduced digital learning platform',
                  '2020: Achieved 98% excellence rate',
                  '2024: 2,500+ students, 150+ staff',
                ].map((milestone, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-gray-700">{milestone}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={SCHOOL_IMAGE}
                alt="School History"
                className="rounded-2xl shadow-glow-lg w-full h-96 object-cover"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-xl p-6 max-w-xs"
              >
                <div className="text-3xl font-bold text-primary mb-2">19 Years</div>
                <p className="text-sm text-gray-600">Of committed service to education</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-12 shadow-card"
            >
              <BookOpen size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide inclusive, innovative, and high-quality education that develops intellectually competent, morally upright, and socially responsible individuals prepared for excellence in higher learning and meaningful contribution to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-12 shadow-card"
            >
              <Globe size={48} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a beacon of educational excellence in Africa, recognized globally for producing visionary leaders, innovative thinkers, and responsible citizens who drive positive change in their communities and the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Core Values
            </motion.div>
            <h2 className="section-title">Principles We Live By</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl border border-gray-200 hover:shadow-glow-lg transition-all hover:border-transparent"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all`}>
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Leadership Team
            </motion.div>
            <h2 className="section-title">Meet Our Leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{leader.bio}</p>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900">{leader.name}</h3>
                <p className="text-secondary font-semibold text-sm">{leader.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div className="badge badge-primary mb-4 mx-auto">
              Why Choose Professional School Web
            </motion.div>
            <h2 className="section-title">What Makes Us Special</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                description: 'Rigorous curriculum with 98% success rate in national examinations',
              },
              {
                title: 'Modern Infrastructure',
                description: 'State-of-the-art facilities including laboratories, libraries, and digital classrooms',
              },
              {
                title: 'Character Development',
                description: 'Emphasis on moral values, leadership, and social responsibility',
              },
              {
                title: 'Expert Educators',
                description: 'Highly qualified teachers with continuous professional development',
              },
              {
                title: 'Digital Learning',
                description: 'Integrated technology for enhanced learning experience',
              },
              {
                title: 'Holistic Development',
                description: 'Sports, arts, and extracurricular activities for well-rounded growth',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
