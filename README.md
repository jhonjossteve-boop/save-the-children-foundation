# Save the Children Foundation - Donation Website

A modern, responsive donation website built with React, Express, and Stripe integration.

## Features

- 🎨 Beautiful dark theme with light mode support
- 💳 Stripe payment integration for secure donations
- 📱 Fully responsive design
- ♿ Accessible components
- 🚀 Optimized for performance

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Payment**: Stripe
- **Deployment**: Vercel

## Deploy to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Complete Deployment Guide

📖 **See [DEPLOY_TO_VERCEL.md](./DEPLOY_TO_VERCEL.md)** for detailed step-by-step instructions including:
- Pushing code to GitHub
- Getting Stripe API keys
- Deploying to Vercel
- Setting up environment variables
- Adding custom domains
- Testing and going live

### Quick Start

1. Push your code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables:
   - `STRIPE_SECRET_KEY`
   - `VITE_STRIPE_PUBLIC_KEY`
4. Deploy!

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open**: http://localhost:5000

## Project Structure

```
├── api/                    # Vercel serverless functions
│   └── donations.ts       # Donation API endpoint
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and helpers
│   └── dist/              # Build output
├── server/                # Express backend (for local dev)
├── shared/                # Shared types and schemas
└── vercel.json            # Vercel configuration

```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `STRIPE_SECRET_KEY` | Stripe secret API key | Yes |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key | Yes |

## Payment Integration

This project uses Stripe for secure payment processing. To enable payments:

1. Sign up for a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add them to your Vercel environment variables
4. The donation form will automatically connect to Stripe

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: support@savethechildren.org

## License

MIT License - feel free to use this for your charitable organization!
