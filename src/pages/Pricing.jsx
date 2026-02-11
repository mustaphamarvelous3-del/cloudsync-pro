import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PricingCard from '../components/PricingCard'
import { pricingPlans, faqs } from '../constants/data'
import { Check, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react'

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your team. All plans include a 14-day free trial with full features.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-600">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-accent mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-accent mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-accent mr-2" />
              24/7 Priority support
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Positioned to overlap the hero slightly */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-container bg-gray-50 border-y border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare All Features
          </h2>
          <p className="text-xl text-gray-600">
            A detailed look at what's included in each tier
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">Basic</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">Pro</th>
                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: 'Storage', basic: '100 GB', pro: '1 TB', enterprise: 'Unlimited' },
                  { feature: 'Team Members', basic: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'File Upload Size', basic: '2 GB', pro: '5 GB', enterprise: '10 GB' },
                  { feature: 'Version History', basic: '30 days', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Advanced Analytics', basic: false, pro: true, enterprise: true },
                  { feature: 'Priority Support', basic: false, pro: true, enterprise: true },
                  { feature: 'Custom Integrations', basic: false, pro: true, enterprise: true },
                  { feature: 'SSO & Security', basic: false, pro: false, enterprise: true },
                  { feature: 'Account Manager', basic: false, pro: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{row.feature}</td>
                    {[row.basic, row.pro, row.enterprise].map((cell, i) => (
                      <td key={i} className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof cell === 'boolean' ? (
                          cell ? <Check className="w-5 h-5 text-accent mx-auto" /> : <span className="text-gray-300">—</span>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Have a question? We're here to help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${
                  openFaq === index ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === index ? 'max-h-40 py-5 bg-gray-50 border-t border-gray-100' : 'max-h-0'
              }`}>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-container">
        <div className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Our sales team is ready to help you find the right fit for your team’s specific workflow.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Talk to an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  )
}

export default Pricing