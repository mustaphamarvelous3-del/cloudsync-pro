import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { fetchUnsplashImages } from '../utils/api'

const Hero = () => {
  const [heroImage, setHeroImage] = useState('')

  useEffect(() => {
    const loadImage = async () => {
      try {
        const images = await fetchUnsplashImages('cloud computing,technology', 1)
        setHeroImage(images[0])
      } catch (error) {
        console.error("Failed to load hero image", error)
      }
    }
    loadImage()
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-20 overflow-hidden">
      {/* Background decoration - Uses v4 compatible opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-primary font-semibold text-sm">🚀 Now with AI-Powered Features</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Collaborate Smarter with{' '}
              <span className="gradient-text">CloudSync Pro</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The ultimate cloud storage and collaboration platform for modern teams. 
              Secure, fast, and designed for productivity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-secondary inline-flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              {[ '14-day free trial', 'No credit card required', 'Cancel anytime'].map((text, idx) => (
                <div key={idx} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="CloudSync Pro Dashboard"
                  className="w-full h-auto object-cover min-h-[300px]"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse flex items-center justify-center">
                  <span className="text-primary-dark font-medium">Loading Dashboard Preview...</span>
                </div>
              )}
            </div>
            
            {/* Floating Stats Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce hidden sm:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">10M+ Users</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 hidden sm:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">99.9% Uptime</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero