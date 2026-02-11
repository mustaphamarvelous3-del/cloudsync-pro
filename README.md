# CloudSync Pro - Marketing Website

A modern, high-conversion marketing website for CloudSync Pro built with React, Vite, and Tailwind CSS.

## Features

- 🚀 Built with React 18 + Vite
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🔄 React Router for navigation
- 📝 Form handling with React Hook Form
- 🌐 API integrations (Unsplash, Web3Forms)
- ⚡ Fast and optimized
- ♿ Accessible

## Prerequisites

- Node.js v24.13.0 or higher
- npm, yarn, or pnpm

## Installation

1. Clone or create the project:
```bash
npm create vite@latest cloudsync-pro -- --template react
cd cloudsync-pro
```

2. Install dependencies:
```bash
npm install react-router-dom react-hook-form axios lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Copy all the provided code files to their respective locations in the `src` directory.

4. Create a `.env` file in the root directory (copy from `.env.example`):
```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

## Getting API Keys

### Unsplash API (Optional - has fallback images)
1. Go to https://unsplash.com/developers
2. Create a new application
3. Copy the Access Key
4. Add to `.env` file

### Web3Forms (For contact form)
1. Go to https://web3forms.com
2. Sign up for free
3. Create a new form
4. Copy the Access Key
5. Add to `.env` file

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure
```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FeatureCard.jsx
│   ├── TestimonialCard.jsx
│   ├── PricingCard.jsx
│   ├── ContactForm.jsx
│   └── NewsletterForm.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Features.jsx
│   ├── About.jsx
│   ├── Pricing.jsx
│   └── Contact.jsx
├── utils/              # Utility functions
│   └── api.js
├── constants/          # Static data
│   └── data.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Features

- **Home Page**: Hero section, features showcase, testimonials, stats, newsletter signup
- **Features Page**: Detailed feature cards, benefits, comparison table
- **About Page**: Company story, values, how it works
- **Pricing Page**: Pricing tiers, feature comparison, FAQs
- **Contact Page**: Contact form, contact information, map

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Axios
- Lucide React (icons)
- Unsplash API (images)
- Web3Forms API (form submissions)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For support, email hello@cloudsyncpro.com