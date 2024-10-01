import React, { useEffect, useState } from 'react';
import pizzas from './pizzas.js'; 
import CardPizza from './CardPizza.js'
const Home = () => {
  const [datos, setDatos] = useState([])
  useEffect(()=> {consultarApi()},[])
  const consultarApi = async()=>{
    const url = 'http://localhost:5000/api/pizzas'
    const response = await fetch(url)
    const data = await response.json()
    setDatos(data)
  }
  return (
    <div className="container">
      {datos.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          image={pizza.img}
        />
      ))}
    </div>
  );
};

export default Home;
