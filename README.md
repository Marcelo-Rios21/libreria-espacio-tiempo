# Librería Espacio Tiempo

Aplicación académica desarrollada con React y JavaScript para explorar categorías de libros mediante una API REST mock.

## Tecnologías

- React
- React Router
- Vite
- JSON Server
- HTML y CSS

## Instalación

Desde la carpeta del proyecto:

```powershell
npm install
```

## Ejecución

Abrir dos terminales en la carpeta del proyecto.

Terminal 1 - Backend REST mock:

```powershell
npm run api
```

API disponible en:

http://localhost:3000/categorias

Terminal 2 - Frontend React:

```powershell
npm run dev
```

Abrir en el navegador:

http://localhost:5173/

La página Categorías obtiene los datos desde la API REST mock.

## Verificación

```powershell
npm run lint
npm run build
```