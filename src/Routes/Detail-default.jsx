import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  // Busqueda de recurso, de forma dinamica
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Detail Dentist id </h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
      {loading ? (
        "Hagamos de cuenta que soy un spinner..."
      ) : (
        <>
          <img src='../../public/images/doctor.jpg' alt="" />
          <h3>{recipe.name}</h3>
          <h3>{recipe.email}</h3>
          <h3>{recipe.phone}</h3>
          <h3>{recipe.website}</h3>
          
        </>
      )}
    </div>
    </>
  )
}

export default Detail