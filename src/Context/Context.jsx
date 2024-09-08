import axios from "axios";
import {createContext, useContext,useState,useEffect,useReducer,} from "react";

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART": //Lo dejo de tarea utilizar un .filter()
      return { ...state, cart: [] };
    default:
      throw new Error();
  }
};

const initialState = {
  recipes: [],
  cart: [],
  theme: "",
  data: []
};


const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  // const [cart, setCart] = useState([]);
  // const [recipes, setRecipes] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.recipes);
      // setRecipes(res.data.recipes);
      dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
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