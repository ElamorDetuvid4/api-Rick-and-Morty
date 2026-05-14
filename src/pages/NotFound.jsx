import { Link } from 'react-router-dom';
import { EmptyView } from '../components/StatusView.jsx';

export default function NotFound() {
  return (
    <section className="not-found-page">
      <EmptyView
        title="Ruta no encontrada"
        text="La coordenada solicitada no existe dentro de esta aplicacion."
      />
      <Link className="primary-button" to="/">
        Regresar al inicio
      </Link>
    </section>
  );
}
