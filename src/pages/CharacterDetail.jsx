import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharacterById } from '../api.js';
import { ErrorView, Loader } from '../components/StatusView.jsx';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isActive = true;

    async function loadCharacter() {
      setLoading(true);
      setError('');

      try {
        const data = await getCharacterById(id);
        if (isActive) setCharacter(data);
      } catch (error) {
        if (isActive) setError(error.message);
      } finally {
        if (isActive) setLoading(false);
      }
    }

    loadCharacter();

    return () => {
      isActive = false;
    };
  }, [id]);

  if (loading) return <Loader text="Analizando registro individual..." />;
  if (error) return <ErrorView message={error} />;

  return (
    <section className="detail-layout">
      <div className="detail-image-wrap">
        <img src={character.image} alt={character.name} />
      </div>

      <article className="detail-panel">
        <Link className="back-link" to="/">
          Volver al listado
        </Link>
        <p className="eyebrow">Registro #{character.id}</p>
        <h1>{character.name}</h1>
        <div className="detail-grid">
          <DetailItem label="Estado" value={character.status} />
          <DetailItem label="Especie" value={character.species} />
          <DetailItem label="Genero" value={character.gender} />
          <DetailItem label="Origen" value={character.origin.name} />
          <DetailItem label="Ubicacion" value={character.location.name} />
          <DetailItem label="Episodios" value={character.episode.length} />
        </div>
      </article>
    </section>
  );
}

function DetailItem({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
