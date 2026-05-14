const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/character';

export default async function handler(request, response) {
  const { id } = request.query;

  try {
    const apiResponse = await fetch(`${RICK_AND_MORTY_API_URL}/${encodeURIComponent(id)}`);
    const payload = await apiResponse.text();

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    response.status(apiResponse.status).send(payload);
  } catch {
    response.status(502).json({
      error: 'No fue posible consultar el detalle del personaje.',
    });
  }
}
