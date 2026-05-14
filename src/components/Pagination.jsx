export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination" aria-label="Paginacion">
      <button type="button" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        Anterior
      </button>
      <span>
        Pagina <strong>{page}</strong> de <strong>{totalPages}</strong>
      </span>
      <button type="button" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
        Siguiente
      </button>
    </div>
  );
}
