import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterGrid from '../components/CharacterGrid.jsx';
import Hero from '../components/Hero.jsx';
import Pagination from '../components/Pagination.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SpeciesFilter from '../components/SpeciesFilter.jsx';
import { EmptyView, ErrorView, Loader } from '../components/StatusView.jsx';
import useCharacters from '../hooks/useCharacters.js';

export default function Species() {
  const { speciesName = '' } = useParams();
  const currentSpecies = decodeURIComponent(speciesName);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const query = useMemo(() => search.trim(), [search]);
  const { characters, info, loading, error } = useCharacters({
    page,
    species: currentSpecies,
    name: query,
  });

  function handleSearch(value) {
    setSearch(value);
    setPage(1);
  }

  return (
    <>
      <Hero
        eyebrow="Rutas dinamicas con react-router-dom"
        title={currentSpecies ? `Especie: ${currentSpecies}` : 'Filtro por especie'}
        description="Cambia entre especies solicitadas en el PDF y combina el filtro con busqueda por nombre usando parametros reales de la API."
        stats={[
          { value: currentSpecies || 'Todas', label: 'Especie' },
          { value: info.count || '0', label: 'Coincidencias' },
          { value: page, label: 'Pagina actual' },
        ]}
      />

      <section className="toolbar stacked-toolbar">
        <SpeciesFilter currentSpecies={currentSpecies} />
        <SearchBar value={search} onChange={handleSearch} placeholder="Buscar dentro de la especie..." />
      </section>

      {loading && <Loader text="Filtrando especie..." />}
      {!loading && error && <ErrorView message={error} onRetry={() => setPage(1)} />}
      {!loading && !error && characters.length === 0 && (
        <EmptyView
          title="No hay habitantes registrados"
          text="La especie o busqueda seleccionada no devolvio personajes en la API."
        />
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
