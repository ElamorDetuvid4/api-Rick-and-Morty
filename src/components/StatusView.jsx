export function Loader({ text = 'Abriendo portal de datos...' }) {
  return (
    <div className="status-card" role="status" aria-live="polite">
      <span className="loader-orb" />
      <h2>{text}</h2>
      <p>La API esta respondiendo desde otra dimension.</p>
    </div>
  );
}

export function ErrorView({ message, onRetry }) {
  return (
    <div className="status-card error-card" role="alert">
      <span className="status-icon">!</span>
      <h2>Interferencia detectada</h2>
      <p>{message}</p>
      {onRetry && (
        <button className="primary-button" type="button" onClick={onRetry}>
          Reintentar consulta
        </button>
      )}
    </div>
  );
}

export function EmptyView({ title = 'Sin coincidencias', text = 'No se encontraron datos para esta consulta.' }) {
  return (
    <div className="status-card">
      <span className="status-icon">0</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
