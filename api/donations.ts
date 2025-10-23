import type { VercelRequest, VercelResponse } from '@vercel/node';

// Serverless function for handling donation submissions
export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { amount, donorName, donorEmail, message } = req.body;

      // Basic validation
      if (!amount || !donorName || !donorEmail) {
        return res.status(400).json({ 
          error: 'Missing required fields: amount, donorName, donorEmail' 
        });
      }

      // Here you would integrate with Stripe
      // For now, return success
      const donation = {
        id: `don_${Date.now()}`,
        amount,
        donorName,
        donorEmail,
        message: message || null,
        createdAt: new Date().toISOString(),
      };

      return res.status(201).json(donation);
    } catch (error) {
      console.error('Donation error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'GET') {
    // Return donation stats or list
    return res.status(200).json({ 
      totalDonations: 2500000,
      childrenHelped: 2500000 
    });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
