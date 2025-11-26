# JP Foot Spa Website

A beautiful, professional website for JP Foot Spa located in Aurora, IL. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Business Information

- **Business Name**: JP Foot Spa
- **Address**: 3150 N Aurora Rd, Aurora, IL 60502
- **Phone**: 630-978-9188
- **Hours**: Monday - Sunday, 10:00 AM - 10:00 PM (CST)

## Features

- 🎨 Modern, professional design with calming spa aesthetics
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔗 Integrated "Book Online" buttons linking to Square Appointments
- 📋 Multiple sections:
  - Hero section with prominent call-to-action
  - About section with business information
  - Services showcase with 9 different massage/spa services
  - Photo gallery
  - Customer reviews
  - Contact form
  - Footer with quick links
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🖼️ Beautiful spa imagery from Unsplash

## Services Offered

1. **Foot Reflexology** - Pressure point therapy for overall wellness
2. **Swedish Massage** - Classic relaxation massage
3. **Deep Tissue Massage** - Targets deeper muscle layers
4. **Aromatherapy Massage** - Essential oils for enhanced relaxation
5. **Hot Stone Massage** - Heated stones for deep healing
6. **Couple Massage** - Side-by-side massage experience
7. **Four Hands Massage** - Two therapists working simultaneously
8. **Combo Massage** - Multiple techniques combined
9. **Chair Massage** - Quick stress relief

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd jp-foot-spa
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Updating Square Appointments Link

The "Book Online" buttons currently link to `https://squareup.com/appointments/book/`. To update this:

1. Open `app/page.tsx`
2. Find all instances of `https://squareup.com/appointments/book/`
3. Replace with your actual Square Appointments booking URL

### Changing Colors

The website uses a warm, spa-inspired color palette. To change colors:

1. Open `app/globals.css`
2. Update the CSS variables:
   - `--primary: #8b7355` (main brand color)
   - `--primary-dark: #6b5444` (hover states)
   - `--secondary: #d4c5b9` (accent color)

### Adding or Modifying Services

To add, remove, or modify services:

1. Open `app/page.tsx`
2. Find the Services Section (around line 132)
3. Add/modify/remove service cards in the grid

### Updating Images

The website currently uses placeholder images from Unsplash. To use your own images:

1. Add your images to the `public` folder
2. In `app/page.tsx`, replace Unsplash URLs with your image paths:
   - Example: `src="/your-image.jpg"` instead of `src="https://images.unsplash.com/..."`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any hosting service that supports Node.js

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Font**: Geist (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 JP Foot Spa. All rights reserved.

## Support

For questions or support regarding the website, contact the development team or the business directly at 630-978-9188.
