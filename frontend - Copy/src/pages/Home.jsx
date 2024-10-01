import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = 'http://localhost:5000/api/pizzas';
    const response = await fetch(url);
    const data = await response.json();
    setDatos(data);
  };

  return (
    <div className="container">
      <div className="row">
        {datos.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
