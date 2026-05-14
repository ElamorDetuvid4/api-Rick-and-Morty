const API_BASE_URL = '/api';

function buildNetworkErrorMessage() {
  return 'No se pudo conectar con la API. Verifica tu internet y ejecuta el proyecto con npm run dev para activar el proxy local.';
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

  const data = await response.json();

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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || 'No fue posible consultar el detalle del personaje.');
  }

  return data;
}
