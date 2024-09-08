import React from "react";
import { routes } from "../Utils/routes";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="glowing-text" style={{ color: 'rgb(255, 255, 255)' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      {/* Agregar un link de retorno a la a la home */}
      <Link to={routes.home}><a>Regresar</a></Link>
    </div>
  );
};

export default NotFound;
