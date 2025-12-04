import { useState } from 'react';
import { Link } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

function ListaPosts() {

  const endpoint = '/api/posts';
  const [page, setPage] = useState(1);

  // Límite por página
  const limit = 5;

  // Llamada a la API con paginación
  const { data, loading: cargando, error } = useFetch(`${endpoint}?_page=${page}&_limit=${limit}`);

  // JSON Server devuelve un array directamente
  const posts = data?.data || [];

  if (cargando) {
    return (
      <div className="cargando">
        <div className="spinner"></div>
        <p>Cargando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>❌ Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>📝 Lista de Posts</h2>

      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <Link to={`/posts/${post.id}`} className="post-link">
              Ver Detalle
            </Link>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ← Anterior
        </button>

        <span>Página {page}</span>

        <button
          onClick={() => setPage(page + 1)}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}

export default ListaPosts;
