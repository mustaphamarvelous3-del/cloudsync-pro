import React from 'react'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@cloudsyncpro.com',
      link: 'mailto:hello@cloudsyncpro.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Tech Street, San Francisco, CA 94102',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM - 6PM PST',
      link: null
    }
  ]

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, url: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Instagram, url: '#', label: 'Instagram', color: 'hover:text-pink-600' }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information Side */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Details</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking for support or have a custom enterprise inquiry, we're here to help.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex items-start group">
                    <div className="bg-primary/10 p-4 rounded-xl mr-4 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.content}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Join the Community</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className={`bg-white border border-gray-100 shadow-sm p-3 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500">Fields marked with * are required.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact