import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);
  const [libro, setLibro] = useState({
    nombre: "",
    autor: "",
    resena: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarError(false);
    setMostrarCard(false);

    const regex = /^\s+/g;
    if (
      regex.test(libro.nombre) ||
      libro.nombre.length < 3 ||
      libro.autor.trim().length < 6
    ) {
      setMostrarError(true);
    } else {
      setMostrarCard(true);
    }
  };

  return (
    <div className="App">
      <h1>Libro Favorito</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Libro: </label>
          <input
            type="text"
            onChange={(e) => {
              setMostrarCard(false);
              setLibro({ ...libro, nombre: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Autor: </label>
          <input
            type="text"
            onChange={(e) => {
              setMostrarCard(false);
              setLibro({ ...libro, autor: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Reseña: </label>
          <input
            type="text"
            onChange={(e) => {
              setMostrarCard(false);
              setLibro({ ...libro, resena: e.target.value });
            }}
          />
        </div>
        <button>Enviar</button>
      </form>
      {mostrarError && (
        <h3 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h3>
      )}

      {mostrarCard && (
        <Card libro={libro.nombre} autor={libro.autor} resena={libro.resena} />
      )}
    </div>
  );
}

export default App;
