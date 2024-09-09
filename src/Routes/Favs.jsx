import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  const { favs } = state;

  return (
    <>
      <h2>Dentists Favs</h2>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {/* Renderizamos una Card por cada favorito */}
        {favs.length > 0 ? (
          favs.map((fav) => <Card key={fav.id} recipe={fav} isInFavsPage={true}/>)
        ) : (
          <p>No hay favoritos seleccionados.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
