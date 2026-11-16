import { useEffect, useState } from 'react'
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
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    let ignorar = false

    fetch('http://localhost:3000/categorias')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`)
        }

        return respuesta.json()
      })
      .then((datos) => {
        if (!ignorar) {
          setCategorias(datos)
        }
      })
      .catch((error) => {
        if (!ignorar) {
          console.error('Error al consultar categorías:', error)
        }
      })

    return () => {
      ignorar = true
    }
  }, [])

  return (
    <section>
      <h2>Categorías de libros</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.nombre}</li>
        ))}
      </ul>
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