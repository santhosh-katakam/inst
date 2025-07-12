# TechInstitute Website

A modern, responsive website for an IT training institute, inspired by TOPS Technologies. Built with React and Vite for optimal performance and developer experience.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Course Catalog**: Comprehensive course listings organized by categories
- **Placement Services**: Dedicated sections for job placement and career services
- **Student Testimonials**: Interactive testimonial slider with student reviews
- **Multiple Locations**: Information about training centers across different cities
- **Contact Forms**: Multiple contact forms for inquiries and registrations

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with flexbox, grid, and animations
- **Responsive Design**: Mobile-first approach with media queries

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation and header
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Courses.jsx     # Course catalog
│   ├── Placement.jsx   # Placement services
│   ├── Testimonials.jsx # Student reviews
│   └── Footer.jsx      # Footer with links
├── App.jsx             # Main app component
├── App.css             # Global app styles
└── index.css           # Global styles and utilities
```

## Components

### Header
- Responsive navigation with dropdown menus
- Course categories with icons
- Location links
- Mobile-friendly hamburger menu

### Hero
- Engaging hero section with statistics
- Call-to-action buttons
- Company ratings and reviews
- Placement guarantee banner

### Courses
- Tabbed interface (Classroom/Online)
- Category sidebar with filtering
- Course cards with details
- Responsive grid layout

### Placement
- JobFest and Campus Drive information
- Company partner logos
- Registration forms
- Success statistics

### Testimonials
- Student review slider
- Star ratings
- Photo gallery of institute life
- Filter options for gallery

### Footer
- Comprehensive site links
- Location information
- Contact forms
- Social media links

## Customization

To customize the website for your institute:

1. **Update Branding**: Replace logo and institute name in components
2. **Modify Colors**: Update CSS custom properties in `index.css`
3. **Add Content**: Update course data, testimonials, and company information
4. **Add Images**: Replace placeholder images with actual photos

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
