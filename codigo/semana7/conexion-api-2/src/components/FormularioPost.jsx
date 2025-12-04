import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormularioPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const manejarEnvio = async (e) => {
    e.preventDefault();

    // Validación
    if (!title.trim() || !body.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const nuevoPost = {
      title,
      body,
      userId: 1
    };

    try {
      const respuesta = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoPost)
      });

      if (!respuesta.ok) {
        throw new Error('Error al crear el post');
      }

      // Limpiar campos
      setTitle('');
      setBody('');
      setError('');
      setMensaje("Post creado exitosamente ✔");

      // Redirigir después de 1.5 segundos
      setTimeout(() => {
        navigate("/posts");
      }, 1500);

    } catch (error) {
      console.error('Error:', error);
      setError("Hubo un error al crear el post.");
    }
  };

  return (
    <div>
      {/* Link para regresar */}
      <Link to="/posts" style={{ display: "block", marginBottom: "15px" }}>
        ← Regresar al listado
      </Link>

      <form onSubmit={manejarEnvio}>
        <h2>Crear Nuevo Post</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}

        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Contenido:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Crear Post</button>
      </form>
    </div>
  );
}

export default FormularioPost;
