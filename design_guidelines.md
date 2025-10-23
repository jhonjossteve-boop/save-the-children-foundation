# Design Guidelines: Dark-Themed Donation Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from leading donation platforms (Charity: Water, GoFundMe) combined with modern dark UI aesthetics to create an emotionally compelling, trust-building experience that drives donations.

## Core Design Principles
- **Emotional Connection**: Use imagery and storytelling to create immediate impact
- **Trust & Transparency**: Clear mission, statistics, and credibility indicators
- **Conversion-Focused**: Strategic CTAs and frictionless donation flow
- **Dark Elegance**: Sophisticated dark theme that feels premium yet approachable

---

## Color Palette

### Dark Mode Colors
- **Background Primary**: 10 8% 8% (deep charcoal)
- **Background Secondary**: 10 6% 12% (elevated surfaces)
- **Background Accent**: 10 5% 16% (cards, containers)
- **Primary Brand**: 160 65% 45% (warm teal - hope and growth)
- **Primary Hover**: 160 65% 38%
- **Accent/CTA**: 25 85% 55% (vibrant coral - urgency and warmth)
- **Accent Hover**: 25 85% 48%
- **Text Primary**: 0 0% 95% (high contrast white)
- **Text Secondary**: 0 0% 70% (muted for descriptions)
- **Success/Impact**: 142 70% 45% (positive green for metrics)
- **Border Subtle**: 10 5% 20%

---

## Typography

**Font Stack**: 
- Primary: 'Inter' (Google Fonts) - clean, modern, excellent readability
- Display: 'Poppins' (Google Fonts) - headers, impactful statements

**Hierarchy**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold (Poppins)
- Section Headers: text-3xl md:text-4xl font-semibold (Poppins)
- Subheadings: text-xl md:text-2xl font-medium (Inter)
- Body: text-base md:text-lg leading-relaxed (Inter)
- Stats/Numbers: text-4xl md:text-5xl font-bold (Poppins)
- Captions: text-sm text-secondary

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy areas: max-w-4xl for readability

**Vertical Rhythm**: py-16 md:py-24 lg:py-32 for major sections

---

## Page Structure & Components

### 1. Hero Section (80vh minimum)
- **Layout**: Full-width with background image overlay (darkened for text readability)
- **Content**: Centered layout with compelling headline, subheadline, primary donation CTA, and trust indicator
- **Elements**: Large donation button (accent color), secondary "Learn More" button (outline with blur backdrop), small trust text ("Join 50,000+ supporters")
- **Background**: Large hero image showing impact/beneficiaries with dark gradient overlay

### 2. Quick Donation Panel
- **Layout**: Sticky or prominently placed 2-column grid (md:grid-cols-2)
- **Left Column**: Pre-set amount buttons ($25, $50, $100, $250, Custom) in grid-cols-2 md:grid-cols-3
- **Right Column**: Impact preview ("Your $50 provides...")
- **Design**: Elevated card (background-secondary) with border-subtle

### 3. Impact Statistics Section
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-3)
- **Content**: Large numbers with labels ("$2.5M Raised", "15K+ Lives Changed", "230 Projects Funded")
- **Design**: Success color for numbers, subtle dividers, centered text

### 4. Mission & Story Section
- **Layout**: 2-column alternating (image + text, text + image pattern)
- **Content**: Organization mission, founding story, current initiatives
- **Images**: 2-3 impactful images showing work/beneficiaries
- **Design**: Asymmetric layout with generous spacing

### 5. Impact Showcase
- **Layout**: 3-column grid of impact cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Content**: Each card shows specific impact story with image, title, description, and outcome metric
- **Design**: Hover effects with subtle scale and glow

### 6. Testimonials/Social Proof
- **Layout**: 2-column grid (md:grid-cols-2) or horizontal scroll on mobile
- **Content**: Donor testimonials with photos, quotes, and attribution
- **Design**: Cards with background-accent, subtle borders

### 7. Secondary CTA Section
- **Layout**: Full-width with centered content
- **Content**: Compelling headline, paragraph, large CTA button, alternative actions (recurring donations, volunteer)
- **Design**: Background-secondary with subtle pattern or gradient

### 8. Footer (Enhanced)
- **Layout**: 4-column grid collapsing to single on mobile
- **Content**: Quick links, contact info, social media, newsletter signup, trust badges (charity navigator, SSL)
- **Design**: Background-primary with border-top-subtle

---

## Component Library

**Buttons**:
- Primary: Accent color background, white text, px-8 py-4, rounded-lg
- Secondary: Border (border-2) with backdrop-blur, text-white
- Sizes: Small (px-4 py-2), Medium (px-6 py-3), Large (px-8 py-4)

**Cards**:
- Background-secondary/accent, border-subtle
- Rounded-xl, overflow-hidden for images
- p-6 md:p-8 for content padding

**Input Fields** (Donation Form):
- Background-primary with border-subtle
- Focus: border-primary with ring effect
- Consistent with dark theme

**Icons**: Heroicons (outline style) via CDN for consistency

---

## Images

### Hero Section
- **Large hero image**: Full-width background showing donation impact (people being helped, community work, or beneficiaries)
- **Treatment**: Dark overlay (40-50% opacity) for text legibility

### Supporting Images (3-4 total)
- **Mission section**: 2 images showing organization work/team
- **Impact cards**: Small images (aspect-ratio-square or 16:9) for each impact story
- **Testimonials**: Circular donor/supporter photos

### Image Style
- High-quality, authentic photography
- Warm color grading to complement dark theme
- Consistent aspect ratios (16:9 for landscape, 1:1 for portraits)

---

## Animations

**Minimal & Purposeful**:
- Fade-in on scroll for sections (subtle, 0.3s duration)
- Hover scale (1.02-1.05) on cards and buttons
- Number count-up animation for statistics (on viewport entry)
- NO parallax, NO floating elements, NO complex scroll-jacking

---

## Accessibility & Dark Mode

- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- All form inputs styled consistently with dark backgrounds
- Focus indicators visible on all interactive elements
- Ensure text remains readable on all background treatments

This design creates an emotionally resonant, trust-building donation experience with clear conversion paths and impactful storytelling—all within a sophisticated dark aesthetic.