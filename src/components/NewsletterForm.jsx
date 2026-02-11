import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitNewsletter } from '../utils/api'
import { Mail, CheckCircle } from 'lucide-react'

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Connects to your Web3Forms utility
      await submitNewsletter(data.email)
      setIsSuccess(true)
      reset()
      // Success message disappears after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 shadow-xl">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
           <Mail className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
        </p>

        {isSuccess ? (
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 flex flex-col items-center justify-center animate-fade-in border border-white/30">
            <CheckCircle className="w-12 h-12 text-white mb-3" />
            <span className="text-white font-bold text-xl">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all placeholder:text-gray-400"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="absolute -bottom-6 left-0 text-sm text-white font-medium">{errors.email.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 whitespace-nowrap shadow-lg shadow-black/10"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default NewsletterForm