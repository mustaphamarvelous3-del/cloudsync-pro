import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ name, position, content, rating = 5 }) => {
  // Safe initials logic: handles single names or multiple names
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '??';

  return (
    <div className="card h-full flex flex-col justify-between">
      <div>
        {/* Star Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        
        <Quote className="w-10 h-10 text-primary/10 mb-2 -ml-2" />
        
        <p className="text-gray-700 mb-6 leading-relaxed italic">
          "{content}"
        </p>
      </div>
      
      {/* User Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mr-4 shadow-sm">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 leading-tight">{name}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard