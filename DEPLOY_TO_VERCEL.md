# Deploy to Vercel - Step by Step Guide

This guide will help you deploy the Save the Children Foundation donation website to Vercel.

## Prerequisites

1. A [GitHub](https://github.com) account
2. A [Vercel](https://vercel.com) account (free)
3. [Stripe](https://stripe.com) account for payment processing

## Step 1: Push Your Code to GitHub

If you're working in Replit:

1. Click the "Version Control" tab in Replit
2. Connect to GitHub if you haven't already
3. Create a new repository or push to an existing one
4. Commit and push all your changes

Alternatively, download the code and push it manually:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 2: Get Your Stripe API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Sign in or create an account
3. Copy your **Publishable key** (starts with `pk_`)
4. Copy your **Secret key** (starts with `sk_`)
   - ⚠️ **Important**: Use test keys for testing (they have `test` in them)
   - Use live keys only when you're ready for real donations

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Vercel will auto-detect the configuration ✅
6. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Step 4: Add Environment Variables

After deployment (or during the deploy process):

1. Go to your Vercel project dashboard
2. Click **"Settings"**
3. Click **"Environment Variables"**
4. Add the following variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `STRIPE_SECRET_KEY` | `sk_test_...` or `sk_live_...` | Your Stripe secret key |
| `VITE_STRIPE_PUBLIC_KEY` | `pk_test_...` or `pk_live_...` | Your Stripe publishable key |

5. Click **"Save"**
6. Redeploy the project for changes to take effect

## Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `your-project.vercel.app`)
2. Test the donation form with Stripe test card:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

## Step 6: Add Custom Domain (Optional)

1. In your Vercel project settings
2. Click **"Domains"**
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (usually 5-15 minutes)

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Vercel dashboard

### Environment Variables Not Working

- Make sure you added them in Vercel dashboard
- Redeploy after adding new environment variables
- Frontend variables must start with `VITE_`

### Stripe Integration Not Working

- Verify your API keys are correct
- Check browser console for errors
- Ensure you're using matching key pairs (both test or both live)

### API Routes Not Working

- Check the `/api` folder exists
- Verify `vercel.json` configuration
- Check function logs in Vercel dashboard

## Going Live

When you're ready to accept real donations:

1. Replace test Stripe keys with live keys
2. Update environment variables in Vercel
3. Test thoroughly with small real donations
4. Set up Stripe webhooks for payment confirmations
5. Configure email notifications
6. Add proper error tracking (e.g., Sentry)

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Contact Support](mailto:support@yourorg.com)

## Cost

- **Vercel Hobby Plan**: FREE
  - Unlimited deployments
  - 100GB bandwidth/month
  - Serverless function executions included
  
- **Stripe Fees**: 
  - 2.9% + $0.30 per transaction
  - No monthly fees

---

**🎉 Congratulations!** Your donation website is now live on Vercel!
