import React from "react";
import Button from './Button'
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";


const Card = ({recipe}) => {
  const { name, username, id } = recipe;
  
  const {dispatch} = useContextGlobal();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="../../public/images/doctor.jpg" alt="Dentista"/>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{username}</h3>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Button onClick={() => dispatch({ type: "ADD_FAVS", payload: recipe })}>Add fav</Button>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/detail/" + id} style={{ color: 'rgb(0, 0, 0)' }} >Ver detalle</Link>
        
    </div>
  );
};

export default Card;
