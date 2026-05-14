import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Ir al inicio">
        <span className="brand-orbit" />
        <span>
          <strong>PortalVerse</strong>
          <small>API Explorer</small>
        </span>
      </NavLink>

      <nav className="nav-panel" aria-label="Menu principal">
        <NavLink to="/" end>
          Todos
        </NavLink>
        <NavLink to="/species">
          Filtrar especie
        </NavLink>
      </nav>
    </header>
  );
}
