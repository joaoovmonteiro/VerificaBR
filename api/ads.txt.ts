import type { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const adsTxtPath = path.resolve(process.cwd(), 'ads.txt');
    
    if (fs.existsSync(adsTxtPath)) {
      res.setHeader('Content-Type', 'text/plain');
      const content = fs.readFileSync(adsTxtPath, 'utf-8');
      res.send(content);
    } else {
      res.status(404).send('ads.txt not found');
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
