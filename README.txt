SAVE THE CHILDREN FOUNDATION - DONATION WEBSITE
HTML/CSS/JavaScript Version

==================================================
QUICK START
==================================================

Simply open "index.html" in any modern web browser.
No server or installation required!

==================================================
FEATURES
==================================================

✓ Dark theme design
✓ Responsive layout (works on mobile & desktop)
✓ Multiple payment methods:
  - Credit Card (Stripe integration ready)
  - Cryptocurrency (Bitcoin, Ethereum, USDT)
  - Zelle
  - Bank Transfer

✓ Interactive donation form with preset amounts
✓ Payment instruction modals
✓ Copy-to-clipboard functionality
✓ Smooth scrolling navigation
✓ Impact statistics section
✓ Programs showcase

==================================================
CUSTOMIZATION
==================================================

To customize the website:

1. Images: Replace the Unsplash URLs in the HTML with your own image URLs
   Search for: src="https://images.unsplash.com"

2. Colors: Edit the CSS variables in the <style> section
   Look for: :root { --background: ...; --primary: ...; }

3. Payment Details: Update wallet addresses, bank details, and contact info
   Search for: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
   Search for: donate@savethechildren.org

4. Content: Edit the text directly in the HTML
   All content is inline - no separate files needed

==================================================
STRIPE INTEGRATION
==================================================

To enable Stripe payment processing:

1. Sign up at stripe.com
2. Get your Stripe Publishable Key
3. Add the Stripe.js library:
   <script src="https://js.stripe.com/v3/"></script>
4. Replace the alert() in the "Proceed to Secure Checkout" button
   with actual Stripe checkout code

==================================================
DEPLOYMENT
==================================================

You can host this on:
- Any web hosting service (upload index.html)
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Your own server

Just upload the index.html file and you're done!

==================================================
BROWSER SUPPORT
==================================================

Works on all modern browsers:
✓ Chrome/Edge
✓ Firefox
✓ Safari
✓ Opera

==================================================
FILE STRUCTURE
==================================================

standalone/
  ├── index.html (Complete website - 100% standalone)
  └── README.txt (This file)

Everything is contained in a single HTML file!

==================================================
SUPPORT
==================================================

This is a static HTML/CSS/JS website.
No backend processing is included.

For actual payment processing, you'll need to:
1. Integrate Stripe API for credit cards
2. Set up server-side verification for crypto/bank transfers
3. Add email notification system

==================================================
