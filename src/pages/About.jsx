import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { companyValues } from '../constants/data'
import { ArrowRight, Target, Heart, Globe, Award } from 'lucide-react'
import { fetchUnsplashImages } from '../utils/api'

const About = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imgs = await fetchUnsplashImages('office,teamwork,collaboration', 3)
        setImages(imgs)
      } catch (error) {
        console.error("Failed to load about images", error)
      }
    }
    loadImages()
  }, [])

  const iconMap = {
    Target,
    Heart,
    Globe,
    Award
  }

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in less than 2 minutes. No credit card required for trial.'
    },
    {
      number: '02',
      title: 'Upload & Organize',
      description: 'Upload your files and organize them into folders. Invite your team members.'
    },
    {
      number: '03',
      title: 'Collaborate',
      description: 'Start collaborating in real-time with your team. Share, edit, and comment on files.'
    },
    {
      number: '04',
      title: 'Scale & Grow',
      description: 'As your team grows, CloudSync Pro grows with you. Upgrade anytime.'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Future of{' '}
              <span className="gradient-text">Team Collaboration</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to make collaboration seamless, secure, and accessible for teams worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, CloudSync Pro was born from a simple observation: teams were 
                struggling with fragmented tools, security concerns, and inefficient workflows.
              </p>
              <p>
                We set out to create a unified platform that combines powerful cloud storage, 
                real-time collaboration, and enterprise-grade security—all in one intuitive interface.
              </p>
              <p>
                Today, we're proud to serve over 10 million users across 150+ countries, helping 
                teams of all sizes work better together.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {images.length > 0 ? (
              images.slice(0, 2).map((img, index) => (
                <div key={index} className={`rounded-2xl overflow-hidden shadow-2xl ${index === 1 ? 'mt-8' : ''}`}>
                  <img
                    src={img}
                    alt={`Team collaboration ${index + 1}`}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-2 h-80 bg-gray-100 animate-pulse rounded-2xl"></div>
            )}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-container bg-gray-50 border-y border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => {
            const Icon = iconMap[value.icon] || Target;
            return (
              <div key={index} className="card group hover:border-primary border-2 border-transparent transition-all">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How CloudSync Pro Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center">
              <div className="text-7xl font-black text-gray-100 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 pt-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Stats Overlay */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '10M+', label: 'Happy Users' },
              { val: '150+', label: 'Countries' },
              { val: '5PB+', label: 'Data Stored' },
              { val: '99.9%', label: 'Uptime SLA' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.val}</div>
                <div className="text-white/70 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Join the CloudSync Pro Family
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Experience the difference that truly seamless collaboration can make for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact" className="btn-primary">
              Get Started Free
            </Link>
            <Link to="/features" className="btn-secondary !bg-transparent !text-white border-white/20 hover:!bg-white/10">
              Explore Features
            </Link>
          </div>
          {/* Decorative background blur */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </section>
    </div>
  )
}

export default About