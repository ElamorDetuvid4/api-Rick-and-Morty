export default function SearchBar({ value, onChange, placeholder = 'Buscar por nombre...' }) {
  return (
    <label className="search-control">
      <span>Busqueda</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
