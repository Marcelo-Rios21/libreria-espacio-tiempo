import { Link, Routes, Route } from 'react-router'
import './App.css'

function Inicio() {
  return (
    <section>
      <h2>Bienvenido a nuestra librería</h2>
      <p>
        Explora las distintas categorías de libros disponibles.
      </p>
    </section>
  )
}

function Categorias() {
  return (
    <section>
      <h2>Categorías de libros</h2>
      <p>
        Aquí se mostrarán las categorías obtenidas desde la API REST.
      </p>
    </section>
  )
}

function App() {
  return (
    <>
      <header className="encabezado">
        <h1>Librería Espacio Tiempo</h1>

        <nav aria-label="Navegación principal">
          <Link to="/">Inicio</Link>
          <Link to="/categorias">Categorías</Link>
        </nav>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </main>
    </>
  )
}

export default App