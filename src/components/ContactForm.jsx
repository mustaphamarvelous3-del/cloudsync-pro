import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitContactForm } from '../utils/api'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // This calls the Web3Forms logic in your api.js
      await submitContactForm(data)
      setSubmitStatus({ type: 'success', message: "Thank you! We'll get back to you soon." })
      reset()
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message || 'Something went wrong.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="input-field"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500 font-medium">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="input-field"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 font-medium">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="input-field"
            placeholder="Acme Corp"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="input-field"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Product Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
          Product Interest *
        </label>
        <select
          id="interest"
          {...register('interest', { required: 'Please select an option' })}
          className="input-field bg-white"
        >
          <option value="">Select an option</option>
          <option value="basic">Basic Plan</option>
          <option value="pro">Pro Plan</option>
          <option value="enterprise">Enterprise Plan</option>
          <option value="demo">Request Demo</option>
          <option value="support">Technical Support</option>
          <option value="other">Other</option>
        </select>
        {errors.interest && (
          <p className="mt-1 text-sm text-red-500 font-medium">{errors.interest.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows="4"
          {...register('message', { required: 'Message is required' })}
          className="input-field resize-none"
          placeholder="Tell us about your needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Status Message */}
      {submitStatus && (
        <div className={`p-4 rounded-xl flex items-center animate-fade-in ${
          submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
          )}
          <span className="text-sm font-medium">{submitStatus.message}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-all"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm