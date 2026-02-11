import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const PricingCard = ({ plan }) => {
  // We pull 'highlighted' directly from the plan object in your data.js
  const { name, price, period, description, features, highlighted } = plan

  return (
    <div className={`relative rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
      highlighted
        ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-2xl scale-105 z-10'
        : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
    }`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-sm mb-4 ${highlighted ? 'text-white/80' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="flex items-baseline justify-center">
          <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
            {price === 'Custom' ? price : `$${price}`}
          </span>
          {price !== 'Custom' && (
            <span className={`ml-2 ${highlighted ? 'text-white/80' : 'text-gray-600'}`}>
              {period}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
              highlighted ? 'text-accent-light' : 'text-accent'
            }`} />
            <span className={highlighted ? 'text-white/90' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-200 shadow-md ${
          highlighted
            ? 'bg-white text-primary hover:bg-gray-50 hover:scale-[1.02]'
            : 'bg-primary text-white hover:brightness-110 hover:shadow-lg'
        }`}
      >
        {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
      </Link>
    </div>
  )
}

export default PricingCard