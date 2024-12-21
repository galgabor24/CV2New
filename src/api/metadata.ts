import { getMetadata } from 'metadata-scraper';

export default async function handler(req: Request) {
  try {
    const url = new URL(req.url).searchParams.get('url');
    if (!url) {
      return new Response('URL parameter is required', { status: 400 });
    }

    const metadata = await getMetadata(url);
    
    return new Response(JSON.stringify({
      title: metadata.title || '',
      description: metadata.description || '',
      image: metadata.image || '',
      url: metadata.url || url
    }), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch metadata' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}