import axios from "axios";
import {createContext,useContext,useState,useEffect,useReducer,} from "react";

// recipes: [], son los cards de dentistas bucadas por primera ves --> DATA
// favs: [],    son las cards de dentistas agrupadas por favoritas
// theme: '',   es el tema blanco o negro

const initialState = {
  recipes: [],
  favs: [],
  theme: "",
};

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAVS": //Lo dejo de tarea utilizar un .filter()
      return { ...state, favs: [] };
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
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_RECIPES", payload: res.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
