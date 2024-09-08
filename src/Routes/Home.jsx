import React from 'react'
import Card from '../Components/Card'
import {useContextGlobal} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();
  return (
    <main className="" >
      <h2>Home</h2>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        
        {state.recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe}/>
        ))}
      </div>
    </main>
  )
}

export default Home