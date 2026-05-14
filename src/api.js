const API_BASE_URL = '/api';

function buildNetworkErrorMessage() {
  return 'No se pudo conectar con la API. Verifica tu conexion e intenta nuevamente.';
}

async function parseApiResponse(response) {
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('application/json')) {
    throw new Error('La API devolvio una respuesta inesperada. Intenta recargar la pagina.');
  }

  return response.json();
}

export async function getCharacters({ page = 1, species = '', name = '', signal } = {}) {
  const params = new URLSearchParams({ page: String(page) });

  if (species) params.set('species', species);
  if (name) params.set('name', name);

  let response;

  try {
    response = await fetch(`${API_BASE_URL}/character?${params.toString()}`, { signal });
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    throw new Error(buildNetworkErrorMessage());
  }

  const data = await parseApiResponse(response);

  if (!response.ok) {
    if (response.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    }

    throw new Error(data?.error || 'No fue posible consultar los personajes.');
  }

  return data;
}

export async function getCharacterById(id) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}/character/${id}`);
  } catch {
    throw new Error(buildNetworkErrorMessage());
  }

  const data = await parseApiResponse(response);

  if (!response.ok) {
    throw new Error(data?.error || 'No fue posible consultar el detalle del personaje.');
  }

  return data;
}
