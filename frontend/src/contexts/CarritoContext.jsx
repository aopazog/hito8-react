import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar pizza al carrito
  const addToCart = (pizza) => {
    const pizzaInCart = cart.find((item) => item.id === pizza.id);
    if (pizzaInCart) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  // Función para aumentar la cantidad de pizzas en el carrito
  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  // Función para disminuir la cantidad de pizzas en el carrito
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <CarritoContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, calculateTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
