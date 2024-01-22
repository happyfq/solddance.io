import danceData from '../../../../../WikiDanceContent.json';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  try {
    const era = req.nextUrl.searchParams.get('era'); 
    const filteredDances = danceData.filter((el) => el.era === era);

    return new Response(JSON.stringify(filteredDances), {
      status: 200,
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
    });
  }
}
