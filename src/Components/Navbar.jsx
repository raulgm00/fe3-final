import React from 'react'
import { Link } from 'react-router-dom'
import {routes} from '../Utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home} ><h4 className="uppercase-text">Home</h4></Link>
      <Link to={routes.contact} ><h4 className="uppercase-text">Contact</h4></Link>
      <Link to={routes.favs} ><h4 className="uppercase-text">Favs</h4></Link>
      <button>Change theme</button>

    </nav>
  )
}

export default Navbar