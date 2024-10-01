import React, { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CarritoContext);

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${pizza.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(pizza)}>
          Agregar al carrito
        </button>
        
      </div>
    </div>
  );
};

export default CardPizza;
