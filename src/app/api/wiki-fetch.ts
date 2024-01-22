import path from 'path';
import { readFile } from 'fs/promises';

const filePath = `${path.join(process.cwd())}/WikiDanceContent.json`;

interface Dance {
  dance: string;
  era: string;
  origin: string;
  description: string;
  link: string;
  pioneers: string;
  otherCategories: string;
}

const getDance = (searchTerm: string, content: Dance[]): Dance | null => {
  for (const item of content) {
    if (item.dance.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  }
  return null;
};

const dancesByCategory = (
  content: Dance[]
): { [category: string]: Dance[] } => {
  const orderedByCategory: { [category: string]: Dance[] } = {};

  for (const item of content) {
    const otherCats = item.otherCategories.split(',');
    otherCats.push(item.era);

    for (const otherCat of otherCats) {
      if (!orderedByCategory[otherCat]) {
        orderedByCategory[otherCat] = [item];
      } else {
        orderedByCategory[otherCat].push(item);
      }
    }
  }

  return orderedByCategory;
};

const searchResults = (content: Dance[], keywords: string[]): Dance[] => {
  const results: { [name: string]: number } = {};

  for (let i = 0; i < content.length; i++) {
    for (let j = 0; j < keywords.length; j++) {
      for (const key in content[i]) {
        if (content[i][key] != null) {
          if (
            content[i][key].toLowerCase().includes(keywords[j].toLowerCase())
          ) {
            if (!results[content[i].dance]) {
              results[content[i].dance] = 1;
            } else {
              results[content[i].dance]++;
            }
          }
        }
      }
    }
  }

  const jsonArray: Dance[] = [];

  for (const danceName in results) {
    const dance = getDance(danceName, content);
    if (dance) {
      dance['relevance'] = results[danceName];
      jsonArray.push(dance);
    }
  }

  return jsonArray;
};

const generateResponse = (message: Object, status: number) =>
  new Response(JSON.stringify(message), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export async function GET(req: Request) {
  const queryParams = new URLSearchParams(req.url.split('?')[1]);
  const filter = queryParams.get('filter');
  const keywords = queryParams.get('keywords');

  const jsonData = await readFile(filePath, 'utf-8');
  let data = JSON.parse(jsonData);

  if (filter === 'name') {
    if (!keywords) return generateResponse({ error: 'No keywords' }, 404);
    data = getDance(keywords, data);
  } else if (filter === 'category') {
    data = dancesByCategory(data);
  } else if (filter === 'keywords') {
    if (!keywords) return generateResponse({ error: 'No keywords' }, 404);
    data = searchResults(data, keywords.split(','));
  }

  if (!data) return generateResponse({ error: 'No dances found' }, 404);
  return generateResponse(data, 200);
}

export { getDance, dancesByCategory, searchResults };  export type { Dance };