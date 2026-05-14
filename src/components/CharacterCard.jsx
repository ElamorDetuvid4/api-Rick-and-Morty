import { Link } from 'react-router-dom';

const statusClass = {
  Alive: 'status-alive',
  Dead: 'status-dead',
  unknown: 'status-unknown',
};

export default function CharacterCard({ character }) {
  return (
    <article className="character-card">
      <Link to={`/character/${character.id}`} className="image-link" aria-label={`Ver a ${character.name}`}>
        <img src={character.image} alt={character.name} loading="lazy" />
      </Link>

      <div className="card-body">
        <span className={`status-pill ${statusClass[character.status] || 'status-unknown'}`}>
          {character.status}
        </span>
        <h2>{character.name}</h2>
        <dl>
          <div>
            <dt>Especie</dt>
            <dd>{character.species}</dd>
          </div>
          <div>
            <dt>Genero</dt>
            <dd>{character.gender}</dd>
          </div>
        </dl>
        <Link className="ghost-button" to={`/character/${character.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
