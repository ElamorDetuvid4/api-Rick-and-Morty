# PortalVerse API Explorer

Aplicacion web en React que consume la API publica de Rick and Morty para mostrar personajes, filtrar por especie, navegar con `react-router-dom` y manejar estados de carga, errores y resultados vacios.

## Tecnologias

- React JS
- Vite
- JavaScript ES6+
- react-router-dom
- CSS responsive con animaciones

## Como ejecutar en Visual Studio Code

1. Abre esta carpeta en Visual Studio Code:
   `C:\Users\USER\Desktop\Urquina api_rick_morki`
2. Abre la terminal integrada de VS Code.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el servidor local:

   ```bash
   npm run dev
   ```

5. Abre la URL que muestra Vite, normalmente:
   `http://127.0.0.1:5173`

> Este proyecto usa React y rutas internas, por eso se recomienda ejecutarlo con Vite. Live Server es mejor para HTML/CSS/JS plano, pero no para esta SPA con React Router. Ademas, Vite activa un proxy local `/api` que reenvia las consultas a `https://rickandmortyapi.com/api` y evita fallos de red del navegador.

## Funcionalidades incluidas

- Listado de personajes desde `https://rickandmortyapi.com/api/character`
- Tarjetas con imagen, nombre, especie, estado y genero
- Navegacion principal con React Router
- Filtro por especie: Human, Alien, Robot y Mythological Creature
- Busqueda por nombre
- Paginacion
- Vista de detalle individual
- Estado de carga
- Manejo de errores
- Vista para datos vacios
- Pagina 404
- Diseno responsive futurista
