# Positivus - Digital Marketing Agency Website

A modern, fully responsive digital marketing agency website built with React, JavaScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional UI with lime green and black color scheme
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop views
- **Interactive Components**: Smooth animations and transitions throughout
- **Sections Included**:
  - Header with navigation
  - Hero section with call-to-action
  - Services showcase with 6 service cards
  - Call-to-action section
  - Case studies display
  - Working process accordion
  - Team members profile cards
  - Testimonials carousel
  - Contact form
  - Footer with newsletter signup

## Tech Stack

- **React 18** - UI library
- **JavaScript** - Pure JavaScript (no TypeScript)
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with intro
│   ├── Services.jsx        # Services grid display
│   ├── CTA.jsx             # Call-to-action section
│   ├── CaseStudies.jsx     # Case studies showcase
│   ├── WorkingProcess.jsx  # Accordion process steps
│   ├── Team.jsx            # Team member cards
│   ├── Testimonials.jsx    # Testimonials carousel
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer with newsletter
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
├── index.css               # Global styles
└── vite-env.d.ts          # Vite environment types
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Generates optimized production build in the `dist/` folder.

### Preview

```bash
npm preview
```

Preview the production build locally.

### Linting

```bash
npm run lint
```

Run ESLint to check code quality.

### Type Checking

```bash
npm run typecheck
```

Check TypeScript types (if using TypeScript).

## Customization

### Replacing Images

All images use Unsplash URLs as placeholders. To replace with your own images:

1. Find image URLs in component files (Search for `unsplash.com` or `images.unsplash.com`)
2. Replace with your image URLs
3. Update `alt` text as needed

### Modifying Colors

Colors are defined using Tailwind CSS classes:
- **Primary**: `bg-lime-400` (lime green)
- **Secondary**: `bg-black`, `text-black`
- **Neutral**: `bg-white`, `bg-gray-100`, `bg-gray-900`

To change colors, update the Tailwind classes in component files.

### Updating Content

All text content is hardcoded in the component files. To update:

1. Open the relevant component file
2. Update the text, titles, or descriptions
3. Save and the changes will reflect immediately in dev mode

## Components Overview

### Header
- Navigation menu with links
- Logo with brand name
- Request a quote button
- Mobile menu toggle

### Hero
- Large headline
- Description text
- CTA button
- Decorative graphics with shapes
- Brand logos section

### Services
- 6 service cards in 2-column grid
- Each card has icon, title, and learn more link
- Alternating background colors
- Hover effects

### CTA
- "Let's make things happen" section
- Description and button
- Decorative elements

### Case Studies
- 3 case study cards in dark background
- Text descriptions with learn more links
- Vertical dividers between cards

### Working Process
- Accordion component with 6 steps
- Expandable descriptions
- Plus/minus icons
- Smooth animations

### Team
- 6 team member cards
- Member images, names, and roles
- LinkedIn integration
- Descriptions

### Testimonials
- Carousel slider with 6 testimonials
- Navigation buttons
- Star indicator dots
- Three-card layout (previous, current, next)

### Contact
- Form with name, email, message fields
- Decorative star graphics
- Form submission handler

### Footer
- Logo and company info
- Navigation links
- Email newsletter subscription
- Social media links
- Copyright info

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size: ~170KB (gzipped ~52KB)
- CSS: ~13KB (gzipped ~3.2KB)
- Fast load times with Vite

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Available Hooks

- `useState` - For component state management
- Used in: WorkingProcess, Testimonials, Contact forms

## Future Enhancements

- Database integration for form submissions
- Admin dashboard for content management
- Blog section
- Search functionality
- Dark mode toggle
- Multi-language support

## License

All rights reserved. This project is proprietary.

## Support

For questions or issues, please contact the development team.
