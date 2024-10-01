import React, { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';
import { useUser } from '../contexts/UserContext';  // Importar el UserContext

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal } = useContext(CarritoContext);
  const { token } = useUser();
  const handleCheckout = async (cart) => {
    await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
    });
    if (response.ok) {
      alert('Compra realizada con éxito');
  } else {
      alert('Error en la compra');
  }
};

// Simulación de un carrito

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      <div className="container">
        {cart.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <div className="card mb-4">
              <img src={pizza.img} alt={pizza.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Cantidad: {pizza.quantity}</p>
                <p className="card-text">Precio: ${pizza.price}</p>
                <button className="btn btn-secondary" onClick={() => decreaseQuantity(pizza.id)}>
                  -
                </button>
                <button className="btn btn-secondary" onClick={() => increaseQuantity(pizza.id)}>
                  +
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={handleCheckout} className="btn btn-success">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
