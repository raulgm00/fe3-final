import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useContextGlobal} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state, getRecipeDetail } = useContextGlobal();
  const { currentRecipe } = state;
  const params = useParams();
  
  useEffect(() => {
    getRecipeDetail(params.id); // Usamos el contexto para obtener el detalle
  }, [params.id],getRecipeDetail);
  


  return (
    <>
      <h2>Detail Dentist id </h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        {!currentRecipe ? (
          "Hagamos de cuenta que soy un spinner..."
        ) : (
          <>
            <img src="../../public/images/doctor.jpg" alt="" />
            <h3>{currentRecipe.name}</h3>
            <h3>{currentRecipe.email}</h3>
            <h3>{currentRecipe.phone}</h3>
            <h3>{currentRecipe.website}</h3>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;