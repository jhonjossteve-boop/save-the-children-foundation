# Save the Children Foundation Donation Website - Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based with Charity/Social Impact Focus

Drawing inspiration from:
- **charity: water** - Clean, emotional storytelling with strong imagery
- **UNICEF** - Trust-building through statistics and impact visualization  
- **GoFundMe** - Streamlined donation flows with social proof
- **Stripe** - Professional, trustworthy payment aesthetics

**Core Principles:**
- Emotional connection through authentic imagery of children and impact
- Trust and transparency through clear impact metrics and testimonials
- Frictionless donation process with minimal steps
- Professional credibility to inspire donor confidence

## Color Palette

**Primary Colors (Light Mode):**
- Primary Blue: 210 85% 45% (Trust, hope, stability)
- Primary Dark: 210 90% 25% (Headers, emphasis)
- Success Green: 145 70% 45% (Positive impact, confirmation)

**Primary Colors (Dark Mode):**
- Primary Blue: 210 75% 55%
- Primary Dark: 210 20% 15%
- Success Green: 145 60% 50%

**Neutral Colors (Both Modes):**
- Light mode backgrounds: White, 210 15% 97% (warm gray)
- Dark mode backgrounds: 210 15% 8%, 210 12% 12%
- Text: 210 20% 20% (light mode), 210 10% 90% (dark mode)

**Accent (Use Sparingly):**
- Warm Orange: 25 90% 55% (Call-to-action highlights, warmth)

## Typography

**Font Families:**
- Headings: 'Inter', sans-serif (Weight: 600-800)
- Body: 'Inter', sans-serif (Weight: 400-500)
- Emphasis: 'Inter', sans-serif (Weight: 600)

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg
- Small Text: text-sm

## Layout System

**Spacing Primitives:**
Primary spacing units: 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8, p-12
- Section spacing: py-16, py-20, py-24
- Grid gaps: gap-6, gap-8, gap-12

**Container Widths:**
- Full sections: max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl mx-auto
- Donation form: max-w-2xl mx-auto

## Component Library

**Navigation:**
- Sticky header with logo, primary navigation, "Donate Now" CTA button
- Mobile: Hamburger menu, full-screen overlay navigation
- Trust indicators: "100% goes to children" badge in header

**Hero Section:**
- Full-width impactful image background (children benefiting from programs)
- Dark overlay (40% opacity) for text readability
- Centered headline + subheadline + dual CTAs ("Donate Now" + "Learn Our Impact")
- Impact counter animation (e.g., "Helped 2.5M+ children")
- Height: min-h-[600px] md:min-h-[700px]

**Donation Form Components:**
- Preset amount cards in 2x2 or 3x2 grid (e.g., $25, $50, $100, $250, Custom)
- Each card shows impact description ("Provides school supplies for 5 children")
- Active state with Primary Blue border and background tint
- Payment section with Stripe Elements (clean, white card-style)
- Donor info fields with clear labels and validation states

**Impact Showcase:**
- 3-column stat cards (desktop), stacked (mobile)
- Large number displays with animated count-up on scroll
- Icons representing categories (education, health, safety)
- Brief descriptive text under each stat

**Testimonial Cards:**
- 2-column grid (desktop), single column (mobile)
- Donor photo (circular, 64px) + name + donation amount
- Quote in italics with opening quotation mark styling
- Background: subtle card elevation with rounded corners

**Footer:**
- 4-column layout (desktop): About, Programs, Get Involved, Contact
- Newsletter signup with email input + submit button
- Social media icons (horizontally centered)
- Trust badges: Charity Navigator, GuideStar ratings
- Payment method logos: major credit cards, Stripe secure badge

## Images

**Hero Image:**
- Large, emotionally compelling photo of children smiling/learning
- High quality, authentic (not stock), warm tones
- Positioned: Full-width background, center focal point on children's faces
- Overlay: Dark gradient from bottom (60% opacity) to top (20% opacity)

**Impact Section Images:**
- 3 medium-sized photos showing different program areas
- Rounded corners (rounded-lg)
- Aspect ratio: 4:3 or 16:9
- Captions underneath each image

**Testimonial Photos:**
- Small circular donor headshots (real or illustrated avatars)
- Positioned: Left-aligned with quote text

**Trust Section:**
- Logo wall of partner organizations (grayscale, hover to color)
- Certification badges (full color)

## Interactions & Animations

**Minimal Animation Strategy:**
- Donation amount cards: Subtle scale on hover (scale-105)
- CTA buttons: Smooth color transition (transition-colors duration-200)
- Impact numbers: Count-up animation on first scroll into view (once only)
- Form validation: Gentle shake on error, green checkmark on success
- No parallax, no complex scroll animations, no auto-playing carousels

**Form States:**
- Focus: Primary Blue ring (ring-2 ring-primary)
- Error: Red border + error message below field
- Success: Green border + checkmark icon
- Disabled: Reduced opacity (opacity-50) + cursor-not-allowed

## Page Structure

**Landing Page Sections (in order):**
1. Hero with primary CTA
2. Impact Statistics (3-4 key metrics)
3. How Your Donation Helps (visual breakdown with images)
4. Featured Programs (3 cards showcasing different initiatives)
5. Donor Testimonials (2-3 featured stories)
6. Trust & Transparency (certifications, financials summary, partner logos)
7. Final CTA section (large, centered "Make a Difference Today")
8. Footer

**Donation Flow Page:**
- Progress indicator (3 steps: Amount → Details → Confirm)
- Single-column form layout, max-w-2xl
- Sticky sidebar (desktop) showing donation summary
- Large, friendly submit button: "Complete Donation"

**Confirmation Page:**
- Large success icon (green checkmark in circle)
- Personalized thank you message with donor name
- Donation details card (amount, date, receipt number)
- Share buttons: "Inspire others to donate"
- Secondary CTA: "Learn about our programs"

## Accessibility & UX

- High contrast text (WCAG AA minimum)
- Form labels always visible, never placeholder-only
- Keyboard navigation support for all interactive elements
- Screen reader-friendly donation process
- Loading states for payment processing (animated spinner + "Processing...")
- Clear error messages with recovery instructions
- Mobile-optimized touch targets (min 48px height)