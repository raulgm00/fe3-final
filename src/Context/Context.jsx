import axios from "axios";
import {createContext,useContext,useState,useEffect,useReducer,} from "react";

// recipes: [], son los cards de dentistas bucadas por primera ves --> DATA
// favs: [],    son las cards de dentistas agrupadas por favoritas
// theme: '',   es el tema blanco o negro

const initialState = {
  recipes: [],
  favs: [],
  theme: "",
  currentRecipe: [],
};

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "GET_RECIPES_DETAILS":
        return {...state , currentRecipe : action.payload};
    case "ADD_FAVS":
       // Verificar si el favorito ya existe
       const exists = state.favs.some(fav => fav.id === action.payload.id);
       if (exists) {
         return state; // Si ya existe, no hacemos nada
       }
        // Actualizamos el arreglo de favoritos
      const updatedFavs = [...state.favs, action.payload];
      
      // Guardamos los favoritos en localStorage
      localStorage.setItem('favs', JSON.stringify(updatedFavs));

      return { ...state, favs: updatedFavs };
    case "DELETE_FAV": //Lo dejo de tarea utilizar un .filter()
       // Filtramos el favorito que queremos eliminar
      const filteredFavs = state.favs.filter(fav => fav.id !== action.payload.id);
      // Actualizamos el localStorage
      // el arreglo de fav lo convierte en una cadena de texto  en formato JSON.
      localStorage.setItem('favs', JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    default:
      throw new Error();
  }
};

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = "https://jsonplaceholder.typicode.com/users";

  
  useEffect(() => {

     // Cargar favoritos desde el localStorage
     const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
     if (storedFavs.length > 0) {
       dispatch({ type: 'ADD_FAVS', payload: storedFavs });
     }

    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_RECIPES", payload: res.data });
    });
  }, []);

  // Funcion de obtencionde detalle
  const getRecipeDetail = (id) => {
    axios(`${url}/${id}`).then((res) =>{
      console.log(res.data.id ++);
      dispatch({ type: 'GET_RECIPES_DETAILS', payload: res.data});
    })
  }

  return (
    <ContextGlobal.Provider value={{ state, dispatch, getRecipeDetail }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
