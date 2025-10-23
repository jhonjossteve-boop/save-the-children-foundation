# Design Guidelines: KindHeartDonations

## Design Approach
**Reference-Based:** Drawing inspiration from modern charity platforms (charity: water, UNICEF) combined with Stripe's payment UI patterns and Linear's dark mode sophistication. Focus on trust-building, emotional connection, and seamless donation experience.

## Core Design Elements

### A. Color Palette

**Dark Mode Foundation:**
- Background Primary: 220 15% 8% (deep navy-black)
- Background Secondary: 220 13% 12% (elevated surfaces)
- Background Tertiary: 220 12% 16% (cards, inputs)

**Brand Colors:**
- Primary (Hope Blue): 210 95% 58% (trust, compassion)
- Primary Hover: 210 95% 65%
- Success (Impact Green): 145 65% 52% (positive outcomes)
- Accent (Warmth Coral): 15 85% 62% (emotional connection, CTAs)

**Text Colors:**
- Primary Text: 220 8% 95%
- Secondary Text: 220 6% 70%
- Muted Text: 220 5% 50%

### B. Typography
- Primary Font: Inter (Google Fonts) - clean, modern, accessible
- Accent Font: DM Sans (Google Fonts) - headings, impact statistics
- Font Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Scale: text-sm (14px), text-base (16px), text-lg (18px), text-xl (20px), text-2xl (24px), text-4xl (36px), text-5xl (48px), text-6xl (60px)

### C. Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section Padding: py-20 md:py-32
- Card Padding: p-6 md:p-8
- Component Gaps: gap-6 md:gap-8
- Container Max-Width: max-w-7xl

### D. Component Library

**Navigation:**
- Fixed header with blur backdrop (backdrop-blur-xl)
- Logo left, donation CTA button right
- Transparent on hero, solid background on scroll
- Mobile: Hamburger menu with slide-in drawer

**Hero Section (80vh):**
- Two-column layout: 60/40 split
- Left: Compelling headline, mission statement, primary "Donate Now" CTA
- Right: High-impact hero image showing children helped
- Trust indicators below: "100% of donations reach children" badge, impact counter

**Donation Form Section:**
- Card-based design with subtle border (border-white/10)
- Preset amounts: $25, $50, $100, $250, custom input
- Active amount: highlighted with primary blue background
- Payment method tabs: Card (Stripe), Crypto, Zelle, Bank Transfer
- Each tab reveals specific payment UI
- Recurring donation toggle (one-time/monthly)

**Impact Statistics Section (3-column grid):**
- Large numbers with animations (count-up effect)
- "125K+ Children Helped", "$2.5M+ Raised", "45 Countries Served"
- Icon + Number + Label format
- Cards with subtle glow effect on hover

**How It Helps Section (2-column):**
- Left: Image of program in action
- Right: Breakdown cards showing donation allocation
- "$50 = School supplies for 5 children"
- "$100 = Healthcare for 10 children"
- Transparent breakdown builds trust

**Payment Method Details Cards:**
- **Crypto:** QR codes for BTC/ETH/USDT, wallet addresses, copy button
- **Zelle:** Organization Zelle email, step-by-step instructions
- **Bank Transfer:** Account details, routing number, SWIFT code
- Each with clear "How to Send" instructions

**Testimonials Section (3-column cards):**
- Donor quotes with photos
- Name, location, donation frequency
- Subtle card elevation with border

**Footer:**
- 4-column layout: About, Quick Links, Contact, Newsletter signup
- Social media icons (white/60 opacity)
- Tax ID and charity registration info
- Trust badges (GuideStar, Charity Navigator)

### E. UI Patterns

**Buttons:**
- Primary CTA: bg-accent rounded-lg px-8 py-4 text-lg font-semibold
- Secondary: border-2 border-primary text-primary backdrop-blur-md (for hero overlay)
- Ghost: text-primary hover:bg-primary/10

**Form Inputs:**
- Background: bg-background-tertiary
- Border: border border-white/10 focus:border-primary
- Rounded: rounded-lg
- Padding: px-4 py-3

**Cards:**
- Background: bg-background-secondary
- Border: border border-white/5
- Rounded: rounded-xl
- Shadow: shadow-lg shadow-black/20
- Hover: border-white/10 transition

**Icons:**
- Library: Heroicons (outline and solid variants via CDN)
- Size: w-6 h-6 for inline, w-12 h-12 for feature icons
- Color: text-primary or text-white/60

### F. Animations
**Use Sparingly:**
- Hero CTA button: subtle scale on hover (scale-105)
- Donation amounts: smooth background transition
- Impact numbers: count-up animation on scroll into view
- Cards: gentle hover lift (translate-y-1)
- NO complex scroll animations, parallax, or autoplay elements

## Page Structure (7 Sections)

1. **Hero** - Emotional connection + primary CTA
2. **Donation Form** - Interactive amount selection + payment methods
3. **Impact Stats** - Trust-building metrics
4. **How It Helps** - Transparency in fund allocation
5. **Programs** - 3-column grid of active initiatives
6. **Testimonials** - Social proof from donors
7. **Footer** - Trust indicators + newsletter + links

## Images

**Hero Image (Required):**
- Large hero image (right side, 40% width on desktop)
- Shows children being helped - education, healthcare, or food programs
- Natural, authentic photography (not stock-looking)
- Slight overlay gradient for text readability if needed

**Programs Section (3 images):**
- Each program card includes representative image
- Education, Healthcare, Emergency Relief programs
- Images show real impact, beneficiaries

**How It Helps Section (1 image):**
- Supporting image showing program in action
- Complements the allocation breakdown

## Accessibility & Interaction
- All interactive elements have clear focus states (ring-2 ring-primary)
- Form inputs show validation states (green border for valid, red for errors)
- Payment method tabs have active state (bg-primary/20 border-primary)
- Maintain WCAG AA contrast ratios (light text on dark backgrounds)
- All images have descriptive alt text for impact

## Key Design Principles
1. **Trust First:** Transparency in every element (donation breakdown, charity registration, testimonials)
2. **Emotional Connection:** Hero imagery and testimonials create empathy
3. **Frictionless Giving:** Clear CTAs, simple forms, multiple payment options
4. **Dark Mode Sophistication:** Subtle gradients, soft shadows, refined borders
5. **Mobile-First:** Stack columns, expand touch targets, simplify navigation