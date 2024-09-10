import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Utils/routes";
import { useContextGlobal } from "../Context/Context"; // Asegúrate de tener la ruta correcta

// Definimos el objeto buttonMode para los estilos en línea del botón
const buttonMode = {
  backgroundColor: "transparent", // Quita el fondo
  border: "none", // Quita los bordes
  fontSize: "2rem", // Ajusta el tamaño del icono
  cursor: "pointer", // Cambia el cursor para que se vea como interactivo
  outline: "none", // Evita el borde de enfoque en algunos navegadores
  padding: "0", // Quita el padding para que el icono no tenga espacio extra
  transition: "transform 0.2s ease-in-out", // Añade una transición suave
};


// Este componente será estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { state, dispatch } = useContextGlobal(); // Obtiene el estado y el dispatch del contexto

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" }); // Alterna el tema
  };

  return (
    <nav
      className={`navbar uppercase-text ${
        state.theme === "light" ? "light-theme" : "dark-theme"
      }`}
    >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* Liks correspondientes a las rutas definidas */}
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>

      {/* Botón para cambiar de tema */}
      <button
        onClick={toggleTheme}
        style={buttonMode}
        onMouseOver={(e) => (e.target.style.transform = "scale(2.2)")} // Agrega efecto hover en línea
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")} // Restaura el tamaño al quitar el hover
      >
        {state.theme === "light" ? "🌔" : "🌒"}
      </button>
    </nav>
  );
};

export default Navbar;
