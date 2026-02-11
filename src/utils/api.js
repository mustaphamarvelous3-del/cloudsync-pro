import axios from 'axios'

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || 'demo-key'
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'demo-key'

// Fallback images from Unsplash (direct URLs)
const fallbackImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
]

// Fetch images from Unsplash API
export const fetchUnsplashImages = async (query = 'technology,cloud,teamwork', count = 5) => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query,
        count,
        client_id: UNSPLASH_ACCESS_KEY,
        orientation: 'landscape'
      }
    })
    return response.data.map(img => img.urls.regular)
  } catch (error) {
    console.log('Using fallback images due to API error:', error.message)
    return fallbackImages.slice(0, count)
  }
}

// Fetch testimonials from JSONPlaceholder
export const fetchTestimonials = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=6')
    return response.data.map((comment, index) => ({
      name: comment.name.split(' ').slice(0, 2).join(' '),
      email: comment.email,
      content: comment.body.slice(0, 150) + '...',
      rating: 4 + (index % 2) // Alternate between 4 and 5 stars
    }))
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post('https://api.web3forms.com/submit', {
      access_key: WEB3FORMS_KEY,
      ...formData,
      subject: `New Contact Form Submission from ${formData.name}`,
    })
    return response.data
  } catch (error) {
    console.error('Error submitting form:', error)
    throw new Error('Failed to submit form. Please try again.')
  }
}

// Submit newsletter subscription
export const submitNewsletter = async (email) => {
  try {
    const response = await axios.post('https://api.web3forms.com/submit', {
      access_key: WEB3FORMS_KEY,
      email,
      subject: 'New Newsletter Subscription',
      message: `New newsletter subscription from: ${email}`
    })
    return response.data
  } catch (error) {
    console.error('Error submitting newsletter:', error)
    throw new Error('Failed to subscribe. Please try again.')
  }
}