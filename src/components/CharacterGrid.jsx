import CharacterCard from './CharacterCard.jsx';

export default function CharacterGrid({ characters }) {
  return (
    <section className="character-grid" aria-label="Listado de personajes">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}
