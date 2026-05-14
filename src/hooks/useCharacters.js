import { useEffect, useState } from 'react';
import { getCharacters } from '../api.js';

export default function useCharacters({ page, species = '', name = '' }) {
  const [state, setState] = useState({
    characters: [],
    info: { count: 0, pages: 0 },
    loading: true,
    error: '',
  });

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    async function loadCharacters() {
      setState((current) => ({ ...current, loading: true, error: '' }));

      try {
        const data = await getCharacters({ page, species, name, signal: controller.signal });

        if (isActive) {
          setState({
            characters: data.results,
            info: data.info,
            loading: false,
            error: '',
          });
        }
      } catch (error) {
        if (isActive && error.name !== 'AbortError') {
          setState({
            characters: [],
            info: { count: 0, pages: 0 },
            loading: false,
            error: error.message,
          });
        }
      }
    }

    loadCharacters();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [page, species, name]);

  return state;
}
