// soldance/src/app/api/wiki/fullList.ts -> file path
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const filePath = path.resolve(process.cwd(), 'WikiDanceContent.json'); // I'm not sure if fullList was correctly getting/importing WikiDanceContent.json so I'm trying this way out.

export function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      console.log('File path:', filePath); // Test
      const danceData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      console.log('Dance data:', danceData); // Test
      return new Response(JSON.stringify(danceData), {
        status: 200,
      });
      res.status(200).json(danceData);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error); // Test
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}
