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
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [intento, setIntento] = useState(0)

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
      .catch((errorPeticion) => {
        if (!ignorar) {
          console.error('Error al consultar categorías:', errorPeticion)
          setError(true)
        }
      })
      .finally(() => {
        if (!ignorar) {
          setCargando(false)
        }
      })

    return () => {
      ignorar = true
    }
  }, [intento])

  function reintentar() {
    setError(false)
    setCargando(true)
    setIntento((anterior) => anterior + 1)
  }

  return (
    <section>
      <h2>Categorías de libros</h2>

      {cargando ? (
        <div className="estado-carga" role="status">
          <span className="indicador-carga" aria-hidden="true"></span>
          <span>Cargando categorías...</span>
        </div>
      ) : error ? (
        <div role="alert">
          <p className="mensaje-error">
            No fue posible cargar las categorías.
            Verifica que la API esté funcionando.
          </p>
          <button
            type="button"
            className="boton-reintentar"
            onClick={reintentar}
          >
            Reintentar
          </button>
        </div>
      ) : categorias.length === 0 ? (
        <p>No hay categorías disponibles.</p>
      ) : (
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>{categoria.nombre}</li>
          ))}
        </ul>
      )}
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