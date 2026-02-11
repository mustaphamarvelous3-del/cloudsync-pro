import React from 'react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import { features } from '../constants/data'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Features = () => {
  const benefits = [
    'Increase team productivity by 40%',
    'Reduce file management time by 60%',
    'Improve collaboration efficiency',
    'Enhanced security and compliance',
    'Seamless integration with existing tools',
    'Scalable infrastructure for growth'
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Teams</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to collaborate, store, and share files securely with your team.
          </p>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} variant="detailed" />
          ))}
        </div>
      </section>

      {/* Benefits & Comparison Section */}
      <section className="section-container bg-gray-50 border-y border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Teams Choose CloudSync Pro
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform is designed to solve real collaboration challenges faced by modern teams, 
              helping you work smarter and achieve more together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Capability Snapshot
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Storage Capacity', value: 'Unlimited' },
                { label: 'File Upload Size', value: 'Up to 5GB' },
                { label: 'Team Members', value: 'Unlimited' },
                { label: 'Version History', value: 'Infinite' },
                { label: 'API Access', value: 'Full Access' },
                { label: 'Support', value: '24/7 Priority' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <span className="font-medium text-gray-600">{item.label}</span>
                  <span className="text-primary font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center shadow-xl relative overflow-hidden">
           <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience All Features Risk-Free
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Start your 14-day free trial today and see why teams are switching to CloudSync Pro.
            </p>
            <Link to="/contact" className="btn-accent inline-flex items-center px-10 py-4 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  )
}

export default Features