import React from 'react'
import * as Icons from 'lucide-react'

const FeatureCard = ({ icon, title, description, variant = 'default' }) => {
  // Dynamically find the icon component from Lucide
  const Icon = Icons[icon] || Icons.HelpCircle

  if (variant === 'detailed') {
    return (
      <div className="card group hover:border-primary border-2 border-transparent transition-all duration-300 h-full">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    )
  }

  return (
    <div className="text-center p-6 h-full flex flex-col items-center">
      <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-primary/20 transition-all">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard