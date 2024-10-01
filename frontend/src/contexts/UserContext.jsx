import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de usuario
const UserContext = createContext();

// Proveedor del contexto de usuario
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);  // Simula el token con true por defecto

  const logout = () => {
    setToken(false);  // Cambiar el token a false en logout
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para utilizar el contexto de usuario
export const useUser = () => {
  return useContext(UserContext);
};
