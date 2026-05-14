import { NavLink } from 'react-router-dom';

export const SPECIES_OPTIONS = ['Human', 'Alien', 'Robot', 'Mythological Creature'];

export default function SpeciesFilter({ currentSpecies = '' }) {
  return (
    <div className="filter-panel" aria-label="Filtros por especie">
      <NavLink to="/species" className={!currentSpecies ? 'active-filter' : undefined}>
        Todas
      </NavLink>
      {SPECIES_OPTIONS.map((species) => (
        <NavLink
          key={species}
          to={`/species/${encodeURIComponent(species)}`}
          className={currentSpecies === species ? 'active-filter' : undefined}
        >
          {species}
        </NavLink>
      ))}
    </div>
  );
}
