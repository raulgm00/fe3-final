
import { Route, Routes } from "react-router-dom";
import { routes } from "./Utils/routes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import { useContextGlobal } from "../src/Context/Context"; // Asegúrate de tener la ruta correcta


function App() {
  const { state } = useContextGlobal(); // Obtiene el estado y el dispatch del contexto

  return (
    <>
      <div className={`container ${state.theme === "light" ? "light-theme" : "dark-theme"} ` }>
          <Navbar/>
          <div className={`content`}>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.detail+"/:id"} element={<Detail/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
          </Routes>
          </div>
          <Footer/>
      </div>
    </>
  );
}

export default App;
