import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

// recipes: [], son los cards de dentistas bucadas por primera ves --> DATA
// favs: [],    son las cards de dentistas agrupadas por favoritas
// theme: '',   es el tema blanco o negro

const initialState = {
  recipes: [],
  favs: [],
  theme: "light", // Definimos el tema inicial como 'light'
  currentRecipe: [],
};

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "GET_RECIPES_DETAILS":
      return { ...state, currentRecipe: action.payload };
    case "ADD_FAVS":
      const exists = state.favs.some((fav) => fav.id === action.payload.id); // Verificar si el favorito ya existe
      if (exists) {
        return state; // Si ya existe, no hacemos nada
      }
      const updatedFavs = [...state.favs, action.payload]; // Actualizamos el arreglo de favoritos
      localStorage.setItem("favs", JSON.stringify(updatedFavs)); // Guardamos los favoritos en localStorage
      return { ...state, favs: updatedFavs };
    case "DELETE_FAV": //Lo dejo de tarea utilizar un .filter()
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      ); // Filtramos el favorito que queremos eliminar
      localStorage.setItem("favs", JSON.stringify(filteredFavs)); // Actualizamos el localStorage el arreglo de fav lo convierte en una cadena de texto  en formato JSON.
      return { ...state, favs: filteredFavs };
    case "INIT_FAVS":
      return { ...state, favs: action.payload }; // Inicializamos los favoritos con los datos del localStorage
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" }; // Cambiamos el tema entre 'light' y 'dark'
    default:
      throw new Error();
  }
};

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    // Cargar favoritos desde el localStorage
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    if (storedFavs.length > 0) {
      // Usamos "INIT_FAVS" para inicializar el array completo
      dispatch({ type: "INIT_FAVS", payload: storedFavs });
    }

     // Obtener los dentistas
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_RECIPES", payload: res.data });
    });
  }, []);

  // Funcion de obtencionde detalle
  const getRecipeDetail = (id) => {
    axios(`${url}/${id}`).then((res) => {
      console.log(res.data.id++);
      dispatch({ type: "GET_RECIPES_DETAILS", payload: res.data });
    });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, getRecipeDetail }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
