const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/character';

export default async function handler(request, response) {
  try {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(request.query || {})) {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else if (value !== undefined) {
        params.set(key, value);
      }
    }

    const apiResponse = await fetch(`${RICK_AND_MORTY_API_URL}?${params.toString()}`);
    const payload = await apiResponse.text();

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    response.status(apiResponse.status).send(payload);
  } catch {
    response.status(502).json({
      error: 'No fue posible conectar con la API de Rick and Morty.',
    });
  }
}
