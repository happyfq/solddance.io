import danceData from '../../../../WikiDanceContent.json';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  const dance = req.nextUrl.searchParams.get('dance');

  return new Response(
    JSON.stringify(
      danceData.find(el => el.dance.toLowerCase().includes(dance))
    ),
    {
      status: 200,
    }
  );
}
