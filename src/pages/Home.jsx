import { useMemo, useState } from 'react';
import CharacterGrid from '../components/CharacterGrid.jsx';
import Hero from '../components/Hero.jsx';
import Pagination from '../components/Pagination.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { EmptyView, ErrorView, Loader } from '../components/StatusView.jsx';
import useCharacters from '../hooks/useCharacters.js';

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const query = useMemo(() => search.trim(), [search]);
  const { characters, info, loading, error } = useCharacters({ page, name: query });

  function handleSearch(value) {
    setSearch(value);
    setPage(1);
  }

  return (
    <>
      <Hero
        eyebrow="Consumo REST con React"
        title="Explorador interdimensional de personajes"
        description="Consulta personajes en tiempo real desde la API publica de Rick and Morty, con rutas, busqueda, paginacion y tarjetas dinamicas."
        stats={[
          { value: info.count || '---', label: 'Registros' },
          { value: info.pages || '---', label: 'Paginas' },
          { value: 'fetch', label: 'HTTP' },
        ]}
      />

      <section className="toolbar">
        <SearchBar value={search} onChange={handleSearch} />
      </section>

      {loading && <Loader />}
      {!loading && error && <ErrorView message={error} onRetry={() => setPage(1)} />}
      {!loading && !error && characters.length === 0 && (
        <EmptyView text="Prueba con otro nombre o limpia la busqueda." />
      )}
      {!loading && !error && characters.length > 0 && (
        <>
          <CharacterGrid characters={characters} />
          <Pagination page={page} totalPages={info.pages} onPageChange={setPage} />
        </>
      )}
    </>
  );
}
