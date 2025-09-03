# Filmbox Landing Page

A pixel-perfect, production-ready landing page for Filmbox - a professional film emulation software.

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Cinematic Design**: Dark theme with carefully crafted color system and shadows
- **Smooth Animations**: Framer Motion for tasteful micro-interactions
- **Interactive Components**: Before/after slider, carousels, lightbox gallery
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance**: Optimized images, lazy loading, SEO-ready
- **Responsive**: Mobile-first design that works on all devices

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
components/
├── filmbox/          # Page-specific components
├── site/            # Shared site components
└── payments/        # Payment-related components

lib/
├── hooks/           # Custom React hooks
└── checkout.ts      # Payment utilities (stub)

app/
├── layout.tsx       # Root layout with SEO
├── page.tsx         # Main landing page
└── pricing/         # Pricing page
```

## Customization

### Colors

The brand colors are defined in `tailwind.config.ts` under the `filmbox` color palette:

- Background: `#121212`
- Cards: `#1A1A1A`
- Borders: `#2A2A2A`
- Primary Blue: `#5EA3F7`
- Accent Amber: `#FFD166`

### Content

All content is easily replaceable:

1. **Images**: Replace placeholder URLs in components with your actual assets
2. **Text**: Update copy directly in component files
3. **Features**: Modify arrays in components like `TechGrid.tsx` and `FeatureTeasers.tsx`

### Payments

Payment integration is scaffolded but not implemented:

1. Add your API keys to `.env`
2. Implement the functions in `lib/checkout.ts`
3. Enable buttons in `components/payments/ProviderButtons.tsx`

## Performance

- All images use Next.js Image component with optimization
- Videos lazy-load and only play when in view
- Components use motion-safe animations
- Lighthouse scores target 95+ across all metrics

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus management for modals and carousels

Built with ❤️ for modern web standards and user experience.