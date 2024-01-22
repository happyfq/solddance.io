import danceData from '../../../../../WikiDanceContent.json';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Get the search term from the query parameter and make it lowercase
  const danceQuery = req.nextUrl.searchParams.get('query');

  const lowerCaseQuery = danceQuery.toLowerCase();

  if (!lowerCaseQuery) {
    // No query or an empty query was provided, return a 400 (Bad Request) response
    return res.status(400).json({ error: 'Invalid search query' });
  }

  // Perform a case-insensitive search for dances that match the query
  const matchingDances = danceData.filter(
    dance =>
      dance.dance.toLowerCase().includes(lowerCaseQuery) ||
      dance.era.toLowerCase().includes(lowerCaseQuery) ||
      dance.description.toLowerCase().includes(lowerCaseQuery) ||
      dance.otherCategories.toLowerCase().includes(lowerCaseQuery)
  );

  // Return the matching dances in a JSON array
  return new Response(JSON.stringify(matchingDances), {
    status: 200,
  });
}
