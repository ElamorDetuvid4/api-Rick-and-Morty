export default function Hero({ eyebrow, title, description, stats = [] }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="hero-console" aria-label="Estado del sistema">
        <span className="console-pulse" />
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <small>{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
